import React from 'react';
import {Container } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import EnvyCard from './RaceComponents/EnvyCard';
import GluttonyCard from './RaceComponents/GluttonyCard';
import GreedCard from './RaceComponents/GreedCard';
import LustCard from './RaceComponents/LustCard';
import PrideCard from './RaceComponents/PrideCard';
import SlothCard from './RaceComponents/SlothCard';
import WrathCard from './RaceComponents/WrathCard';
import ZothCard from './RaceComponents/ZothCard';
import BGM from '../BGM.mp3'

const Art = () => {
  return (
    <Container fluid className='art-contianer'>
     {<ReactAudioPlayer
        src={BGM}
        loop="true" 
        autoStart={true}
        autoPlay={true}
      />}

      <div className='race-card-container'>
        <ZothCard/>  
        <WrathCard/>   
        <EnvyCard/>
        <GluttonyCard/>
        <GreedCard/>
        <LustCard/>
        <PrideCard/>
        <SlothCard/>
      </div>
    </Container>
    
  )
}

export default Art