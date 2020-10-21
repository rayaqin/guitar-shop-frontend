import React, { Component } from 'react';
import './BrowsePage.scss';
import GuitarList from '../GuitarList/GuitarList';
import DetailsModal from '../DetailsModal/DetailsModal';

class BrowsePage extends Component {

    state = {
        showDetails: false,
        selectedGuitarData: {},
    }

    setShowDetails = (showValue, guitar) => {
        if(guitar){
            this.setState({
                showDetails: showValue,
                selectedGuitarData: guitar
            })
        } else {
            this.setState({
                showDetails: showValue,
            })
        }
    }

    guitars = [
        { id: 1, name: "Gibson", price: "500USD", description: "Gibson invented archtop guitars by constructing the same type of carved, arched tops used on violins. By the 1930s, the company was also making flattop acoustic guitars, as well as one of the first commercially available hollow-body electric guitars, used and popularized by Charlie Christian."},
        { id: 2, name: "Tanglewood", price: "700USD", description: "Tanglewood Guitars is an English manufacturer of stringed instruments, including electric, steel-string acoustic and classical guitars, bass guitars, banjos, mandolins, ukuleles, and guitar amplifiers. Instruments are designed in the United Kingdom and manufactured in China."},
        { id: 3, name: "Martin", price: "5000USD", description: "C.F. Martin & Company (often referred to as Martin) is an American guitar manufacturer established in 1833, by Christian Frederick Martin. It is highly respected for its acoustic guitars and is a leading manufacturer of flat top guitars."},
        { id: 4, name: "Fender", price: "800USD", description: "Fender’s rich acoustic guitar history dates back to the early 1960s, when the company injected a much-needed dose of modernity and youthfully exuberant Southern California sun-and-fun culture into the old world of acoustic guitar design."},
        { id: 5, name: "Yamaha", price: "300USD", description: "The Yamaha A Series takes your acoustic performance to the next level with dynamic, natural amplified tone; a refined, powerful acoustic voice and outstanding playability."},
        { id: 6, name: "Gibson", price: "500USD", description: "Gibson invented archtop guitars by constructing the same type of carved, arched tops used on violins. By the 1930s, the company was also making flattop acoustic guitars, as well as one of the first commercially available hollow-body electric guitars, used and popularized by Charlie Christian." },
        { id: 7, name: "Tanglewood", price: "700USD", description: "Tanglewood Guitars is an English manufacturer of stringed instruments, including electric, steel-string acoustic and classical guitars, bass guitars, banjos, mandolins, ukuleles, and guitar amplifiers. Instruments are designed in the United Kingdom and manufactured in China." },
        { id: 8, name: "Martin", price: "5000USD", description: "C.F. Martin & Company (often referred to as Martin) is an American guitar manufacturer established in 1833, by Christian Frederick Martin. It is highly respected for its acoustic guitars and is a leading manufacturer of flat top guitars." },
        { id: 9, name: "Fender", price: "800USD", description: "Fender’s rich acoustic guitar history dates back to the early 1960s, when the company injected a much-needed dose of modernity and youthfully exuberant Southern California sun-and-fun culture into the old world of acoustic guitar design." },
        { id: 10, name: "Yamaha", price: "300USD", description: "The Yamaha A Series takes your acoustic performance to the next level with dynamic, natural amplified tone; a refined, powerful acoustic voice and outstanding playability." },
    ]
    render() {
        return (
            <div className="browsePageShell">
                <GuitarList
                    setShowDetails={this.setShowDetails}
                    guitars={this.guitars}
                    addGuitarToCart={this.props.addGuitarToCart}/>
                {this.state.showDetails && this.state.selectedGuitarData &&
                    <DetailsModal
                        guitarData={this.state.selectedGuitarData}
                        addGuitarToCart={this.props.addGuitarToCart}
                        setShowDetails={this.setShowDetails}/>}
            </div>

        );
    }
}

export default BrowsePage;