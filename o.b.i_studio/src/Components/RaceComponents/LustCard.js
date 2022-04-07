import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Lust from '../../Races/Lust_Female.png';
const LustCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Lust}></Card.Img></Col>
        <Col>
          <Card.Header> Race Name</Card.Header>
          <Card.Body>
            <Card.Title> title for race</Card.Title>
            <Card.Text> some Details about race</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default LustCard