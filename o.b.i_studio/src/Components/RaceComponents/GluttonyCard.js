import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Gluttony from '../../Races/Gluttony_Female.png';
const GluttonyCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Gluttony}></Card.Img></Col>
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

export default GluttonyCard