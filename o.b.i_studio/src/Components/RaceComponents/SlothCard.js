import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Sloth from '../../Races/Sloth_Female.png';
import raceData from '../../Data.json'

const SlothCard = () => {
  return (
    <Card className='race-card'>
      <Row>
        <Col><Card.Img src={Sloth}></Card.Img></Col>
        <Col>
          <Card.Header>Xenarths</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Sloth</Card.Title>
            <Card.Text>{raceData.Race.Sloth}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default SlothCard