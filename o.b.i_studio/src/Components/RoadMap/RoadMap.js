import React from 'react';
import './RoadMap.modules.css';
import RoadMapComponent from './RoadMapComponent';

// still need to edit CSS bit more to counter the weird scrolling behaviour when its at bottom of the screen.
// alernative is adding footer in indiviual component. => this might fix the error for character view 

const RoadMap = () => {
  return(
    <>
    <div className='RoadMap'>
      <section className='phase-1'>
        <div className='timeline-container'>
          <h1>Phase - 1</h1>
          <div className='timeline'>
            
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Birth of Zoth Lore/Sin's Taking Over Lore</h1>}
              detail={<>This will be our introduction to our Races and Zoths overall Bridge into the Omniverse! 
              we will be providing Origin Summaries to each race and laying out How they Bridged their Gaps into the Omniverse. 
              We will also be giving a informational AMA about our Lore!</>}/>
            </div>
        
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> WL/OG Teaching Master Classes</h1>}
              detail={<>Our Master Classes will provide our most dedicated members the right to learn from our beautifully talented team. 
              Classes you can expect are NFT/Crypto Lessons, Psychology Lessons, Development Lessons, Writing Lessons, & much more to come!</>}/>
            </div>
          
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Obi's Mental Health Cast </h1>}
              detail = {<>Our CEO prides himself on Mental Health Awareness! 
              He's passionate about Impacting those around him, and so he's taken to creating a Humane Mental Health Podcast on YT! 
              This is to truly help those damaged truly heal and grow to be happy within themselves. 
              We offer many different Perspectives within these Podcasts and hope you enjoy!</>}/>
            </div>
        
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Core Team AMA/Full Team Introduction</h1>}
              detail={<>This will be an AMA to truly highlight our Talented Core Team! 
              This will be a Transparent & Open AMA to all questions! 
              We will allow for the AMA to go on all day so that everyone may have their questions answered with closure! 
              We want to truly make this an event that you all can enjoy by letting you Engage with all of us.</>}/>
            </div>

          </div>
        </div>
      </section>
      <section className='phase-2'>
        <div className='timeline-container'>
          <h1>Phase - 2</h1>
          <div className='timeline'>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> O.B.I. Studios Book Club</h1>}
              detail= {<>This will be our Official Book Club for members to come out Share their favorite books and truly make conversation about beautiful pieces of Literature! 
              We will highlight amazing books by having our Members engage in different activities within the Book Club! 
              We also will offer the Book of the Month to our Club Members for all to read and truly be apart of the conversation!</>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> The Good Deed Challenge Introduction</h1>}
              detail= {<>This is a Challenge Created by our CEO for us to truly give back to our Local Communities and rejoice in spreading positivity. 
              This will be a beautiful way for us all to go out and do our part to truly make a positive impact on this world so that Negativity never prevails!</>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Soundtrack Discord Listening Party </h1>}
              detail= {<>This will be our way of Highlighting our Amazingly Talented Music Producers and all their hard work. We will be Providing all of our Races Theme Songs!</>}/>
            </div>
        
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Artist Presentation & Full Website Update</h1>}
              detail= {<>This will be our Final Artist Presentation as we will be providing them throughout Development to truly give Transparency between Our Designers and Our Members. 
              We will also be rolling out our final Updates to the Website to truly Solidify our Brands Site!</>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> NFT Web Novel's made for each Race </h1>}
              detail= {<>This will be released around Collection Drop, but it will be our Full Web Novels for our Holders to Enjoy first before we release them to the public! 
              We will also be giving a timeframe for when the Web Novel Ending's Utility will be released!</>}/>
            </div>
        
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> First Collection Drop</h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> First Collection Informational Session</h1>}
              detail= {<>We will be giving full information on the timeframes of Each Further Utility! We will be explaining our Vision for our P2E MMORPG! 
              We will also be introducing our full Development Plans! We will also be scheduling Dates for Updates in progress to Development behind our Brand!</>}/>
            </div>
          </div>
        </div>
      </section>
      <section className='phase-3'>
        <div className='timeline-container'>
          <h1>Phase - 3</h1>
          <div className='timeline'>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> NFT Web Novel Ending's Utility</h1>}
              detail= {<>We will be explaining our DAO Staking utility of being able to Alter your Races Lore Book through staking into the site's Web Novel Page. 
              We will be allowing our Holders to branch through the story to reach Different Endings!</>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Merch Deals: Figurine Collection, Published Books, and Apparel</h1>}
              detail= {<>TBA... for protection of our marketing Deals</>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> O.B.I. Studios Brand Party for all Holders</h1>}
              detail= {<>This will be a party we host for our Holders to come and enjoy themselves. 
              We are hoping to have it in Australia as that's where our Development Team is from! 
              We would love to truly bring whoever is a holder and interested in attending out with us to truly Enjoy the Party as one big Family! 
              We will be live-streaming it aswell for those who wish to participate from home!</>}/>
            </div>
          </div>
        </div>
      </section>
      <section className='phase-4'>
        <div className='timeline-container'>
          <h1>Phase - 4</h1>
          <div className='timeline'>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Announcing Population 2 Collection!(Race Fusion) </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Animation Reveal/Presentation's) </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Semi-Full Soundtrack Reveal! </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Monthly Development Presentation </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Airdrop Educational Session </h1>}
              detail= {<></>}/>
            </div>
          </div>
        </div>
      </section>
      <section className='phase-5'>
        <div className='timeline-container'>
          <h1>Phase - 5</h1>
          <div className='timeline'>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Exclusive Airdrops of Exclusive Holder Items </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Holder Exclusive Airdrop Month Event Announcement </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Airdrop Item Creation Presentation </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Live Exclusive Holder Item Creation Presentation </h1>}
              detail= {<></>}/>
            </div>
            <div className='timeline-content'>
              <RoadMapComponent 
              heading = {<h1> Exclusive Development Update </h1>}
              detail= {<></>}/>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default RoadMap;
