import React from 'react';
import {Card, Col, Row, Carousel } from 'react-bootstrap';
import Background1 from '../../Images/5.png'
import WrathM1 from '../../Races/Wrath/Wrath-M-1.png'
import WrathM2 from '../../Races/Wrath/Wrath-M-2.png'
import WrathF1 from '../../Races/Wrath/Wrath-F-1.png'
import WrathF2 from '../../Races/Wrath/Wrath-F-2.png'




const WrathPage = () => {
  return (
<Card>
<Card.Img src={Background1}/>
<Card.ImgOverlay>
    <Row>
        <Col sm={4}>
        <Card>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={WrathM1}
                alt='WrathMale1'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={WrathM2}
                alt='WrathMale2'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={WrathF1}
                alt='WrathFemale1'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={WrathF2}
                alt='WrathFemale2'
                />
            </Carousel.Item>
            </Carousel>
            </Card>
        </Col>
        <Col sm={8} className='WrathText'>
          <Card.Header>Hadesian</Card.Header>
          <Card.Body>
                <Card.Title>Sin: Wrath</Card.Title>
                <Card.Text>
                    <p>The Hadesian is a Mysterious Race known for its shadow-like lurking over The Omniverse; they kept to themselves as they saw no reason to interact with the other Races, seeing themselves as the Peak in Apex Hunting. They were born with a fantastic gift of Stealth having Holes of Emptiness around their Chin, Palms, and Wrapped Around their Legs that produced a smokey substance that could cloak them in smoke for the younglings. The Adults could use it to harness it and become living Shadows. This Shadow Form allowed them to add Smoke properties to physical objects that could then be brought back to form. This allowed for devastating blows of lethal hits.</p>
                    <p>Whether it looks like a bit of smoke blowing at you or engulfing you, it could cause massive destruction. This led them to cause a shadow to form once they all channelled their smoke into an energy source that linked them to the other 7; as the vast Universe is connected, their background is still being discovered today. However, once the first bloodline fell to their sinful Gluttony of Demontnyl, these final added Universe of the Hadesians were slandered and accused of producing one of the Main Chemicals. This forced Hadesians to grow even Colder than they once were.</p>
                    <p>As they grew colder, they developed a wave of anger, nothing other than a passionate, raging, wrathful anger. This Wrath became their sin as they began fighting for supremacy in their Universe and the overall Omniverse. Blaming OMNI himself for their misfortune, swearing to bring even him down with their swift yet deadly Wrath. The Hadesians are a Stealthy, deadly, and overall brutal race that channels its smoke into a storm like concentration, able to cause electricity to surge through its smoke almost like a personal thunderstorm.</p>
                    <p>Lightning surrounds the smoke when this race is extremely angry, and with Wrath now taken over, they always are angry. They have a dark shadow like smoke that goes up against their arms from their hands, almost wrapping their arms in smoke. Their leg's also omitted this smoke around their legs and pan out around them like an aura. Their chins also have this smoke coming out with it flowing through their short hair. They wield the Vajra, an item they use to channel their smoke and electricity into, then manifest it for their arsenal of weaponry by strapping it to their back as a vessel to be used when they need to.</p>
                    <p>This Vajra Vessel is their infinite storage for all their most sacred possessions. Their Trident is Enveloped with electric charges that can be discharged like a bolt of lightning on whoever may feel safe at a range. They have their masterpieces in close Range/Stealth Weaponry: Recurve Bow made from a deep dark carbon fibre-like material; these bow's named nocturnus have arrows made of Hadesians own smoke to manifest into life at the Hadesians will. You may think a bit of smoke is coming your way when really it's an onslaught of Hadesian arrows. They're usually using they're smoke to encapsulate it's foe and then shock them to death in a torturous and brutal way. They can use their smoke to get into people's lungs and then bring it to physical form, rupturing their foes internal organs. This race works off stealth and precise deadly blows. Be warned, for you never know when the shadow you see at the corner of your eye is safe or not...</p>
                </Card.Text>
            </Card.Body>
        </Col>
      </Row>
      </Card.ImgOverlay>
</Card>
    )
}

export default WrathPage