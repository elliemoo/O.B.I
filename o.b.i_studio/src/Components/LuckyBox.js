import React from 'react';
import { Card, CardGroup, Button, Container, Navbar, Table, Row, Col} from 'react-bootstrap';
import Vue from 'vue'
import { VuePlugin } from 'vuera'
import chest from '../Images/chest.png'
import useMetaMask from '/Users/hemanthvejandla/Documents/GitHub/O.B.I/o.b.i_studio/src/Components/MetaMask.js'
import { injected } from '/Users/hemanthvejandla/Documents/GitHub/O.B.I/o.b.i_studio/src/Components/wallet/connectors.js';


function LuckyBox() {

    //const { connect, disconnect, isActive, account } = useMetaMask()
 
            
        return(
            
         <div style={{backgroundColor: 'black', width: '100vw', height: '100vw'}} >
            <Container align="center" >
            <Row>
            <Col sm={4}>
            <Card border="warning" style={{backgroundColor: 'black'}}>
            <Card.Img variant="top" src={chest}/>
                 <Card.Body>
                     <Card.Text style={{color: 'White'}}>
                    </Card.Text>
                    {/*<Card.Header style={{color: 'White'}}>Price : {400/this.state.price}</Card.Header>*/}
                    <Button variant="warning">Mint Now</Button>
                    {/*<Button onClick={connect} variant="secondary">Connect With MetaMask</Button>
        { isActive ? <span>Connected with {account}</span> : <span>Not Connected</span> }

        <Button onClick={disconnect} variant="danger">Disconnect from MetaMask</Button>*/}
                    
                </Card.Body>
            </Card>
            </Col>

            <Col sm={8}>
            <Card border="warning" style={{ backgroundColor: 'black'}}>
            </Card>
            </Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
        </div>
         );

        }
    

export default LuckyBox;
