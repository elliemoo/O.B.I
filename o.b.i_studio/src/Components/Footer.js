import React from 'react'
import Footer_Img from '../Images/Footer_Image.png'
import Nft_Img from '../Images/NFT_Calender.png'
import { Container, Image } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div className='footer-logo'>
          <Image alt='Footer Logo' src={Footer_Img}/>
        </div>
        <div className='footer-copy-right'> © O.B.I Studios 2022</div>
      </div>
      
      <div className='footer-nft-cal'>
        <Image  alt='NFT Calender Logo' src={Nft_Img}/>
      </div>

    </div>
  )
}

export default Footer