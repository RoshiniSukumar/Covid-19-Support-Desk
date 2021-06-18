
import React,{useState} from 'react'
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

function App() {
//     const [details,setDetails] = useState([]);
//     const addDetails = (detail) => {
//       console.log(detail);
// };

  const details =[
    {
      hospitaltype:"Cho",
      hospitalname:"Arun hospital",
      address:"x street cbe",
      contactnumber:"676867547954",
      normalbed:"10/12",
      icubed:"10/12",
      o2bed:"10/12",
      total:"30/36"
  },
  {
    hospitaltype:"Cho",
    hospitalname:"Arthi hospital",
    address:"x street cbe",
    contactnumber:"676867547954",
    normalbed:"10/12",
    icubed:"10/12",
    o2bed:"10/12",
    total:"30/36"
},
{
  hospitaltype:"Cho",
  hospitalname:"Arun hospital",
  address:"x street cbe",
  contactnumber:"676867547954",
  normalbed:"10/12",
  icubed:"10/12",
  o2bed:"10/12",
  total:"30/36"
},
{
hospitaltype:"Cho",
hospitalname:"Arthi hospital",
address:"x street cbe",
contactnumber:"676867547954",
normalbed:"10/12",
icubed:"10/12",
o2bed:"10/12",
total:"30/36"
}
] 

  
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
         <Links/>
          <Checkbox />
          <Searchbar/>
           
           <Home/> 
           
          <BedDetails details={details}/>
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