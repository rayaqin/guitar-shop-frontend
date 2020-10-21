import React, { Component } from 'react';
import './CheckoutPage.scss';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { BACKENDURL } from '../../constants';


class CheckoutPage extends Component {

    state = {
        totalPrice: 0,
        cartData: null
    }

    componentDidMount(){
        let combinedPrice = 0;
        let checkoutDataMap = new Map();

        this.props.cartContents.forEach((guitar)=>{
            combinedPrice += parseInt(guitar.price);
            if(checkoutDataMap.has(guitar.name)){
                checkoutDataMap.set(guitar.name, {data: guitar, amount: checkoutDataMap.get(guitar.name).amount+1})
            } else {
                checkoutDataMap.set(guitar.name, { data: guitar, amount: 1 })
            }
        })
        let stateCartData = [];
        checkoutDataMap.forEach((data)=>{
            stateCartData.push(data);
        })

        this.setState({
            cartData: stateCartData,
            totalPrice: combinedPrice
        })
    }

    handleOrderClick = () => {
        axios.post(BACKENDURL + "/order", this.state.cartData.map((guitar)=>{
            return { guitarId: guitar.data.id, amount: guitar.amount}
        }))
        .then((response)=>{
            this.props.clearCart();
        })
        .catch((error)=>{
            console.log("Error:", error);
        })
    }

    render() {
        return (
            <div className="checkoutPageShell">
                <div className="checkoutContainer">
                    <h1 className="checkoutTitle">Items in your cart</h1>
                    {this.state.cartData && this.state.cartData.map((guitar)=>{
                        return (
                            <div className="checkoutItem">
                                <p>{guitar.amount + "x"}</p>
                                <p>{guitar.data.name}</p>
                                <p>{guitar.data.price}</p>
                        </div>
                        )
                    })}
                    <div className="checkoutTotalPriceContainer">
                        <p className="checkoutTotalLabel">Total Price:</p>
                        <p className="checkoutTotalPrice">{this.state.totalPrice + "USD"}</p>
                    </div>
                    <div className="orderButtonContainer">
                        <Button
                            disabled={this.state.cartData && this.state.cartData.size === 0}
                            style={{
                                backgroundColor: "#611818",
                                color: "#fde1ae",
                                width: "150px",
                                height: "60px",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                            onClick={this.handleOrderClick}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutPage;