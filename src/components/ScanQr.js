// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import "./scanQr.css";
import { useState } from "react";
import QrReader from "modern-react-qr-reader";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { getUserType } from "../services/common";

const ScanQr = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState("environment");
    const [startScan, setStartScan] = useState(true);
    const [loadingScan, setLoadingScan] = useState(false);
    const [tagId, setTagId] = useState();
    const [show, setShow] = useState(true);
    const userType = getUserType();
    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData, typeof scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setTagId(scanData);
            setStartScan(false);
            setLoadingScan(false);

            // setPrecScan(scanData);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };

    const handleClose = () => {
        setShow(false);
        navigate("/starter");
    };

    return (
        <>
            {/* <div className="ScanQr"> */}
            <Modal show={show} onHide={handleClose} size="sm" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Scan Tag</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h2>{message}</h2> */}
                    {startScan && (
                        <>

                            <QrReader
                                //  onResult={(result, error) => {
                                //     console.log(result,error)
                                //   }}
                                facingMode="environment"
                                delay={500}
                                onError={handleError}
                                onScan={handleScan}
                            // chooseDeviceId={()=>selected}
                            //style={{ width: "300px" }}
                            />
                        </>
                    )}
                    {loadingScan && <p>Loading</p>}
                    {tagId !== "" && <p>{tagId}</p>}
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
            </Modal>
            {
                !loadingScan ? (
                    <>
                        {userType === "scanner" && navigate("/tags/scan/" + tagId)}
                        {userType === "tagger" && navigate("/tags/register/" + tagId)}
                        {userType === "admin" && navigate("/tags/register/" + tagId)}
                        {userType === "superAdmin" && navigate("/tags/register/" + tagId)}
                    </>
                ) :
                    <p>Loading...</p>
            }
            {/* </div> */}
        </>
    );
};

export default ScanQr;
