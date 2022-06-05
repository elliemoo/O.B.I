import React from 'react';
import {Card, Col, Row, Carousel } from 'react-bootstrap';
import LustM1 from '../../Races/Lust/Lust-M-1.png'
import LustM2 from '../../Races/Lust/Lust-M-2.png'
import LustF1 from '../../Races/Lust/Lust-F-1.png'
import LustF2 from '../../Races/Lust/Lust-F-2.png'
import './Sloth.modules.css'



const SlothPage = () => {
  return (
    <>
        <Card className='Sloth-container' style={{ width: '100vw', height:'100vh'}}>
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
                <Col sm={8} className='SlothText' style={{color: 'Black'}}>
                <Card.Header><h2>Xenarths</h2></Card.Header>
                <Card.Body>
                        <Card.Title>Sin: Sloth</Card.Title>
                        <Card.Text>
                            <p>Planet Xenarthrys was once a lush and green planet. It supported an abundance of life, and the Xenarths lived in harmony with nature. They never had the need to learn skills or crafts as the food was abundant. In a biblical context, Xenarthrys was the perfect garden of Eden. Its inhabitants lived like the first Man and Women. However, all this came to an abrupt halt when Xenarthrys was spotted by the envious Kleftos during one of their intergalactic transits.</p>
                            <p>Dripping with jealousy from seeing a perfect planet with its contented inhabitants, the Kleftos impulsively seek to destroy Xenarthrys through a combination of biological and chemical warfare. The attack was nearly a success. By disseminating a gene-altering supervirus and a gas 10 times more toxic than phosphine, the Kleftos wiped out approximately 80% of the Xenarths. Trees and animals died, the water was polluted, and the land was transformed into a barren wasteland.</p>
                            <p>The remaining 20% of the Xenarths managed to survive by burrowing deep. Still, they were affected by the supervirus, which was a blessing in disguise because they now had the power of Terrakinesis, skin camouflage and retractable claws. The supervirus also affected the few other surviving animals and plants, causing them to develop physical mutations. Following the catastrophic aftermath, the Xenarths still tried to maintain some semblance of their previous carefree lives. They still lived off the land, doing the absolute minimum to survive.</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </>
    )
}

export default SlothPage