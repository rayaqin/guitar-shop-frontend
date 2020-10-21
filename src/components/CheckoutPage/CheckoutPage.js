import React, { Component } from 'react';
import './CheckoutPage.scss';
import Button from '@material-ui/core/Button';


class CheckoutPage extends Component {

    state = {
        totalPrice: 0
    }

    componentDidMount(){
        let combinedPrice = 0;
        this.props.cartContents.forEach((guitar)=>{
            combinedPrice += parseInt(guitar.price);
        })
        this.setState({
            totalPrice: combinedPrice
        })
    }

    handleOrderClick = () => {
        console.log("order", this.props.cartContents);
    }

    render() {
        return (
            <div className="checkoutPageShell">
                <div className="checkoutContainer">
                    <h1 className="checkoutTitle">Items in your cart</h1>
                    {this.props.cartContents.length !== 0 ? this.props.cartContents.map((guitar)=>{
                        return (
                            <div className="checkoutItem">
                                <p>{guitar.name}</p>
                                <p>{guitar.price}</p>
                        </div>
                        )
                    }) : <div className="checkoutItem centerText">
                            You have no items in your cart yet
                        </div>}
                    <div className="checkoutTotalPriceContainer">
                        <p className="checkoutTotalLabel">Total Price:</p>
                        <p className="checkoutTotalPrice">{this.state.totalPrice + "USD"}</p>
                    </div>
                    <div className="orderButtonContainer">
                        <Button
                            disabled={this.props.cartContents.length === 0}
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