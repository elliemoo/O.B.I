import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Lust from '../../Races/Lust_Female.png';
import { Button } from 'bootstrap';
import ReadMore from './ReadMore';

const LustCard = () => {
  return (
    <Card id='Lust' className='race-card'>
      <Row>
        <Col sm={4}><Card.Img className='race-img' src={Lust}></Card.Img></Col>
        <Col sm={8}>
          <Card.Header>Valkarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Lust</Card.Title>
            <Card.Text>
              Lust is defined as the heart's purest form of desire, which raises the question, what do we lust for? Is it power? Fame? Wealth? Status? Dominance overall? Temptations of the flesh? For the valkarian, all of the above drives them and their need to lust. The valkarians desire to be pure and close to perfection as possible; this is the reason their desires almost destroyed them and wiped them from the multiverse. One of the valkary's laws is to keep the bloodline pure and never to mix their vanity with anything outside of Lagneía, for the world they see as unfit to walk among them. 
            </Card.Text>
            <ReadMore target='Lust'>
              <p>One day the sheer lust that drives them drove the king of Kjósa Valour, Volwrath, to venture out of magnesia for his lust to see the outside Universe and desire to court with other races made other valkarian men want to follow in their lord's footsteps, which drove the planet into a civil war. Once the queen Namie of the pure heart realized what had happened, she took up an army of female valkaries to stand against Their male counterparts to stop them from defaming the sacred bloodline. Because of this war, areas of kjósa Valour are now as ugly as the Universe the valkarian fought so hard to keep separate. </p>
              <p>Vollrath was never captured and is still wondering the multiverse searching for a means to quench his heart's new desires! For Namine, she, too, has a newfound lust! One for revenge towards her once beloved king and ruler of kjósa, she lusts to bring him home once again so she can bury him there. The Valkarians are now a scattered race amongst their Universe and others alike. They have a beautiful Aroma they have learned to Manipulate. This Aroma is that of a deadly Life Syphoning Toxin that, when exposed, can lead anyone who isn't immune to it to succumb to their command and fulfilling that Valkary's specific Desires. </p>
              <p>This Aroma has corrupted the Once Great Beautiful Valkarians into still Silk-Like beings of True Demonic Beauty wearing luxurious light weight attire such as dresses and robes made from the finest races of the Universe. Utilizing each race for a new form of attire, they have grown into demonic Succubus/Incubus with a pinkish and light bluish skin with runic signs around them glowing and protruding their newfound natural Aroma of seduction. Using the Runic Signs, they act as an Enchanter/tress/Summoning Race; due to their Occult Bloodline, they have studied their own form of Science. </p>
              <p>The Science of witchcraft/necromancy is to forever be able to bring their seduced slaves back to fight and fulfil their desires for them until the end of Eternity. They can construct their own weaponry from their glorious beauty Forge. A forge with a Bright Purple Like substance running it. This substance is the Valkarian's life essence, which they experimented on to create their grand warp gate of vanity. They used this purple vain substance to only build their Ego's as it was also established to them no other Race could ever match their beautiful brilliance.</p>
              <p>These now feuding Valkarians have their own arsenal and way of using their protruding aroma. Some use it to get what they want. In contrast, others use it to cause races to enact large scale genocides or ceremonial ritualistic sacrifices to their beautiful Omnipotent Valkyries. The Male Valkarians choose more sadistic sorts of manipulation only to make the others suffer from themselves. While the Female Valkarians use a more masochistic type of manipulation where they lure in their preying victim only to turn them into brain washed servants willing to assist their mistress with whatever she may need.</p>
            </ReadMore>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default LustCard