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
        Swal.fire({
          icon:
            res.data.message === "Already Scanned Today" ? "info" : "success",
          title: "Success" + tagId.tagId,
          text: res.data.message,
        }).then(() => navigate("/starter"));
      })
      //.catch((err) => console.log(err));
      .catch((err) =>
        Swal.fire({ icon: "error", title: err.data, text: err.data.message })
      );
  }, []);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        //dialogClassName="modal-90w"
        scrollable={true}
        //fullscreen={true}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Done</Modal.Title> */}
        </Modal.Header>
        {/* <Modal.Body>
          <h2>Scanned successfully</h2>
        </Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default ScanDone;
