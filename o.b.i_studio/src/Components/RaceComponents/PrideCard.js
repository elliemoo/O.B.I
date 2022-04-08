import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pride from '../../Races/Pride_Male.png';

const PrideCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Pride}></Card.Img></Col>
        <Col>
          <Card.Header>Icarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Pride</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default PrideCard