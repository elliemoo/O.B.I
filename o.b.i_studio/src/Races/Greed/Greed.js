import React from 'react';
import {Card, Col, Row, Carousel } from 'react-bootstrap';
import LustM1 from '../../Races/Lust/Lust-M-1.png'
import LustM2 from '../../Races/Lust/Lust-M-2.png'
import LustF1 from '../../Races/Lust/Lust-F-1.png'
import LustF2 from '../../Races/Lust/Lust-F-2.png'
import './Greed.modules.css'



const GreedPage = () => {
  return (
    <>
        <Card className='Greed-container' style={{ width: '100vw', height:'100vh'}} >
            <Row>
                <Col sm={4}>
                <Card>
                    <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={LustM1}
                        alt='LusthMale1'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={LustM2}
                        alt='LustMale2'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={LustF1}
                        alt='LustFemale1'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={LustF2}
                        alt='LustFemale2'
                        />
                    </Carousel.Item>
                    </Carousel>
                    </Card>
                </Col>
                <Col sm={8} className='GreedText' style={{color: 'Black'}}>
                <Card.Header><h2>Kleptians</h2></Card.Header>
                <Card.Body>
                        <Card.Title>Sin: Greed</Card.Title>
                        <Card.Text>
                            <p>At the beginning of intergalactic civilization, there was a race that served the old monarchs (The Silos) as nobility, businessmen, and clerks known as The Kleftians. They were loyal creatures who were satisfied with their high status. The peace between Silos and Kleftians was broken on the rushed light, an unfortunate event in Omniverse history. In the middle of one fine spring evening, war erupted among the Silos across planets. The cause of the battle in the Rushed Light is unknown, but we know a certain Klefti had a part to play in the disagreement amidst kingdoms.</p>
                            <p>Bloodshed increased panic amongst the other races, and destruction was joint throughout that fateful night. As the sun rose, the royalty and warriors retreated to tend to the wounded. Frantically, the Silos announced that they would be going into exile to protect their loved ones and friends with their luxuries. The Kleftians, unease with the Royalties claiming their assets, hoarded their rare stones, gold coins, and other valuables and escaped to other planets.</p>
                            <p>The Klefti treasurers emptied the 13 Royal Treasuries. Eventually, they left nothing but a penny for the Silos Royalty, deserting them, which led to their extinction. The Kleftians now roam the streets thieving and exploiting the rich, viewing them as their prey. When it comes to communication/transport between intergalactic planets, you can always spot a Klefti nearby by their confident language, heaps of jewellery, and unique hair-tie. They associate themselves with the old aristocracy, and they try to steal, earn and manipulate to earn their status as Silos someday. Furthermore, they are experts in finance and trade and can be used as good advisors and commanders if you promise them a thousand gold coins.</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </>
    )
}

export default GreedPage