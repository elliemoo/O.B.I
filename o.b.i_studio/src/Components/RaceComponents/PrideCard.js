import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Pride from '../../Races/Pride_Male.png';
import ReadMore from './ReadMore';

const PrideCard = () => {
  return (
    <Card id='Pride' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Pride}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Icarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Pride</Card.Title>
            <Card.Text>
              For centuries, the Icarians have been a beacon of science, civilization, and military power within their realm. Their cities were massive, their palace so high that they could almost cover the sun. Such greatness, however, came with a price; they subjugated every other life form within their realm that could pose a threat to their power, and when that wasn't enough, they sought to conquer nature itself. They desperately tried to find a way to enhance their bodies and elongate their life, injecting themselves with substances created by their alchemists, at the core of which was a scarce and precious material, dragon scales; they would get chopped into small pieces and dissolved in the potion. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default PrideCard