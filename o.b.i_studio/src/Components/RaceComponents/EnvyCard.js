import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Envy from '../../Races/Envy_Male.png';
import raceData from '../../Data.json'

const EnvyCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Envy}></Card.Img></Col>
        <Col>
          <Card.Header>Ophites</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Envy</Card.Title>
            <Card.Text> {raceData.Race.Envy}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default EnvyCard