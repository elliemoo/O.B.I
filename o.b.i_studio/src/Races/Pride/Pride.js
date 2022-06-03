import React from 'react';
import {Card, Col, Row, Carousel } from 'react-bootstrap';
import LustM1 from '../../Races/Lust/Lust-M-1.png'
import LustM2 from '../../Races/Lust/Lust-M-2.png'
import LustF1 from '../../Races/Lust/Lust-F-1.png'
import LustF2 from '../../Races/Lust/Lust-F-2.png'
import './Pride.modules.css'



const PridePage = () => {
  return (
    <>
        <Card className='Pride-container'  >
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
                <Col sm={8} className='PrideText' style={{color: 'White'}}>
                <Card.Header><h2>Icarians</h2></Card.Header>
                <Card.Body>
                        <Card.Title>Sin: Pride</Card.Title>
                        <Card.Text>
                            <p>For centuries, the Icarians have been a beacon of science, civilization, and military power within their realm. Their cities were massive, their palace so high that they could almost cover the sun. Such greatness, however, came with a price; they subjugated every other life form within their realm that could pose a threat to their power, and when that wasn't enough, they sought to conquer nature itself. They desperately tried to find a way to enhance their bodies and elongate their life, injecting themselves with substances created by their alchemists, at the core of which was a scarce and precious material, dragon scales; they would get chopped into small pieces and dissolved in the potion.</p>
                            <p>The use of those scales had for many centuries been banned, as the dragon population had been steadily decreasing due to the intensive hunt. But that wasn't of any concern to the Icarians now. The process seemed to be working; they became more robust, faster and immune to most diseases. However, it became clear that something had gone terribly wrong after some time; people seemed to have become distant, cold, and almost emotionless. Then the first babies were born; their faces were scarred, their skin was full of marks, bubbles, almost like they had burns all over their bodies; people started fighting, each city accusing the other of having caused this catastrophe.</p>
                            <p>At this time, the potion supply started to run low; people realized that their organism could not survive without it and that there were very few scales left and almost no way to get more. Soon the realm plummeted into a brutal and bloody civil war. Those once-great cities fell into ruin, one after the other, as the entire realm dove into a new dark age. A great scientist, who had pioneered the body enhancement potions, decided to create a weapon that would ensure his city's survival amongst all others.</p>
                        </Card.Text>

                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </>
    )
}

export default PridePage