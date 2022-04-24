import React from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import { Container, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CTO from '../Images/Team/CTO.png'
import CEO from '../Images/Team/CEO.png'
import LeadDesigner from '../Images/Team/LeadDesigner.png'
import DivisionHead from '../Images/Team/DivisionHead.png'
import ReadMore from './RaceComponents/ReadMore';
import Footer from './Footer';

const Team = () => {
  return (
    <>
      <Container>
      <CardGroup>
      <Card id='CEO'>
        <Card.Img variant="top" src={CEO}/>
        <Card.Body>
          <Card.Title>Chief Executive Officer</Card.Title>
          <Card.Text>
          Hello, my Name is Miguel Rodriguez better known as Obizoth. 
          I won’t claim to be some extraordinary Character as that’s not who I am. 
          I have been a Freelance Back End Developer for the past 7 Years, I love to study Psychology & Philosophy in my free time,
          and most of all I’m a Family Man with a beautiful Wife known as Abyzouth.
          <ReadMore>
          I have always had a true fascination for Theology which led to me studying demonology aswell. 
          These scriptures of our past no matter how graphic were inspiring to me as they laid 
          out concepts that Most would never give a second thought to. I, however saw past what was seen as evil to see that truly we can learn 
          from all things as long as we stay morally righteous within ourselves. O.B.I. Studios is a conglomerate of everything I am passionate of; 
          it’s what i’ve always dreamt of finally come to life. I’m the writer of Zoth, and the Ardenterians; aswell as the CEO of Our beautiful Studios. 
          I have worked hard to only bring in the best of the best to work on Our Stories, Music, Art, and soon Our Game. 
          I’m an open type of person so you can always find me around the Discord as i’m punching in all day & night Writing, Developing, 
          and Coordinating this Studios every move. Please join me as I Bridge The Gap to the Omniverse.
          </ReadMore>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div>
            <Navbar.Brand className='twitterLogo' target='_blank' href='https://mobile.twitter.com/obi_gamestudios'>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </Navbar.Brand>

            <Navbar.Brand className='MediumLogo' target='_blank' href='https://medium.com/@o.b.i.gamestudios/the-story-of-obizoth-o-b-i-studios-2a83ddd85f1'>
            <FontAwesomeIcon icon="fa-brands fa-medium" />
            </Navbar.Brand>
          </div>
        </Card.Footer>
      </Card>

      <Card id='CTO'>
        <Card.Img variant="top"  src={CTO} />
        <Card.Body>
          <Card.Title>Chief Technology Officer</Card.Title>
          <Card.Text>
            Hello there the residents of Omniverse, I better go by the name of Hadeion representing one of the 8 races in our project. I’m 22 year old Cyber Security Graduate with a strong I.T background. 
            <ReadMore>
            With 4 years of experience in Cybersecurity operations and development with a continuing research in Cyber Intelligence and my passion in blockchain and cryptocurrency is what put me forward in the project, 
            I’m here as a Divison Head (C.T.O) who will be responsible the Technical Operations & Developments along with planning Tokenomics for the future of the project and also as a Marketing advisor.
            </ReadMore>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div>
            <Navbar.Brand className='twitterLogo' target='_blank' href='https://twitter.com/Hadeion_OBI'>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </Navbar.Brand>
        </div>
        </Card.Footer>
      </Card>

      <Card id='LeadDesigner'>
        <Card.Img variant="top" src={LeadDesigner} />
        <Card.Body>
          <Card.Title>Lead Designer</Card.Title>
          <Card.Text>
          Hi! My name is Ishitha Mahi, Ishy for short, and I'm the Lead Designer of O.B.I Game Studios. I'm an avid self-taught artist in my senior year of High School, who deals with a wide variety of art and design. 
          My journey in art started when I was six, scrolling through the pages of comic books (Western and Indian ones) in fascination with the details and colors. 
          <ReadMore>
          I remember spending hours trying to replicate the designs and felt thrilled with the outcome, although my first drawings weren't pleasing to the eye. From then on, it's simply a fabulous journey as I learnt painting, sketching, digital art, 3D art and more. 
          I still am trying to explore and learn new concepts/ideas while trying to express my different personas/experiences through character creation. 
          I love video-games, horror/thriller novels, and the color Brown! Also, I've won many national chess championships, so I consider myself pretty good at it. 
          Nevertheless, my career in design has just begun with the help of the devoted CEO, wonderful team, and energetic community! Follow @ishymahi on Instagram to follow up on my art journey.
          You can add her twitters and such
          </ReadMore>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div>
            <Navbar.Brand className='twitterLogo' target='_blank' href='https://twitter.com/TheKleptian'>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </Navbar.Brand>
        </div>
        </Card.Footer>
      </Card>

      <Card id='DivisionHead'>
        <Card.Img variant="top" src={DivisionHead} />
        <Card.Body>
          <Card.Title>Division Head (Music Production)</Card.Title>
          <Card.Text>
            Hello everyone! My name is Steven, and here at O.B.I. Studios, I oversee the musical production talent (Heron & Cyklonus) for our beautiful P2E MMORPG a web3 based video game, and also a writer of our sin Lust for our web-based novel.
          </Card.Text>
          <ReadMore>
          I’ve known and worked with Heron for 5 years and have known Cyclonus my whole life because he is my blood brother. Both are very dedicated and talented producers who bring years of experience to the project. Each brings a different and unique sound to our P2E MMORPG web3 game, both have a huge drive and love for the craft of producing music and are very excited to bring you their very best, so together we have been working hard to bring you the highest quality.I strive to bring the best in everything I do! success is always the goal failure is never an option. Here at O.B.I. studios, we want to bring that same level of quality and level of success to our holders with our beautiful NFT project. We want to bring to the NFT space what has been missing for a long time and that’s a project that will grow with their community and deliver a fun and exciting experience where together we are building something all our holders can benefit from. We like everyone else are tired of projects that fall short and can’t deliver or rug pulls and scams. 
          We know what we would want from a great project and have teamed up with amazing people from all around to be able to truly deliver that experience. We want to build a strong bond and trust level with our community members. So our investors feel more like family than asset holders, we are building an environment where all are welcomed and a safe place where all can come and lean on and learn from one another. The same level of quality and success I’ve brought wherever I’ve worked and managed I will apply that same passion to this project to ensure we and our community benefit for years to come! 
          Thank you for choosing to Come on the journey with us! I guarantee you won’t be disappointed!!
          </ReadMore>
        </Card.Body>
        <Card.Footer>
        <div>
            <Navbar.Brand className='twitterLogo' target='_blank' href='https://twitter.com/Valkary_OBIS'>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </Navbar.Brand>
        </div>
        </Card.Footer>
      </Card>

      </CardGroup>
    </Container>
    <Footer/>
    </>
    
  
  )
}

export default Team