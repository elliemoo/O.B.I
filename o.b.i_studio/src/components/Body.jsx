import Start_Img from "../Images/Start.jpeg";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, dividerClasses, Typography } from "@mui/material";


import contentData from "../Data.json"
import React, {createRef, useRef, useState} from "react";
import { create } from "@mui/material/styles/createTransitions";


const Start = () => {
  return (
    <Box id="#">
      <img width='100%'  src={Start_Img}/>
    </Box>
  )
}
const About = () => {
  return (
    <Box sx={{
      backgroundColor: 'red',
      p: '100'
    }}>
      <Typography id='About'>
      <p>
      {contentData.About.para1}
      </p>
      <p>
      {contentData.About.para2}
      </p>
      </Typography>
    </Box>
    
  )
}

const Team  = () => {
  return (
    <Box id='Team'>
      this is container for team
    </Box>
  )
}
const RoadMap = () => {
  return (
    <Box id='RoadMap'>
      this is conatiner for Road Map
    </Box>
  )
}

const Body = () => {
  return(
      // <div style={{backgroundColor:'blue'}}>hellio</div>  
    <Container  maxWidth={false} disableGutters
      sx={{
        backgroundColor: 'blue',
        width: '100%'
      }}
      >
      <Start/>
      <Container>
        <About></About>
        <Team/>
        <RoadMap></RoadMap>
      </Container>

    </Container>
   
  )

}

export default Body;