import React from 'react'
import { Card, Col, Row,Button } from 'react-bootstrap'
import Wrath from '../../Races/Wrath_Male.png';
import Background from '../../Images/2.png';
import ReadMore from './ReadMore';

const WrathCard = () => {
  return (
    <Card id='Wrath' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Wrath}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Hadesian</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Wrath </Card.Title>
            <Card.Text>
            The Hadesian is a Mysterious Race known for its shadow-like lurking over The Omniverse; they kept to themselves as they saw no reason to interact with the other Races, seeing themselves as the Peak in Apex Hunting. They were born with a fantastic gift of Stealth having Holes of Emptiness around their Chin, Palms, and Wrapped Around their Legs that produced a smokey substance that could cloak them in smoke for the younglings. The Adults could use it to harness it and become living Shadows. This Shadow Form allowed them to add Smoke properties to physical objects that could then be brought back to form. This allowed for devastating blows of lethal hits. 
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default WrathCard