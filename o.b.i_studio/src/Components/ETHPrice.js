import $ from 'jquery';
import React from 'react';

export default class ETH extends React.Component {
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



        render() {        
        return(
            <div>
            <h1>ETH Price: {this.state.price}</h1>
            </div>
        )

        }
    
    }