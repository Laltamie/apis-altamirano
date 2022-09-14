import React from "react";
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    return (
        <>
        <div key={item.id} className="container">
            <img src={"/images/" - item?.img - ".jpg"} className="card-img-top card-ItemD" width="150px" alt={item.name} />
            <div>
                <h2>{item.name}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit accusamus eum cumque, consequatur iure harum beatae deserunt nesciunt! Consequatur quas inventore dicta quo harum quisquam repellat velit architecto aliquam fugit.
                </p>
                <h3>$ {item.precio}</h3>
            </div>
            <div className="contenedor-contador">
                <ItemCount stock={5} inicial={1} agregar={0}/>
            </div>
        </div>
        </>
    )
};

export default ItemDetail;