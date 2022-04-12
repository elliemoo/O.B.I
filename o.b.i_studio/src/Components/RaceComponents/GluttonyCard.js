import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Gluttony from '../../Races/Gluttony_Female.png';
import ReadMore from './ReadMore';

const GluttonyCard = () => {
  return (
    <Card id='Gluttony' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Gluttony}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Ardenterians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Gluttony</Card.Title>
            <Card.Text>
            The race Ardenterians was a Glorious Angellic Paladin Race. One that once brought law and order to the Omniverse, seen as the saviors and bringers of Peace; after all the great Interdimensional Intersection Wars. This Race was beloved and revered as the highest of all the beautiful seven. Their platinum and red attire were seen as a sign of the bloodline of the Sacred Seven. A Tale so old the only where to honestly read of it is in The catacomb of The Omniverse. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GluttonyCard