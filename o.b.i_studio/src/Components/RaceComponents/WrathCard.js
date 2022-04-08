import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Wrath from '../../Races/Wrath_Male.png';

const WrathCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Wrath}></Card.Img></Col>
        <Col>
          <Card.Header>Hadesian</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Wrath</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default WrathCard