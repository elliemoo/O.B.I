import React from 'react';
import ReactDOM from "react-dom";
import { Card, CardGroup, Button, Container, Navbar, Table} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Vue from 'vue'
import { VuePlugin } from 'vuera'
import $ from 'jquery';
import chest from '../Images/chest.png'


export default class LuckyBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        price: 0.00,
        }
    } 

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        var context = this;

        window.setTimeout(function() {
            $.ajax({
                url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
                dataType: "json",
                method: "GET",
                success: function(response) {
                    context.setState({
                        price: response.USD,
                    });
                }
            });
        }, 3000);
    }

    cost() {
       {Math.round(((400/this.state.price) * 100) /100)}
    }

    

        render() {      
            
        return(

         <div style={{backgroundColor: 'black', width: '100vw', height: '100vw'}} >
            <Container align="center" >
            <h2 style={{color: 'White', paddingTop: '20px', paddingBottom: '20px'}}>O.B.I. Studios Node Lucky Box</h2>

            <h1>ETH Price: {this.state.price}</h1>

            <Card border="warning" style={{ width: '20rem', backgroundColor: 'black'}}>
            <Card.Img variant="top" src={chest} />
                 <Card.Body>
                     <h3 style={{color: 'White'}}>Drop Rate</h3>
                     <Card.Text style={{color: 'White'}}>
                     <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>Zoth</th>
                                <th>2%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Ardenterians</td>
                                <td>4%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Kleptians</td>
                                <td>5%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Ophites</td>
                                <td>6%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Valkarians</td>
                                <td>7%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Hadesians</td>
                                <td>9%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Xenarths</td>
                                <td>16%</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                <td>Icarians</td>
                                <td>51%</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                    <Card.Header style={{color: 'White'}}>Price : {400/this.state.price}</Card.Header>
                    <Button variant="warning">Mint Now</Button>{' '}
                </Card.Body>
            </Card>
        </Container>
        </div>
         );

        }
    
    }


