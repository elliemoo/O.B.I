import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Gluttony from '../../Races/Gluttony_Female.png';
import { Button } from 'bootstrap';
import ReadMore from './ReadMore';

const GluttonyCard = () => {
  return (
    <Card id='Gluttony' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Gluttony}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Ardenterians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Gluttony</Card.Title>
            <Card.Text>
            The race Ardenterians was a Glorious Angellic Paladin Race. One that once brought law and order to the Omniverse, seen as the saviors and bringers of Peace; after all the great Interdimensional Intersection Wars. This Race was beloved and revered as the highest of all the beautiful seven. Their platinum and red attire were seen as a sign of the bloodline of the Sacred Seven. A Tale so old the only where to honestly read of it is in The catacomb of The Omniverse. 
            </Card.Text>
            <ReadMore target='Gluttony'>
              <p>This was Discovered by the Ardenterians Race first, as they were the first to bridge the gap between each Universe that interacted with The Omniverse's core network. They were honored by all the seven Universes as the first and almighty savior race. They're training regimen was seen as nearly impossible. They were always thought to be born from the great OMNI Himself. With all the support and praise, they grew quite comfortable and complacent. </p>
              <p>As peace was in sight, they took time to work on their own advancement. they began to grow a shroud of ignorance that led them into their own solitude. During that solitude, one thing to note is that they mastered their manipulation of light... manipulation was so intense they harnessed its essence through light gauntlets supplying their race with an omnipresent glow unlike any other. Once strong enough to manipulate the light intensity of super novas, and seen with beautiful light weaponry, Finally met its demise.</p>
              <p>Finally, when they brought what they saw as peace to this Omniverse, they guarded millenia they were approached one day with a huge feast after being told by all other race leaders who were already infected by their Sin to worry about their own Universe as it was falling to its own tragic downfall. As these glorious paladin's rushed back at the speed light, they fell into the fascination with being able to just rest easy for once. So they gave up all their will to fight to instead indulge in what they saw was their right. </p>
              <p>After all, they brought peace, did they not? They quelled each Universes adversity, so it was only right they Reap their Spoils of Triumph. They fell into a cycle of losing track of training for things like enduldging in overdosing on experimental medication that caused such insane imbalances in their brain's chemical structure that they went mad with it. Thinking it was better than herbal and natural medication, demons persuaded their way into these once glorious paladin's brains to finally become the degenerates they once fought so valiantly against.</p>
              <p>As of today, the valiant angellic race has become demonic fanatical psychopaths with only bloodlust and feasting on their fallen foes bodies and making sure they have their particular demontnyl handy for when they feel any sort of regret or remorse for their actions. As the demons day, take your medicine. It's GOOD FOR YOU! Cont. As for the looks of them now... the once glorious race of paladin light being's shaping their armor body into bodies of luminescent lightweight; is now in shambles. The once vital paladin race has become a metallic mesh of angel and armor. </p>
              <p>Turned demonic metallic flesh mutative race where they still harness lightweight only to use it to burn the other races and each other. Never knowing who to trust in a constant delusional psychosis created by the demontnyl has led them to be mad, Shredding their once glorious gauntlets and constructing them into bloody claws ingrained in their hands, the deep dark red and platinum coloration now dulled and painted in all kinds of disgusting matter of their Foes. </p>
              <p>They also have given up on harnessing light for speed in sight of power. Seeing no use in maneuverability if they were not the fiercest of them all. They let their Gluttonous Sin turn them into a shadow of what was once seen as the bloodline's beginning... They adorn their armor as it has meshed into their Metallic-Flesh-Like Form. Although humanoid formed like a cyborg of light, This Amalgamation is now a Cyborg of Burning Over-Enduldging Drug Abusive Psychopaths with no Fear in their Soulless-Light burning eyes.</p>
            </ReadMore>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default GluttonyCard