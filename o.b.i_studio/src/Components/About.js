import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
const About = () => {
  const location = useLocation()
  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            const id = 'About';
            const yOffset = -86; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location])
  return (
    <Card id='About' className='aboutCard border-0'>
        <Card.Body>
          <p>Here at O.B.I. we pride ourselves on providing only Professional Quality with everything we do. We are currently working on our masterpiece <strong>Omnipotent Being’s Inter-Dimensional</strong>, 
          a 2D Hand-Drawn MMORPG that has Play To Earn mechanics built in. We are building towards being a pioneer in the NFT P2E Gaming Industry, by hiring only the best for our Team!</p>
          <p>We have Music Producers who have been in their respective industries for 18+ years, we have a team of artists led by our prodigy artists, and we have a professional team of writers laying out the lore, and story line of the game. We offer so much more than a game, however we offer Transparency, Integrity, and overall Quality behind everything we do. We have Art Process Presentations, Writer’s Read for our Book Club, and so much more to come! We also will be building a Web Novel behind the NFT’s, and before the game is released so that the Lore is available for those who may not be Gaming Fans, but much rather immerse themselves in our beautiful Omniverse, and all it’s amazing stories of Triumph, Misery, and Drama! We hope you enjoy yourself, and remember The Great Eye of OMNI is always watching!</p>
          <p>We are working on adding a DAO to the Story to make it more interactive for all our holders. Our main goal is to truly put out a beautiful Series of Books/Web Novels that will lead up to our MMORPG. This is to further lay out lore, and establish these races and their culture onto those interested in playing! We will have an expansive Lore behind the Omniverse further solidifying it and bringing it to life once we push the game out. Theres so much planned for this Brand that we are super excited to share, but it will all come within time…</p>
        </Card.Body>
    </Card>
  );
}

export default About