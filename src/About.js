import React from 'react'
import Nav from './Nav'
import logo from './Images/Dodge.jpg';
export default function About() {
  return (
    <>
    <Nav/>
    <h1>About</h1>
    <img src={logo} height='700' width='1000'></img>
    </>
  )
}
