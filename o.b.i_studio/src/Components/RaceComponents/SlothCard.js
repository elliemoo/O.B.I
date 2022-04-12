import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Sloth from '../../Races/Sloth_Female.png';
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
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default SlothCard