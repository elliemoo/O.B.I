import React from 'react';
import Start_Img from '../Images/Start.jpeg';

import Card_Img from '../Images/Footer_Background.png';
import { Container , Image} from 'react-bootstrap';
import About from './About';
import RoadMap from './RoadMap';

// MainContent will show Start image, about and Road Map of the project
// MainContent will get updated to show different components {Art, Team}
const MainContent = () => {
  return (
    <Container fluid className='p-0'>
      <Image className='startImg' fluid alt='main image' src={Start_Img}/>
      <About/>
      <RoadMap/>
    </Container>
    
  );
}

export default MainContent;