import React from 'react'
import Footer_Img from '../Images/Footer_Image.png'
import Nft_Img from '../Images/NFT_Calender.png'
import { Image } from 'react-bootstrap'
import './Styles/Footer.modules.css'; 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div className='footer-logo'>
          <Image alt='Footer Logo' src={Footer_Img}/>
        </div>
        <div className='footer-copy-right'> © O.B.I. Studios 2022</div>
      </div>
      
      <div className='footer-nft-cal'>
        <a target='_blank' href='https://nftcalendar.io/event/obi-studios/'>
          <Image alt='NFT Calender Logo' src={Nft_Img}/>
        </a>
      </div>

    </div>
  )
}

export default Footer