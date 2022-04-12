import React from 'react';
import {Container, Card, Col, Row, Button } from 'react-bootstrap';
import Zoth from '../../Races/Zoth_Female.png';
const ZothCard = () => {
  return (
    <Card id='Zoth' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Zoth}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Zoth</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Zoth </Card.Title>
            <Card.Text>
            The Zoth’s are an anamoly amongst The Omniverse, they were created from Mutations within the Dark Matter along the outer edge of the Omniverse. This Mutative Reaction caused an interdimensional rift in space (also known as the Hellion-Gate) to be created birthing the final eighth Universe. As they emerged from their Hellish Realm they were met with only judgement by the other Race’s. Seen as the Demonic Race come to rule over all. At first due to this judgement they grew hatred and caused Chaos which only caused them to be seen as a new Sin amongst The Omniverse as Chaos. Their Origin still Unknown to all, only real explanation is they are amalgamations of every Race's Sin Combined into the Embodiment of Sadistic Chaotic Demonized Souls with no love or compassion in their heart, but with all this being Speculation who's to say they aren't truly the Beast to End all Others. They just may be OMNI's Saving Grace...
            </Card.Text>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ZothCard