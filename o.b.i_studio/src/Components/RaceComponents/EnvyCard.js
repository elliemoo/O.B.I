import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Envy from '../../Races/Envy_Male.png';
import Background from '../../Images/3.png';
import ReadMore from './ReadMore';

const EnvyCard = () => {
  return (
    <Card id='Envy' className='race-card'>
      <Card.Img className= 'race-background' src={Background} alt="Card image"/>
      <Card.ImgOverlay>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Envy}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Ophites</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Envy</Card.Title>
            <Card.Text>
              The Ophites used to be the kindest race that focused on helping others. They gave whatever they had to help others for hundreds of years. Ophites would travel to the 7 other planets throughout the omniverse using their plasma staphs to help other races.Other races, however, started to take advantage of their kindness. These others took everything from them and left them empty-handed and feeling empty-hearted. They returned to their own planet Ophius, and that is where they enacted their future. 
            </Card.Text>
            <ReadMore target='Envy'>
              <p>The Ophites, once a kind and helpful race, started to see what these other races had and all they had lost to them. They grew resentful and green with envy. This is where everything took a turn. Ophites vowed to take everything back from each other and all these races, letting their envy consume them entirely. They grew eyes all over their body to see everyone and their treasures from all sides. </p>
              <p>They have a severe lack of trust due to being taken advantage of for as long as they were. Once a kind, people have now fallen to hate and envy. The Ophites wanted more, driven by selfishness. They used their water plasma staffs to create a water vortex with plasma that spun so fast that they made black holes that they could control to travel to these other 7 races across The Omniverse. They sleuthed around eating the populace and stealing all of their possessions through their black holes. They lived like this for millennia until they ran into the Zoth. They saw them for what they were, how powerful they were, and prioritised avoiding them.</p>
            </ReadMore>
          </Card.Body>
        </Col>
      </Row>
      </Card.ImgOverlay>
    </Card>
  )
}

export default EnvyCard