import React, {Component} from 'react';
import BrowsePage from '../BrowsePage/BrowsePage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import NavigationBar from '../NavigationBar/NavigationBar';
import './MainPage.scss';
import axios from 'axios';
import { BACKENDURL } from '../../constants';

class MainPage extends Component {

    state = {
        selectedTab: 0,
        cartContents: []
    }

    selectTab = (tabId) => {
        this.setState({
            selectedTab: parseInt(tabId)
        })
    }

    addToCart = (guitar) => {
        this.setState({
            cartContents: [...this.state.cartContents, guitar]
        })
        axios.post(BACKENDURL + "/cart", {guitarId: guitar.id, amount: 1})
        .catch((error) => {
            console.log("Error:", error);
        })
    }

    clearCart = () => {
        this.setState({
            cartContents: []
        })
    }

    render() {
        return (
            <div className="mainPageShell">
                <div className="mainPageContent">
                    <NavigationBar selectTab={this.selectTab} tabs={[{ label: "Browse" }, { label: "Checkout" }]}></NavigationBar>
                    {this.state.selectedTab === 0 && <BrowsePage addGuitarToCart={this.addToCart}/>}
                    {this.state.selectedTab === 1 && <CheckoutPage cartContents={this.state.cartContents}/>}
                </div>
            </div>
        );
    }
}

export default MainPage;