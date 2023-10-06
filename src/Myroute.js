import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Sample from './Sample';
import MyApi from './Myapi';

export default function Myroute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Ecommerce' element={<Sample/>}/>
        <Route path='/Api' element={<MyApi/>}/>
    </Routes>
    </BrowserRouter>
  )
}
