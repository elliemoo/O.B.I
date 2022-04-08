import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Greed from '../../Races/Greed_Male.png';

const GreedCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Greed}></Card.Img></Col>
        <Col>
          <Card.Header>Kleptians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Greed</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GreedCard