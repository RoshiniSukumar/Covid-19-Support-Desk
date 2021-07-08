import React from 'react'
import './Cards.css'


const Cards = (props)  => {
  const {hospitaltype,hospitalname,address,contactnumber, normalbed,icubed,o2bed,total} = props.detail;
  

  return(
    <div className="cardalign">
      <div className="main center">
          <div className="box center"> 
        <h2> <div className="hname">{hospitaltype} - 
          { hospitalname}</div></h2>
         <div className="address">Address:<br/>&emsp;{address} <br/>
          Ph No:{contactnumber}</div><br/>
         <div className="bed">
          <h4>&emsp;&emsp;&emsp; Vacancy/Total</h4>
         Normal:&emsp;{normalbed} <br/>
         ICU:&emsp;&emsp;&emsp;{icubed} <br/>
         Oxygen:&emsp;{o2bed} <br/>
         Total:&emsp;&emsp;&emsp;{total}</div>
          
         </div>
         </div>
    </div>
  )
}

export default Cards; 
   

/*
         */
 

/*
<div className="main center">
          <div className="bx">
          <h2>CHO - ARUN HOSPITAL</h2>
              <div className="content center">
              
                  <p>Ph:9776553657</p>
                  
                  <p>NEW SCHEME ROAD, Pollachi
                    Coimbatore
                  </p>
                   
                  <table>
                    <tr>
                  <th>Bed type</th>
                  <th>Vacant/Total</th>
                  </tr>
                  <tr>
                    <td>Normal</td>
                    <td>10/46</td>
                    </tr>
                    <tr><td>Oxygen</td>
                    <td>0/32</td>
                    </tr>
                    <tr><td>ICU</td>
                    <td>0/2</td>
                      </tr> 
                      <tr>
                        <td>Total</td>
                        <td>10/70</td>
                      </tr>



                  </table>
              </div>

          </div>
      </div>
      */


      /*
      <div className="fully">
    <div class="box1">
        <div class="imgBx">
        <h2>CHO - ARUN HOSPITAL</h2>   
        </div>
        <div class="content1">
        <p>Ph:9776553657</p><br></br>
                  
                  <p>NEW SCHEME ROAD, Pollachi
                    Coimbatore
                  </p><br></br>
                   
                  <table>
                    <tr>
                  <th>Bed type</th>
                  <th>Vacant/Total</th>
                  </tr>
                  <tr>
                    <td>Normal</td>
                    <td>10/46</td>
                    </tr>
                    <tr><td>Oxygen</td>
                    <td>0/32</td>
                    </tr>
                    <tr><td>ICU</td>
                    <td>0/2</td>
                      </tr> 
                      <tr>
                        <td>Total</td>
                        <td>10/70</td>
                      </tr>



                  </table> 
        </div>
    </div>
      
    </div>
    */