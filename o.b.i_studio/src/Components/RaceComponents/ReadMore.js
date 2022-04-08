import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-scroll';


const ReadMore = ({children, target}) => {

  const [isReadMoreShown,setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown (prevState => !prevState)
  }
  return(
    
    <Card.Text>
      {isReadMoreShown ? children : ''}
      <Link to={target} offset={-86} className='read-more' onClick={toggleBtn}>{isReadMoreShown ? 'Read less' : 'Read More'}</Link>
    </Card.Text>
    
  )
}

export default ReadMore