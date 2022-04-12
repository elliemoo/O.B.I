import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Envy from '../../Races/Envy_Male.png';
import ReadMore from './ReadMore';

const EnvyCard = () => {
  return (
    <Card id='Envy' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Envy}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Ophites</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Envy</Card.Title>
            <Card.Text>
              The Ophites used to be the kindest race that focused on helping others. They gave whatever they had to help others for hundreds of years. Ophites would travel to the 7 other planets throughout the omniverse using their plasma staphs to help other races.Other races, however, started to take advantage of their kindness. These others took everything from them and left them empty-handed and feeling empty-hearted. They returned to their own planet Ophius, and that is where they enacted their future. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default EnvyCard