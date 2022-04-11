import React from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import { Container , Image} from 'react-bootstrap';
import CTO from '../Images/Team/CTO.png'

const Team = () => {
  return (
    <CardGroup>
    <Card id='CEO'>
      <Card.Img variant="top" src="holder.js/50px100"/>
      <Card.Body>
        <Card.Title>Chief Executive Officer</Card.Title>
        <Card.Text>
        Hello, my Name is Miguel Rodriguez better known as Obizoth. 
        I won’t claim to be some extraordinary Character as that’s not who I am. 
        I have been a Freelance Back End Developer for the past 7 Years, I love to study Psychology & Philosophy in my free time,
        and most of all I’m a Family Man with a beautiful Wife known as Abyzouth. I have always had a true fascination for Theology 
        which led to me studying demonology aswell. These scriptures of our past no matter how graphic were inspiring to me as they laid 
        out concepts that Most would never give a second thought to. I, however saw past what was seen as evil to see that truly we can learn 
        from all things as long as we stay morally righteous within ourselves. O.B.I. Studios is a conglomerate of everything I am passionate of; 
        it’s what i’ve always dreamt of finally come to life. I’m the writer of Zoth, and the Ardenterians; aswell as the CEO of Our beautiful Studios. 
        I have worked hard to only bring in the best of the best to work on Our Stories, Music, Art, and soon Our Game. 
        I’m an open type of person so you can always find me around the Discord as i’m punching in all day & night Writing, Developing, 
        and Coordinating this Studios every move. Please join me as I Bridge The Gap to the Omniverse.
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
          With 4 years of experience in Cybersecurity operations and development with a continuing research in Cyber Intelligence and my passion in blockchain and cryptocurrency is what put me forward in the project, 
          I’m here as a Divison Head (C.T.O) who will be responsible the Technical Operations & Developments along with planning Tokenomics for the future of the project and also as a Marketing advisor.
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
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>

  
  )
}

export default Team