import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './DetailsModal.scss';

const DetailsModal = (props) => {

    const handleBackdropClick = (event) => {
        if(event.target.id === "backdrop"){
            props.setShowDetails(false);
        }
    }

    return (
        <div className="backdrop" id={"backdrop"} onClick={handleBackdropClick}>
            <div className="detailsDialog">
                <div className="detailsDialogContent">
                    <div className="detailsDialogTitle">
                        <p>{props.guitarData.name && props.guitarData.name + " details"}</p>
                        <IconButton
                            style={{
                                marginTop: "15px",
                                height: "50px",
                                width: "50px",
                                color: "#fde1ae"
                            }}
                            onClick={()=>props.setShowDetails(false)}>
                            <CloseIcon
                                />
                        </IconButton>
                    </div>
                    <p className="detailsDialogDescription">{props.guitarData.description}</p>
                    <p className="detailsDialogPrice">{"This guitar costs: " + props.guitarData.price}</p>
                    <div className="addToCartButtonContainer">
                        <Button
                            style={{
                                backgroundColor: "#611818",
                                color: "#fde1ae",
                                width: "130px",
                                height: "50px",
                                borderRadius: "15px",
                                marginBottom: "15px"
                            }}
                            onClick={()=>{
                                props.setShowDetails(false);
                                props.addGuitarToCart(props.guitarData);}}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailsModal;
