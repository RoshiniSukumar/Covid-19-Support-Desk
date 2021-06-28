import React,{useEffect,useState} from 'react'
import axios from 'axios'
import  './Tracker.css'

function Tracker() {
// var [data, setdata] = useState([])
    const [datas, setdatas] = useState(undefined)
    var data=[]
    // var flag=""
    // var country=""
    var active=""
    var cases=""
    var critical=""
    var deaths=""
    var recovered=""
    var tests=""
    useEffect(async() => {
          var datass= await axios.get("https://corona.lmao.ninja/v2/countries/India")
          setdatas(datass)
         
        //  console.log(active)
    },[]  )
    if (datas!==undefined){
        console.log("hxJZ")
    data=datas.data

        //  flag=data.countryInfo.flag
        //  country=data.country
         active=data.active
         cases=data.cases
         critical=data.critical
         deaths=data.deaths
         recovered=data.recovered
         tests=data.tests
    }
    console.log(datas)
  return (
    
      <div class="conta">
     
     
     
    <h1 >Covid-19 Cases In India <span id="country"></span> </h1>

    <img src="./images/india.png" alt="country" id="flag"></img>
  
    <div class="content2">
        <div class="box3">
            <div class="subtitle active" >Active Cases  </div>
            <div class="data" id="Active_Cases"><div> {active} </div></div>
            
        </div>
        <div class="box3">
            <div class="subtitle total">Total Cases</div>
            <div class="data" id="Total_Cases">{cases}</div>
        </div>
        <div class="box3">
            <div class="subtitle critical">Critical Cases</div>
            <div class="data" id="Critical_Cases">{critical}</div>
        </div>
        <div class="box3">
            <div class="subtitle death">Total Deaths</div>
            <div class="data" id="Total_Death">{deaths}</div>
        </div>
        <div class="box3">
            <div class="subtitle recovered">Recovered Cases</div>
            <div class="data" id="Recovered_Cases">{recovered}</div>
        </div>
        <div class="box3">
            <div class="subtitle test">Total Tests Done</div>
            <div class="data" id="Total_Test_Done">{tests}</div>
        </div>
    </div>
 </div>
     
     
  )
}

export default Tracker
