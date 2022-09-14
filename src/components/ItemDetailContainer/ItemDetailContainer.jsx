import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../productos"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {

        const getProduct = new Promise ((res, rej) => {
            const product = productos.find((produ) => produ.id === 5)
            setTimeout(() => {
                res(product)
            }, 2000)
        });

        getProduct.then((info) => {
            setItem(info)
        });

    }, []);

    return (
        <div>
           <ItemDetail item={item}/> 
        </div>
    )
};

export default ItemDetailContainer;