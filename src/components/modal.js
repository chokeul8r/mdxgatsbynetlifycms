import React, { useState } from "react"
import { Link } from "gatsby"
import { Modal, Button, Form } from "react-bootstrap"
import styled from "styled-components"

const StyledButton = styled(Button)`
  &:focus,
  &:active {
    outline: none !important;
    outline-offset: none !important;
  }
`

const ModalPopUp = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="d-flex justify-content-center">
        <StyledButton
          className="w-100 zoomer"
          variant="primary"
          size="lg"
          onClick={handleShow}
        >
          Call To Action
        </StyledButton>
      </div>
      <Modal
        // className="bg-primary"
        id="mc_embed_signup"
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
          <Form
            action="https://starkmedia.us3.list-manage.com/subscribe/post?u=0715d592a8d2c2f808b8fe4e3&amp;id=144e0eb422"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
          >
            <Form.Group
              className="mc-field-group"
              controlId="formGroupFirstName"
            >
              <Form.Label className="text-white" for="mce-FNAME">
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                value=""
                name="FNAME"
                className=""
                id="mce-FNAME"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group
              className="mc-field-group"
              controlId="formGroupLastName"
            >
              <Form.Label className="text-white" for="mce-LNAME">
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                value=""
                name="LNAME"
                className=""
                id="mce-LNAME"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mc-field-group" controlId="formGroupEmail">
              <Form.Label className="text-white" for="mce-EMAIL">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Enter email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-primary">
          <Link
            to="/thank-you"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="bg-light text-dark btn btn-secondary"
            variant="secondary"
            onClick={handleClose}
          >
            Submit
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPopUp
