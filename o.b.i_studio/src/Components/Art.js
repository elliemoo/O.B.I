import React from 'react';
import { Container, Card, CardGroup, Button} from 'react-bootstrap';
import Lust from './../Races/Lust/Lust_Female.png';
import Envy from './../Races/Envy/Envy_Male.png';
import Zoth from './../Races/Zoth_Female.png';
import Wrath from './../Races/Wrath/Wrath_Male.png';
import Sloth from './../Races/Sloth_Female.png';
import Gluttony from './../Races/Gluttony/Gluttony_Female.png';
import Greed from './../Races/Greed/Greed_Male.png';
import Pride from './../Races/Pride/Pride_Male.png';


const Art = () => {
  return (
  <>
    <Container fluid className='art-contianer' style={{backgroundColor: 'black', color: 'white'}}>
      <CardGroup>
        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Lust}></Card.Img>
          <Card.Header>Valkarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Lust</Card.Title>
            <Card.Text>
              Lust is defined as the heart's purest form of desire, which raises the question, what do we lust for? Is it power? Fame? Wealth? Status? Dominance overall? Temptations of the flesh? For the valkarian, all of the above drives them and their need to lust. The valkarians desire to be pure and close to perfection as possible; this is the reason their desires almost destroyed them and wiped them from the multiverse. One of the valkary's laws is to keep the bloodline pure and never to mix their vanity with anything outside of Lagneía, for the world they see as unfit to walk among them.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Footer>
        </Card>
        
        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Envy}></Card.Img>
          <Card.Header>Ophites</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Envy</Card.Title>
            <Card.Text>
              The Ophites used to be the kindest race that focused on helping others. They gave whatever they had to help others for hundreds of years. Ophites would travel to the 7 other planets throughout the omniverse using their plasma staphs to help other races.Other races, however, started to take advantage of their kindness. These others took everything from them and left them empty-handed and feeling empty-hearted. They returned to their own planet Ophius, and that is where they enacted their future.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Envy">Read More</Button>{' '}
          </Card.Footer>
        </Card>

        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Zoth}></Card.Img>
          <Card.Header>Zoth</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Zoth </Card.Title>
            <Card.Text>
              The Zoth’s are an anamoly amongst The Omniverse, they were created from Mutations within the Dark Matter along the outer edge of the Omniverse. This Mutative Reaction caused an interdimensional rift in space (also known as the Hellion-Gate) to be created birthing the final eighth Universe. As they emerged from their Hellish Realm they were met with only judgement by the other Race’s. Seen as the Demonic Race come to rule over all. At first due to this judgement they grew hatred and caused Chaos which only caused them to be seen as a new Sin amongst The Omniverse as Chaos. Their Origin still Unknown to all, only real explanation is they are amalgamations of every Race's Sin Combined into the Embodiment of Sadistic Chaotic Demonized Souls with no love or compassion in their heart, but with all this being Speculation who's to say they aren't truly the Beast to End all Others. They just may be OMNI's Saving Grace...
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Footer>
        </Card>

        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Wrath}></Card.Img>
          <Card.Header>Hadesian</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Wrath </Card.Title>
            <Card.Text>
              The Hadesian is a Mysterious Race known for its shadow-like lurking over The Omniverse; they kept to themselves as they saw no reason to interact with the other Races, seeing themselves as the Peak in Apex Hunting. They were born with a fantastic gift of Stealth having Holes of Emptiness around their Chin, Palms, and Wrapped Around their Legs that produced a smokey substance that could cloak them in smoke for the younglings. The Adults could use it to harness it and become living Shadows. This Shadow Form allowed them to add Smoke properties to physical objects that could then be brought back to form. This allowed for devastating blows of lethal hits.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Wrath">Read More</Button>{' '}
          </Card.Footer>
        </Card>
      </CardGroup>
      <br></br>
      <CardGroup>
        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Sloth}></Card.Img>
          <Card.Header>Xenarths</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Sloth</Card.Title>
            <Card.Text>
              Planet Xenarthrys was once a lush and green planet. It supported an abundance of life, and the Xenarths lived in harmony with nature. They never had the need to learn skills or crafts as the food was abundant. In a biblical context, Xenarthrys was the perfect garden of Eden. Its inhabitants lived like the first Man and Women. However, all this came to an abrupt halt when Xenarthrys was spotted by the envious Kleftos during one of their intergalactic transits.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Lust">Read More</Button>{' '}
          </Card.Footer>
        </Card>

        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Gluttony}></Card.Img>
          <Card.Header>Ardenterians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Gluttony</Card.Title>
            <Card.Text>
              The race Ardenterians was a Glorious Angellic Paladin Race. One that once brought law and order to the Omniverse, seen as the saviors and bringers of Peace; after all the great Interdimensional Intersection Wars. This Race was beloved and revered as the highest of all the beautiful seven. Their platinum and red attire were seen as a sign of the bloodline of the Sacred Seven. A Tale so old the only where to honestly read of it is in The catacomb of The Omniverse.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Gluttony">Read More</Button>{' '}
          </Card.Footer>
        </Card>

        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Greed}></Card.Img>
          <Card.Header>Kleptians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Greed</Card.Title>
            <Card.Text>
              At the beginning of intergalactic civilization, there was a race that served the old monarchs (The Silos) as nobility, businessmen, and clerks known as The Kleftians. They were loyal creatures who were satisfied with their high status. The peace between Silos and Kleftians was broken on the rushed light, an unfortunate event in Omniverse history. In the middle of one fine spring evening, war erupted among the Silos across planets. The cause of the battle in the Rushed Light is unknown, but we know a certain Klefti had a part to play in the disagreement amidst kingdoms.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Greed">Read More</Button>{' '}
          </Card.Footer>
        </Card>

        <Card style={{backgroundColor: 'black'}} border="white">
          <Card.Img className='race-img' src={Pride}></Card.Img>
          <Card.Header>Icarians</Card.Header>
          <Card.Body>
            <Card.Title>Sin: Pride</Card.Title>
            <Card.Text>
              For centuries, the Icarians have been a beacon of science, civilization, and military power within their realm. Their cities were massive, their palace so high that they could almost cover the sun. Such greatness, however, came with a price; they subjugated every other life form within their realm that could pose a threat to their power, and when that wasn't enough, they sought to conquer nature itself. They desperately tried to find a way to enhance their bodies and elongate their life, injecting themselves with substances created by their alchemists, at the core of which was a scarce and precious material, dragon scales; they would get chopped into small pieces and dissolved in the potion.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" href="/Pride">Read More</Button>{' '}
          </Card.Footer>
        </Card>
      </CardGroup>

    </Container>
  </>
    

  )
}

export default Art