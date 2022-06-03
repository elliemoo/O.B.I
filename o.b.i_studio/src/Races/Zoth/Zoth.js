import React from 'react';
import {Card, Col, Row, Carousel } from 'react-bootstrap';
import LustM1 from '../../Races/Lust/Lust-M-1.png'
import LustM2 from '../../Races/Lust/Lust-M-2.png'
import LustF1 from '../../Races/Lust/Lust-F-1.png'
import LustF2 from '../../Races/Lust/Lust-F-2.png'
import './Zoth.modules.css'



const ZothPage = () => {
  return (
    <>
        <Card className='Zoth-container' style={{ width: '100vw', height:'100vh'}}>
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
                <Col sm={8} className='ZothText' style={{color: 'white'}}>
                <Card.Header><h2>Zoth</h2></Card.Header>
                <Card.Body>
                        <Card.Title>Sin: Zoth</Card.Title>
                        <Card.Text>
                            <p>The Zoth’s are an anamoly amongst The Omniverse, they were created from Mutations within the Dark Matter along the outer edge of the Omniverse. This Mutative Reaction caused an interdimensional rift in space (also known as the Hellion-Gate) to be created birthing the final eighth Universe. As they emerged from their Hellish Realm they were met with only judgement by the other Race’s. Seen as the Demonic Race come to rule over all. At first due to this judgement they grew hatred and caused Chaos which only caused them to be seen as a new Sin amongst The Omniverse as Chaos. Their Origin still Unknown to all, only real explanation is they are amalgamations of every Race's Sin Combined into the Embodiment of Sadistic Chaotic Demonized Souls with no love or compassion in their heart, but with all this being Speculation who's to say they aren't truly the Beast to End all Others. They just may be OMNI's Saving Grace...</p>
                            <p>With Dark Matter coursing through their Veins they control it and harness it to manipulate it into real Matter like Weaponry. This Weaponry being Scythe based as that is their weapon of choice! They manipulate Dark Matter to create a Demonic Arsenal of Dark Matter Infused Scythes, Dark Matter Magicka, and Chained Kama’s that only extend further as they channel Dark Matter into Physical Form only to unleash Pain, and Retribution across the cosmos. They’re home Verse is a hellscape full of Grotesque, Demonic, and overall very Gruesome imagery. As a Demon Based Race they’re choice of clothing would be Decayed Angel Wing Skirts/Loincloth covered by their Fallen Foes, Leather Like Jacket's Symbolizing Rank with Either Dark Matter Resonance, or Any of the Seven Race's Skin. They have different Hairstyle's Usually only Green, and Blood Soaked Grey, Only the Highest Rank's Still have the Luxurious White Hair.</p>
                            <p>This Race has commited many inhumane Atrocities Across The Omniverse out of the Hatred it Lashed out. They have Scars From Being Manifested with their Hearts Torn out by The High Council; to Guage Zoth Rank Amongst others. This Ranking System was Created from their Very Manifestation as Each has a Unified Hivemind-Like Voice in it’s head. Forever keeping them in a Transe State that gather’s emotional, and educational information as it comes. This making this Demonic Race very Progressive in seeing Value’s and Breaking the Cycle of allowing the Hatred to only Cause them to Destroy Mindlessly. When truly if they Vesseled all that Hatred into a Positive Motivation to Create Beautifully and truly make a change it can Make Wave’s across The Omniverse. This Demonic Race has began to Expand and Realizes the Truth behind it all! The Seven Sin’s of OMNI have finally been Manifested and now they See their true Role in all of this. Is to Enact Demonic Slaughter on the Sin’s and their Demonic Arsenal of Formerly Omnipotent Race’s now turned Corrupted Eternal Race’s Full of Hatred, Sin, and now have Mutated with that Sin only to become their own Construct’s of Demonological Horrors.</p>
                            <p>Zoth then Begin’s Collecting New Demon Skin for Jackets/Accessories on him to better Show they’re Rank of Fallen Foes! As they traveled through the Omniverse they found love for the genuine people of each Race, as they became more social they noticed a Devilish Threat unlike any other. The Sin’s of Time/Space have been manifested into Reality aswell, with this discovery our Demonic Race have taken the mantle of fixing it all to truly prove even something as evil and grotesque as themselves can truly be Fallen Angels on a path of bringing Peace to the Omniverse.</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </>
    )
}

export default ZothPage