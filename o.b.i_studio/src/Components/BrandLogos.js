import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Navbar } from 'react-bootstrap'

const BrandLogos = () => {
  return (
    <div className='linkContainer'>
        
        <div>
          <Navbar.Brand className='discordLogo' target='_blank' href='https://discord.gg/QyztzFqzFx'>
          <FontAwesomeIcon icon={['fab', 'discord']}/>
          </Navbar.Brand>
        </div>
        
        <div>
          <Navbar.Brand className='twitterLogo' target='_blank' href='https://mobile.twitter.com/obi_gamestudios'>
          <FontAwesomeIcon icon={['fab', 'twitter']}/>
          </Navbar.Brand>
        </div>
        
        <div>
          <Navbar.Brand className='twitterLogo' target='_blank' href='https://opensea.io/collection/obi-studios'>
          <FontAwesomeIcon icon={['fab', 'opensea'] }/>
          </Navbar.Brand>
        </div>
        
    </div>
  )
}

export default BrandLogos