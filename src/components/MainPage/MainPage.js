import React, {Component} from 'react';
import BrowsePage from '../BrowsePage/BrowsePage';
import DetailsPage from '../DetailsPage/DetailsPage';
import NavigationBar from '../NavigationBar/NavigationBar';
import './MainPage.scss';

class MainPage extends Component {

    state = {
        selectedTab: 0
    }

    selectTab = (tabId) => {
        this.setState({
            selectedTab: parseInt(tabId)
        })
    }
    render() {
        return (
            <div className="mainPageShell">
                <NavigationBar selectTab={this.selectTab} tabs={[{label:"Browse"}, {label:"Checkout"}]}></NavigationBar>
                {this.state.selectedTab === 0 && <BrowsePage></BrowsePage>}
                {this.state.selectedTab === 1 && <DetailsPage></DetailsPage>}
            </div>
        );
    }
}

export default MainPage;