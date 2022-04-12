import React from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import { Container , Image} from 'react-bootstrap';
import CTO from '../Images/Team/CTO.png'
import LeadDesigner from '../Images/Team/LeadDesigner.png'
import ReadMore from './RaceComponents/ReadMore';

const Team = () => {
  return (
    <Container>
    <CardGroup>
    <Card id='CEO'>
      <Card.Img variant="top" src="holder.js/50px100"/>
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
        <small className="text-muted">Last updated 3 mins ago</small>
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
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    <Card id='Lead WEB-3 Developer'>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Lead WEB-3 Developer</Card.Title>
        <Card.Text>
        Hello, my name is Elliott Yu and go by name of Moocius leading the Web3 development part of this project. 
        I’m in my final year of computer science degree with a broader range of software development and management background. 
        <ReadMore>
        This is my debut project outside of my uni work and excited to be part of the team! My passion for web3 developing and the crazy trends of the NFT world is what pulled me into this project. 
        Although my professional expertise is minimal as compared to other team members in the projec, I can only promise that I will invest my 200% of effort to work toward the project success. 
        I will be working closely with Hadeion (CTO) of this project in terms of development and will be responsible for our Web3 development for the project.
        </ReadMore> 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    <Card id='CommunityManager'>
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
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    <Card id='CommunityManager'>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Division Head (Music Production)</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    </CardGroup>
  </Container>
  
  )
}

export default Team