
import React,{useEffect, useState} from 'react'
import Header from './components/function/Header'
import Footer from './components/function/Footer'
import Navbar from './components/function/Navbar'
import Checkbox from './components/function/Checkbox'
import Searchbar from './components/function/Searchbar'
import Contact from './components/function/Contact'
import Home from './components/function/Home'
import Exlinks from './components/function/Exlinks' 
import Links from './components/function/Links'
import About from './components/function/About'
import Socialmediabar from './components/function/Socialmediabar'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import BedDetails from './components/function/BedDetails'
 import FormDetails from './components/function/FormDetails'
import Tracker from  './components/function/Tracker'
import Signup from './components/function/Signup'
import Signin from './components/function/Signin'
import MyDetails from './components/function/MyDetails'
import axios from 'axios'
function App() {
//     const [details,setDetails] = useState([]);
//     const addDetails = (detail) => {
//       console.log(detail);
// };
const [bar, setbar] = useState("")
const [detailss, setdetailss] = useState([])
  useEffect(async() => {
     var card= await axios.get("http://localhost:2000/details")
     console.log('====================================');
     console.log(card.data);
     setdetailss(card.data)
     console.log('====================================');
     
  }, [])
 

  const [privatee,setprivatee] = useState(false)
  const [govt, setgovt] = useState(false)
  const [chc, setchc] = useState(false)
  const [ccc, setccc] = useState(false)
  const [cho, setcho] = useState(false)
  const [iccc,seticcc] = useState(false)
   
  var category = []



 

  if(ccc==true){
    let cc=detailss.filter((det)=> det.hospitaltype=="ccc")
     category=category.concat(cc)
     console.log("category",category)
     console.log("Im in ccc",ccc)
     console.log("cc",category)
  }
  if(cho==true){
    let gj=detailss.filter((det)=> det.hospitaltype=="cho")
    category=category.concat(gj)
    console.log("category",category)
    console.log("im in cho",cho)
    console.log("gj",category)
  }
  if(chc==true){
    let pr=detailss.filter((det)=> det.hospitaltype=="chc")
    category=category.concat(pr)
    // category.concat(pr)
    console.log("im in chc",chc)
    console.log("pr",category)
  }
  if(iccc==true){
    let nj=detailss.filter((det)=> det.hospitaltype=="iccc")
    var category = category.concat(nj)
    console.log("category",category)
    console.log("im in iccc",iccc)
    console.log("nj",category)
  }
  console.log("bar",bar)

  console.log("category",category)

  if (bar!==""){
    category = category.filter((det)=> det.hospitalname==bar) 
    
    
    
  }
  else{
     category =  category
  }
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
         <Links/>
          <Checkbox p={setprivatee}  g={setgovt} c={setccc} o={setcho} h={setchc} i={seticcc}/>
          <Searchbar set ={setbar}/>
           
           <Home/> 
           
          <BedDetails details={category}/>
      </Route>
      
      <Route exact path="/tracker">
        <Tracker/>
      </Route>


      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/about">
        <About/>
        <Exlinks/>
        
      </Route>

      <Route exact path="/login">

         <p className="condition">***This page is for hospital use only!</p>
       
         <Signin/> 
        </Route>
              
        
      
    
    
        <Route exact path="/register" > 
        <p className="condition">***This page is for hospital use only!</p>
        <Signup/>
        </Route>
        
        <Route exact path="/register/details" > 
        <FormDetails/>
        </Route>
        
        

         
      </Switch>
      <MyDetails/>
      <Socialmediabar/>
      <Footer/>
    </BrowserRouter>
    
  )
}
export default App;