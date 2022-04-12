import React from 'react';
import {Container, Card, Col, Row, Button } from 'react-bootstrap';
import Lust from '../../Races/Lust_Female.png';

const LustCard = () => {
  return (
    <Card id='Lust' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Lust}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Valkarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Lust</Card.Title>
            <Card.Text>
              Lust is defined as the heart's purest form of desire, which raises the question, what do we lust for? Is it power? Fame? Wealth? Status? Dominance overall? Temptations of the flesh? For the valkarian, all of the above drives them and their need to lust. The valkarians desire to be pure and close to perfection as possible; this is the reason their desires almost destroyed them and wiped them from the multiverse. One of the valkary's laws is to keep the bloodline pure and never to mix their vanity with anything outside of Lagneía, for the world they see as unfit to walk among them. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default LustCard