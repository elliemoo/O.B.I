import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pride from '../../Races/Pride_Male.png';
import raceData from '../../Data.json'

const PrideCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Pride}></Card.Img></Col>
        <Col>
          <Card.Header>Icarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Pride</Card.Title>
            <Card.Text>{raceData.Race.Pride}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default PrideCard