import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const productos = [
            {id: 1, name: "Conjunto", precio: "30000",img: "./producto-1.jpg"},
            {id: 2, name: "Conjunto Primavera",precio: "35000",img: "./producto-2.jpg"},
            {id: 3,name: "Vestido",precio: "25000", img: "./producto-3.jpg"},
            {id: 4,name: "Sweater", precio: "18000",img: "./producto-4.jpg"},
            {id: 5,name: "Top",precio: "9000",img: "./producto-5.jpg"},
            {id: 6,name: "Vestido Verano",precio: "50000",img: "./producto-6.jpg"},
            {id: 7,name: "Catsuit Verano",precio: "36000",img: "./producto-7.jpg"},
            {id: 8,name: "Camisa",precio: "13000",img: "./producto-8.jpg"},
            {id: 9,name: "Campera",precio: "11000",img: "./producto-9.jpg"}
          ]

        const getProduct = new Promise ((res, rej) => {
            const product = productos.find((produ) => produ.id === 1)
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