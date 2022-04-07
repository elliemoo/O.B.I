import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Envy from '../Races/Envy_Male.png';
import Gluttony from '../Races/Gluttony_Female.png';

import Lust from '../Races/Lust_Female.png'
import EnvyCard from './RaceComponents/EnvyCard';
import GluttonyCard from './RaceComponents/GluttonyCard';
import GreedCard from './RaceComponents/GreedCard';
import LustCard from './RaceComponents/LustCard';
import PrideCard from './RaceComponents/PrideCard';
import SlothCard from './RaceComponents/SlothCard';
import WrathCard from './RaceComponents/WrathCard';
import ZothCard from './RaceComponents/ZothCard';

const Art = () => {
  return (
    <Container fluid className='art-contianer'>
     
     <div className='race-card-container'>
      <EnvyCard/>
      <GluttonyCard/>
      <GreedCard/>
      <LustCard/>
      <PrideCard/>
      <SlothCard/>
      <WrathCard/>
      <ZothCard/>
    </div>
    </Container>
    
  )
}

export default Art