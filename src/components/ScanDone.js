import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import tagServices from "../services/tagServices";
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
    console.log(tagId)
    tagServices
      .scanTag(tagId.tagId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          <Modal.Title>Done</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Scanned successfully</h2>
        </Modal.Body>
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
