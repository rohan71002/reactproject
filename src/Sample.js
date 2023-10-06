import React from 'react'

function Product(props) {
  return (
    <div>
        <img src = {props.productimg} height='100' width='100'/>
        <p>{props.id}</p>
        <p>{props.title}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default function Sample(){
    return(
        <>
        <Product productimg="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" id="1" price="$109.95" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"/>
        <Product productimg="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" id="2" price="$22.3" title="Mens Casual Premium Slim Fit T-Shirts"/>
        <Product productimg="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" id="3" price="$55.99" title="Mens Cotton Jacket"/>
        <Product productimg="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" id="4" price="$15.99" title="Mens Casual Slim Fit"/>
        </>
    );
}
