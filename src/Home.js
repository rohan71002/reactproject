import React from 'react';
import logo from './Images/Dodge.jpg';
import Nav from './Nav';
export default function Home() {
  return (
    <>
    <Nav/>
    <h1>Home</h1>
    <img src={logo} height='700' width='1000'></img>
    </>
  )
}
