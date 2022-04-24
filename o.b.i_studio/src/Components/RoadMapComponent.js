import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const RoadMapComponent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () =>  setShow(false);
  const handleShow = () => {
    if(props.detail.props.children) setShow(true)
  }
  return (
    <>
      <div onClick={handleShow}>
        {props.heading}
      </div>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Body>
          {props.detail}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RoadMapComponent