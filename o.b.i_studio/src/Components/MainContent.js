import React from 'react';
import Start_Img from '../Images/Background-1.png';
import { Container , Image} from 'react-bootstrap';
import About from './About';
import Footer from './Footer/Footer.js';

// MainContent will show Start image, about and Road Map of the project
// MainContent will get updated to show different components {Art, Team}
const MainContent = () => {
  return (
    <>
    <Container fluid className='MainContent p-0'>
      <Image className='startImg' fluid alt='main image' src={Start_Img}/>
      <About id='About'/>
    </Container>
    <Footer/>
    </>
    
  );
}

export default MainContent;