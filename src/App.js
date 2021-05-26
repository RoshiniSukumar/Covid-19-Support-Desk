
import React from 'react'
import Header from './components/function/Header'
import Footer from './components/function/Footer'
import Navbar from './components/function/Navbar'
import Checkbox from './components/function/Checkbox'
import Searchbar from './components/function/Searchbar'
import Sidepan from './components/function/Sidepan'
import Contact from './components/function/Contact'
import Home from './components/function/Home'
import Exlinks from './components/function/Exlinks'
import Login from './components/function/Login'
 
import About from './components/function/About'
import Cards from './components/function/Cards'
import {BrowserRouter,Route,Switch} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Checkbox/>
          <Searchbar/>
          <Sidepan/>
          <Home/>
          <Cards/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/about">
        <About/>
        <Exlinks/>
       
      </Route>
      <Route exact path="/login">
        <Login/>
        
      </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
     
     
     
     
    
  )
}
export default App;