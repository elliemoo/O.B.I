import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Sloth from '../../Races/Sloth_Female.png';
import { Button } from 'bootstrap';
import ReadMore from './ReadMore';

const SlothCard = () => {
  return (
    <Card id='Sloth' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Sloth}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Xenarths</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Sloth</Card.Title>
            <Card.Text>
              Planet Xenarthrys was once a lush and green planet. It supported an abundance of life, and the Xenarths lived in harmony with nature. They never had the need to learn skills or crafts as the food was abundant. In a biblical context, Xenarthrys was the perfect garden of Eden. Its inhabitants lived like the first Man and Women. However, all this came to an abrupt halt when Xenarthrys was spotted by the envious Kleftos during one of their intergalactic transits. 
            </Card.Text>
            <ReadMore target='Sloth'>
              <p>Dripping with jealousy from seeing a perfect planet with its contented inhabitants, the Kleftos impulsively seek to destroy Xenarthrys through a combination of biological and chemical warfare. The attack was nearly a success. By disseminating a gene-altering supervirus and a gas 10 times more toxic than phosphine, the Kleftos wiped out approximately 80% of the Xenarths. Trees and animals died, the water was polluted, and the land was transformed into a barren wasteland. </p>
              <p>The remaining 20% of the Xenarths managed to survive by burrowing deep. Still, they were affected by the supervirus, which was a blessing in disguise because they now had the power of Terrakinesis, skin camouflage and retractable claws. The supervirus also affected the few other surviving animals and plants, causing them to develop physical mutations. Following the catastrophic aftermath, the Xenarths still tried to maintain some semblance of their previous carefree lives. They still lived off the land, doing the absolute minimum to survive.</p>
            </ReadMore>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default SlothCard