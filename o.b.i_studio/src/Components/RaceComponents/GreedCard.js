import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Greed from '../../Races/Greed_Male.png';
import { Button } from 'bootstrap';
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
            <ReadMore target='Greed'>
              <p>Bloodshed increased panic amongst the other races, and destruction was joint throughout that fateful night. As the sun rose, the royalty and warriors retreated to tend to the wounded. Frantically, the Silos announced that they would be going into exile to protect their loved ones and friends with their luxuries. The Kleftians, unease with the Royalties claiming their assets, hoarded their rare stones, gold coins, and other valuables and escaped to other planets. </p>
              <p>The Klefti treasurers emptied the 13 Royal Treasuries. Eventually, they left nothing but a penny for the Silos Royalty, deserting them, which led to their extinction. The Kleftians now roam the streets thieving and exploiting the rich, viewing them as their prey. When it comes to communication/transport between intergalactic planets, you can always spot a Klefti nearby by their confident language, heaps of jewellery, and unique hair-tie. They associate themselves with the old aristocracy, and they try to steal, earn and manipulate to earn their status as Silos someday. Furthermore, they are experts in finance and trade and can be used as good advisors and commanders if you promise them a thousand gold coins.</p>
            </ReadMore>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GreedCard