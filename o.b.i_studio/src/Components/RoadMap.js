import React from 'react';
import { Container,Card} from 'react-bootstrap';
const RoadMap = () => {
  return (
    <Container id='RoadMap'>
      <Card className='roadMap-Container' fluid >
        <Container className='card-container'>
          <Card.Title><h1>Our RoadMap</h1></Card.Title>
          <Card.Title><h2>Pre-Mint</h2></Card.Title><br></br>
          <Card border="primary">
            <h4>✨Phase 1️⃣ 🗓️</h4>
            📝 Birth of Zoth Lore/Sin's Taking Over Lore📝<br></br>
            Utility Explanation about the staking and webnovel<br></br>
            🗣️ WL/OG Teaching Sessions(Crypto/NFT Advice & Other Trades) 🗣️ <br></br>
            Mental Health Cast <br></br>
            🎧 Soundtrack Discord Listening Party🎧<br></br>
            🧑‍💼 Core Team AMA/Full Team Introduction🧑‍💼<br></br>
            </Card>
            <br></br>
            <Card border="secondary">
            <h4>✨✨Phase 2️⃣🗓️</h4>
            📖 O.B.I. Studios Book Club 📖 <br></br>
            💝 The Good Deed Challenge Introduction💝 <br></br>
            🧐 Artist Presentation & Full Website Update 🧐 <br></br>
            📦 First Collection Drop📦 <br></br>
            👨‍💼 First Collection Informational Session👨‍💼<br></br>
          </Card>
          <br></br>
          <Card border="success" >
            <h4>✨✨✨Phase 3️⃣🗓️</h4>
            🧙 NFT Web Novel's made for each Race 🧙 <br></br>
            🌏 Merch Deals: Figurine Collection, Published Books, and Apparel 🌏 <br></br>
            🥳 O.B.I. Studios Brand Party for all Holders 🥳 <br></br>
            ⏫ Don’t miss it! ⏫ 💱
          </Card>
          <br></br>
        </Container>

        <Container className='card-container'>
            <Card.Title><h2>Post-Mint </h2></Card.Title>
            <div>
              🌋 Hellion's Gate Opening: [Game Development Period]🌋 <br></br>
            </div>
            <Card border="warning">
              <h4>✨✨✨✨Phase 4️⃣🗓️</h4>
              🤯 Announcing Population 2 Collection!(Race Fusion) 🤯<br></br>
              🏃‍♂️  Animation Reveal/Presentation's🏃‍♂️ <br></br>
              🔥  Semi-Full Soundtrack Reveal!🔥 <br></br>
              🗞️ Monthly Development Presentation🗞️ <br></br>
              🛬 Airdrop Educational Session 🛬<br></br>
            </Card>
            <br></br>
            <Card border="info">
              <h4>✨✨✨✨✨Phase 5️⃣🗓️</h4>
              🙌 Exclusive Airdrops of Exclusive Holder Items🙌<br></br>
              📦Holder Exclusive Airdrop Month Event Announcement📦 <br></br>
              🌫️ Airdrop Item Creation Presentation 🌫️ <br></br>
              👀 Live Exclusive Holder Item Creation Presentation👀<br></br>
              🔐 Exclusive Development Update🔐
            </Card>
            <br></br>
            <Card border="dark">
              <h4>✨✨✨✨✨✨Phase 6️⃣🗓️</h4><br></br>
            </Card>
            <div><h3>To be continued.......🪐</h3></div>
         </Container>
      </Card>
    </Container>
  );
}

export default RoadMap;