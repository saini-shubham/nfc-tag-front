import React, { useCallback, useContext, useEffect, useState } from "react";
import Scanner from "../components/Scanner/Scanner";
import { ActionsContext } from "../context";
import ScanDone from "./ScanDone";
import TagRegister from "./TagRegister";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Scan = () => {
  const [message, setMessage] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const { actions, setActions } = useContext(ActionsContext);
  const [userType, setUserType] = useState("scanner");
  const scan = useCallback(async () => {
    if ('NDEFReader' in window) {
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
                    scan: 'scanned',
                    write: null
                });
            };

        } catch(error){
            console.log(`Error! Scan failed to start: ${error}.`);
        };
    }
  }, [setActions]);
  const navigate = useNavigate();
  const onReading = ({ message, serialNumber }) => {
    setSerialNumber(serialNumber);
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
        //  <TagRegister tagId={serialNumber}></TagRegister>
        <div>
          {/* <p>Serial Number: {serialNumber}</p> */}
          {userType === "scanner" && navigate('/tags/scan')}
            
          {userType === "tagger" && navigate("/tags/register:serialNumber")}
          {userType === "admin" && navigate("/tags/register:serialNumber")}
          {userType === "superAdmin" && navigate("/tags/register:serialNumber")}
          {/* <p>Message: {message}</p> */}
        </div>
      ) : (
        <Scanner status={actions.scan}></Scanner>
      )}
      {/* {actions.scan === 'scanned' && userType ==="tagger" &&  <TagRegister tagId={serialNumber}></TagRegister>} */}
    </>
  );
};

export default Scan;

// import React, { useCallback, useContext, useEffect, useState } from 'react';
// import Scanner from './Scanner/Scanner';

// import { useSelector, useDispatch } from "react-redux";
// import { tagAction } from '../store/tagSlice';
// const Scan = () => {
//     const [message, setMessage] = useState('Scanned');
//     const [serialNumber, setSerialNumber] = useState('');
//     const { actions, setActions} = useState(false)
//     //const tagScanStatus= useSelector(state => state.tagDetails.tagScanStatus)
//     const dispatch = useDispatch()

//     const scan = useCallback(async() => {
//         console.log("scannig started")
//         if ('NDEFReader' in window) {
//             try {
//                 const ndef = new window.NDEFReader();
//                 await ndef.scan();

//                 console.log("Scan started successfully.");
//                 alert("Scan started successfully.");
//                 ndef.onreadingerror = () => {
//                     console.log("Cannot read data from the NFC tag. Try another one?");
//                     //alert("Cannot read data from the NFC tag. Try another one?");
//                 };

//                 ndef.onreading = event => {
//                     console.log("NDEF message read.");
//                     onReading(event);
//                     //dispatch(tagAction.setTagScanStatus(true))
//                     setActions(true);
//                 };

//             } catch(error){
//                 console.log(`Error! Scan failed to start: ${error}.`);
//             };
//         }
//     //},[tagScanStatus]);
//     },[actions]);

//     const onReading = ({message, serialNumber}) => {
//         // alert("hi")
//         // alert(serialNumber)
//         setSerialNumber(serialNumber);
//         // for (const record of message.records) {
//         //     switch (record.recordType) {
//         //         case "text":
//         //             const textDecoder = new TextDecoder(record.encoding);
//         //             setMessage(textDecoder.decode(record.data));
//         //             break;
//         //         case "url":
//         //             // TODO: Read URL record with record data.
//         //             break;
//         //         default:
//         //             // TODO: Handle other records with record data.
//         //         }
//         // }
//     };

//     useEffect(() => {
//         console.log("in scan.js")
//         scan();
//     }, [scan]);

//     return(
//         <>
//             {/* {tagScanStatus=== true ?   */}
//             {actions === true ?
//             <div>
//                 <p>Serial Number: {serialNumber}</p>
//                 <p>Message: {message}</p>
//             </div>
//             : <Scanner></Scanner> }
//         </>
//     );
// };

// export default Scan;
