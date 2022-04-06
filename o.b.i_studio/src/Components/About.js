import React from 'react';
import aboutData from '../Data/Data.json';
import { Card } from 'react-bootstrap';
const About = () => {
  return (
    <Card id='About' className='aboutCard border-0'>
        <Card.Body>
          <p>{aboutData.About.para1}</p>
          <p>{aboutData.About.para2}</p>
        </Card.Body>
    </Card>
  );
}

export default About