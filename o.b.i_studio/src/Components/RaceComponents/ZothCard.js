import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Zoth from '../../Races/Zoth_Female.png';
const ZothCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Zoth}></Card.Img></Col>
        <Col>
          <Card.Header>Zoth</Card.Header>
          <Card.Body>
            <Card.Title>Sin: </Card.Title>
            <Card.Text> some Details about race</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ZothCard