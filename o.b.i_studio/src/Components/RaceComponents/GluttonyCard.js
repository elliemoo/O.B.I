import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Gluttony from '../../Races/Gluttony_Female.png';
import raceData from '../../Data.json'
const GluttonyCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Gluttony}></Card.Img></Col>
        <Col>
          <Card.Header>Ardenterians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Gluttony</Card.Title>
            <Card.Text>{raceData.Race.Gluttony}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GluttonyCard