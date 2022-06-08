import React from 'react';
import { Card, CardGroup, Button, Container, Navbar, Table, Row, Col} from 'react-bootstrap';
import Vue from 'vue'
import { VuePlugin } from 'vuera'
import chest from './Chest.GIF'
import WalletCard from '../WalletConnect/MetaMask.js'
import ETH from '../WalletConnect/ETHPrice.js'
import Price from './LuckyBoxPrice.js'


function LuckyBox() {

        return(
            
         <div style={{backgroundColor: 'black', width: '100vw', height:'100vh'}} >
            <Container align="center" >

            <Row >
                <Col sm={4}>Current ETH Price : $<ETH/></Col>
                <Col sm={8}><WalletCard></WalletCard></Col>
            </Row>           
            <br></br><br></br>
            <Row>
            <Col sm={4}>
            <Card border="warning" style={{backgroundColor: 'black'}}>
            <Card.Img variant="top" src={chest}/>
                 <Card.Body>
                     <Card.Text style={{color: 'White'}}>
                    </Card.Text>
                    <Card.Header style={{color: 'White'}}><Price/></Card.Header>
                    <br></br>
                    <Button variant="warning">Mint Now</Button> 
                </Card.Body>
            </Card>
            </Col>

            <Col sm={8}>
            <Card.Header style={{color: 'white' }}><h3>Personal Dashboard</h3></Card.Header>
            <Card border="warning" style={{ backgroundColor: 'black', color: 'white' }}>
                <Row>
                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>My Nodes</Card.Header>
                    <Card.Body>
                     <Card.Title>10</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Total Daily Rewards</Card.Header>
                    <Card.Body>
                     <Card.Title>320 $OBI</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Discount % for Mint</Card.Header>
                    <Card.Body>
                     <Card.Title>20%</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            
                <br></br>
                <Row>
                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>ROI Reached</Card.Header>
                    <Card.Body>
                     <Card.Title>False</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Date of Last Claim</Card.Header>
                    <Card.Body>
                     <Card.Title>01-06-2022</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Current Tax %</Card.Header>
                    <Card.Body>
                     <Card.Title>25%</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br></br>
            </Card>
            <br></br>
            <Card.Header style={{color: 'white' }}><h3>Protocol Stats</h3></Card.Header>
            <Card border="warning" style={{ backgroundColor: 'black', color: 'white' }}>
                <br></br>
                <Row>
                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Total Number of Nodes</Card.Header>
                    <Card.Body>
                     <Card.Title>10000</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>$OBI Price</Card.Header>
                    <Card.Body>
                     <Card.Title>$1.8</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ backgroundColor: '#202124', color: 'white' }}>
                    <Card.Header>Rewards Pool %</Card.Header>
                    <Card.Body>
                     <Card.Title>90%</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br></br>
            </Card>

            </Col>
            </Row>
        </Container>
        </div>
         );

        }
    

export default LuckyBox;
