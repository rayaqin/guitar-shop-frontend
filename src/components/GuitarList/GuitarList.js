import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './GuitarList.scss';
import { FaGuitar } from 'react-icons/fa';




const GuitarList = (props) => {

    const handleListItemClick = (event, guitar) => {
        if (event.target.id === "detailsTrigger") {
            props.setShowDetails(true, guitar);
        }
    }

    return (
        <div className="listContainer">
            {props.guitars.map((guitar)=>{
                return (
                    <div className="listItem" id="detailsTrigger"  onClick={(event)=>{handleListItemClick(event, guitar)}}>
                        <div id="detailsTrigger" className="listItemStart">
                            <Avatar
                                id="detailsTrigger"
                                onClick={()=>props.setShowDetails(true, guitar)}
                                style={{
                                    color: "brown",
                                    backgroundColor: "#faf5ca",
                                    width: "70px",
                                    height: "70px",
                                    marginLeft: "30px"
                                }}>
                                <FaGuitar size={40}/>
                            </Avatar>
                            <label id="detailsTrigger" className="guitarName">
                                {guitar.name}
                            </label>
                        </div>
                        <div id="detailsTrigger" className="listItemEnd">
                            <label id="detailsTrigger" className="guitarPrice">
                                {guitar.price}
                            </label>
                            <IconButton
                                aria-label="add to cart"
                                style={{
                                    marginLeft: "20px",
                                    marginRight: "15px"
                                }}
                                onClick={() => props.addGuitarToCart(guitar)}>
                                <AddShoppingCartIcon
                                    style={{
                                        color: " #1a7116",
                                        width: "35px",
                                        height: "35px",}}/>
                            </IconButton>
                        </div>


                    </div>
                )
            })}
        </div>



    );
}

export default GuitarList;