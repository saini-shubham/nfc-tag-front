import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import tagServices from "../services/tagServices";
import Swal from "sweetalert2";

const ScanDone = () => {
  //hit api and show messgae in model wether it's a success or not
  const tagId = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState()
  const handleClose = () => {
    setShow(false);
    navigate("/starter");
  };
  useEffect(() => {
    console.log(tagId);
    tagServices
      .scanTag(tagId.tagId)
      .then((res) => {
        console.log(res.data);
        //setMessage(res.data.message)
        if (res.data.message && res.data.message === "Scanned Successfully") {
          Swal.fire({
            icon:
              res.data.message === "Scanned Successfully" ? "success" : "info",
            title: res.data.message,
            //text: res.data.message,
          }).then(() => navigate("/starter"))
        }
        else {
          Swal.fire({
            icon: "info",
            title: res.data.error || res.data.message ,
            //text: res.data.message,
          }).then(() => navigate("/starter"))
        }

      })
      //.catch((err) => console.log(err));
      .catch((err) =>
        //console.log(err.response.data.error)
        //setMessage(err.data.message)
        Swal.fire({ icon: "error", title: err.response.data.error }).then(() => navigate("/starter"))
      );
  }, []);

  return (
    <>
      {/* <Modal show={show} onHide={handleClose} size="sm" scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Done</Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
      {/* <h2>{message}</h2> */}
      {/* </Modal.Body> */}
      {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      {/* </Modal> */}
    </>
  );
};
export default ScanDone;
