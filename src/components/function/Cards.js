import React from 'react'
import './Cards.css'
 


const Cards = (props)  => {
  const {hospitaltype,hospitalname,address,contactnumber, normalbed,icubed,o2bed,total,date} = props.detail;
   
  
 
  return(
    <div className="cardalign">
      <div className="main center">
          <div className="box center"> 
        <h2> <div className="hname">{hospitaltype} - 
          { hospitalname}</div></h2><br/>
         <div className="address">  <svg className="ic24" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg><br/>&emsp;{address} <br/>
         <svg className="ic34" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg>{contactnumber}</div><br/>
         <div className="bed">
          <h4>&emsp;&emsp;&emsp; Vacancy/Total</h4>
         Normal:&emsp;{normalbed} <br/>
         ICU:&emsp;&emsp;&emsp;{icubed} <br/>
         Oxygen:&emsp;{o2bed} <br/>
         Total:&emsp;&emsp;&emsp;{total}<br/><br/>
         <div className="dt">{date}</div>
       
          
             
              <div  id="mn">
             <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cdesk006@gmail.com&body={normalbed}" target="_blank"> <svg width="40" height="40" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg></a>
               {/* <a href="mailto:{cdesk006@gmail.com}?subject={hospitalname} &body={normalbed}"><svg width="40" height="40" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg></a> */}
             </div>
               
             
           </div>
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