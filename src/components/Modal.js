import React, { Fragment, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Forms from "./Forms";
const Modalen = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Button color="success" onClick={toggle}>
        Send application
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Forms />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Send
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default Modalen;
