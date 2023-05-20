
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const ScanDone =()=>{
    //hit api and show messgae in model wether it's a success or not
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
      };
    return(<>
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
           Scanned
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>)
}
export default ScanDone