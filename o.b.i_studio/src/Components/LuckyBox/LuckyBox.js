import React from 'react';
import { Card, CardGroup, Button, Container, Navbar, Table, Row, Col} from 'react-bootstrap';
import Vue from 'vue'
import { VuePlugin } from 'vuera'
import chest from './chest.png'
import WalletCard from '../WalletConnect/MetaMask.js'
import ETH from '../WalletConnect/ETHPrice.js'
import Price from './LuckyBoxPrice.js'


function LuckyBox() {

        return(
            
         <div style={{backgroundColor: 'black', width: '100vw', height: '100vw'}} >
            <Container align="center" >

            <Row >
                <Col sm>Current ETH Price : $<ETH/></Col>
                <Col sm ><WalletCard></WalletCard></Col>
            </Row>           
            <br></br>
            <Row>
            <Col sm={4}>
            <Card border="warning" style={{backgroundColor: 'black'}}>
            <Card.Img variant="top" src={chest}/>
                 <Card.Body>
                     <Card.Text style={{color: 'White'}}>
                    </Card.Text>
                    <Card.Header style={{color: 'White'}}><Price/></Card.Header>
                    <Button variant="warning">Mint Now</Button> 
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
