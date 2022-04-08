import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import raceData from '/Users/hemanthvejandla/Documents/GitHub/O.B.I/o.b.i_studio/src/Data.json'
import Lust from '../../Races/Lust_Female.png';
const LustCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Lust}></Card.Img></Col>
        <Col>
          <Card.Header>Valkarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Lust</Card.Title>
            <Card.Text>{raceData.Race.Lust}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default LustCard