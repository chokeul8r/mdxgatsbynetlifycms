import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const ModalPopUp = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button
          className="w-100 zoomer"
          variant="primary"
          size="lg"
          onClick={handleShow}
        >
          Call To Action
        </Button>
      </div>
      <Modal
        // className="bg-primary"
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary">
          <Form>
            <Form.Group controlId="formGroupPassword">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-primary">
          <Button className="bg-light text-dark" variant="secondary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPopUp
