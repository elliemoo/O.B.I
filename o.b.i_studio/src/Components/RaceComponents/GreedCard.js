import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Greed from '../../Races/Greed_Male.png';
import ReadMore from './ReadMore';

const GreedCard = () => {
  return (
    <Card id='Greed' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Greed}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Kleptians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Greed</Card.Title>
            <Card.Text>
              At the beginning of intergalactic civilization, there was a race that served the old monarchs (The Silos) as nobility, businessmen, and clerks known as The Kleftians. They were loyal creatures who were satisfied with their high status. The peace between Silos and Kleftians was broken on the rushed light, an unfortunate event in Omniverse history. In the middle of one fine spring evening, war erupted among the Silos across planets. The cause of the battle in the Rushed Light is unknown, but we know a certain Klefti had a part to play in the disagreement amidst kingdoms. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GreedCard