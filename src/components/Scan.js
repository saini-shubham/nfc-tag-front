import React, { useCallback, useContext, useEffect, useState } from "react";
import Scanner from "../components/Scanner/Scanner";
import { ActionsContext } from "../context";
import ScanDone from "./ScanDone";
import TagRegister from "./TagRegister";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserType } from "../services/common";
const Scan = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // 10:WE:23  ; 10:W  ;
  const [tagId, setTagId] = useState();
  const { actions, setActions } = useContext(ActionsContext);
  //const [userType, setUserType] = useState("scanner");
  const userType = getUserType();

  const scan = useCallback(async () => {
    if ("NDEFReader" in window) {
      try {
        const ndef = new window.NDEFReader();
        await ndef.scan();

        console.log("Scan started successfully.");
        ndef.onreadingerror = () => {
          console.log("Cannot read data from the NFC tag. Try another one?");
        };

        ndef.onreading = event => {
          console.log("NDEF message read.");
          onReading(event);
          setActions({
            scan: "scanned",
            write: null,
          });
        };
      } catch (error) {
        console.log(`Error! Scan failed to start: ${error}.`);
      }
    }
  }, [setActions]);
  
  const onReading = ({ message, serialNumber }) => {
    //alert(serialNumber)
    setTagId(serialNumber);
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          setMessage(textDecoder.decode(record.data));
          break;
        case "url":
          // TODO: Read URL record with record data.
          break;
        default:
        // TODO: Handle other records with record data.
      }
    }
  };

  useEffect(() => {
    scan();
  }, [scan]);

  return (
    <>
      {/* {actions.scan === 'scanned' ?  navigate('/tags/register') */}
      {actions.scan === "scanned" ? (
        //  <TagRegister tagId={tagId}></TagRegister>
        <div>
          {userType === "scanner" && navigate("/tags/scan/" + tagId)}
          {userType === "tagger" && navigate("/tags/register/" + tagId)}
          {userType === "admin" && navigate("/tags/register/" + tagId)}
          {userType === "superAdmin" && navigate("/tags/register/" + tagId)}
          {/* <p>Message: {message}</p> */}
        </div>
      ) : (
        <Scanner status={actions.scan}></Scanner>
      )}
      {/* {actions.scan === 'scanned' && userType ==="tagger" &&  <TagRegister tagId={tagId}></TagRegister>} */}
    </>
  );
};

export default Scan;
