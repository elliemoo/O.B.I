import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Greed from '../../Races/Greed_Male.png';
import raceData from '../../Data.json'

const GreedCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Greed}></Card.Img></Col>
        <Col>
          <Card.Header>Kleptians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Greed</Card.Title>
            <Card.Text>{raceData.Race.Greed}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GreedCard