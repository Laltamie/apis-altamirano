import React from "react";
import "../Item/Item.css"

const images = require.context('../../assets/images', true);

const Item = ({img, name, precio}) => {
    img = img ? img : "./default.png"
    
    return (
        <>
        <div className="container">
            <div className="card card-ItemL" width="100px" >
                <img src={images(`${ img }`)} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{name}</b></h5>
                    <p className="card-text text-center">${precio}</p>
                </div>
            </div>
        </div>    
        </>
    )
        
};

export default Item;