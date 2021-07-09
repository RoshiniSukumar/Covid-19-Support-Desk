import React ,{useState} from 'react'
import './Contact.css'

export default function Contact() {
    var a =[
        {
   
            S_no:" S_no" ,
            District:" District",
            Name_of_the_JDHS:"Name_of_the_JDHS  ",
            Official_No:"Official_No",
            Control_Room:"Control_Room",
            Name_of_the_coordinator:"Name_of_the_coordinator",
            Contact_No:"Contact_No"
            },
        {
   
   S_no:"1" ,
   District:"Ariyalur",
   Name_of_the_JDHS:"Dr.S.Selvaraj",
   Official_No:"9444982674",
   Control_Room:"04329-228709",
   Name_of_the_coordinator:"Dr.Manikandan",
   Contact_No:"9943848250"
   },
   {
   S_no: 2,
   District: "Chengalpattu",
   Name_of_the_JDHS:"Dr.E.Jeeva",
   Official_No: "9444982667",
   Control_Room: "044-27427412",
   Name_of_the_coordinator:  "Dr.Dhandapani",
   Contact_No:"9940013418"
   },
   {
   S_no: 3,
   District: "Coimbatore",
   Name_of_the_JDHS:"Dr.P.Krishna",
   Official_No: "9498027043",
   Control_Room: "0422-2306051 ,0422-2306052 ,0422-2306053",
   Name_of_the_coordinator:  "Dr.M.Venkatesh",
   Contact_No:"9442348668"
   },
   {
   S_no: 4,
   District: "Cuddalore",
   Name_of_the_JDHS:"Dr.P.N.Ramesh Babu",
   Official_No: "9444982662",
   Control_Room: "04142-220700",
   Name_of_the_coordinator:  "Dr.M.Dr.A.N.Parimelazhagan",
   Contact_No:"9444305528"
   },
   {
   S_no: 5,
   District: "Dharmapuri",
   Name_of_the_JDHS:"Dr.K.Thilagam",
   Official_No: "9444982663",
   Control_Room: "04342-231500",
   Name_of_the_coordinator:  "Dr.S.Rajkumar",
   Contact_No:"9865533866"
   },
   {
   S_no: 6,
   District: "Dindigul",
   Name_of_the_JDHS:"Dr.R.Sivakumar",
   Official_No: "9444982664",
   Control_Room: "0451-2460320",
   Name_of_the_coordinator:  "Dr.Anitha",
   Contact_No:"9500627337"
   },
   {
   S_no: 7,
   District: "Erode",
   Name_of_the_JDHS:"Dr.G.S.Gomathi",
   Official_No: "9444982665",
   Control_Room: "0424-226021",
   Name_of_the_coordinator:  "Dr.R.Venkatesh",
   Contact_No:"7397625530"
   },
   {
   S_no: 8,
   District: "Kallakurichy",
   Name_of_the_JDHS:"Dr.A.Shanmigakani",
   Official_No: "9444982689",
   Control_Room: "04151-228801",
   Name_of_the_coordinator:  "Dr.Raghunath",
   Contact_No:"9442248058"
   },
   {
   S_no: 9,
   District: "Kancheepuram",
   Name_of_the_JDHS:"Dr.E.Jeeva",
   Official_No: "9444982667",
   Control_Room: "044-27237107",
   Name_of_the_coordinator:  "Dr.Dhandapani",
   Contact_No:"9940013418"
   },
   {
   S_no: 10,
   District: "Kanniyakumari",
   Name_of_the_JDHS:"Dr.A.Pragalathan",
   Official_No: "9444982668",
   Control_Room: "04342-231500",
   Name_of_the_coordinator:  "Dr.S.Rajkuma",
   Contact_No:"9865533866"
   },
   {
   S_no: 11,
   District: "Karur",
   Name_of_the_JDHS:"Dr.G.Gnankkan Prem Nawaz",
   Official_No: "9444982669",
   Control_Room: "04342-256306",
   Name_of_the_coordinator:  "Dr.Vijayapushpa",
   Contact_No:"8754151500"
   },
   {
   S_no: 12,
   District: "Krishnagiri",
   Name_of_the_JDHS:"Dr.P.Paramasivam",
   Official_No: "9444982670",
   Control_Room: "04343-233021",
   Name_of_the_coordinator:  "Dr.P.SHanmugavel",
   Contact_No:"8012502981"
   },
   {
   S_no: 13,
   District: "Madurai",
   Name_of_the_JDHS:"Dr.P.Venkatachalam",
   Official_No: "9444982671",
   Control_Room: "0452-2530104",
   Name_of_the_coordinator:  "Dr.Swamy",
   Contact_No:"8523929620"
   },
   {
   S_no: 14,
   District: "Mayiladuthurai",
   Name_of_the_JDHS:"Dr.R.Mahendran(i/c)",
   Official_No: "9444982672",
   Control_Room: "04364-222588",
   Name_of_the_coordinator:  "Dr.R.Raja",
   Contact_No:"9965407980"
   },
   {
   S_no: 15,
   District: "Nagapattinam",
   Name_of_the_JDHS:"Dr.R.Mahendran(i/c)",
   Official_No: "9444982672",
   Control_Room: "04365-252593",
   Name_of_the_coordinator:  "Dr.R.Raja",
   Contact_No:"9965407980"
   },
   {
   S_no: 16,
   District: "Namakkal",
   Name_of_the_JDHS:"Dr.D.K.Chithra",
   Official_No: "9444982673",
   Control_Room: "04286-281377",
   Name_of_the_coordinator:  "Dr.Venkateshan",
   Contact_No:"9443471667"
   },
   {
   S_no: 17,
   District: "Perambalur",
   Name_of_the_JDHS:"Dr.S.Selvaraj",
   Official_No: "9444982674",
   Control_Room: "04328-1077",
   Name_of_the_coordinator:  "Dr.Manikandan",
   Contact_No:"9943848250"
   },
   {
   S_no: 18,
   District: "Pudukottai",
   Name_of_the_JDHS:"Dr.K.Ramu",
   Official_No: "9444982675",
   Control_Room: "04322-222207",
   Name_of_the_coordinator:  "Dr.Saravanan",
   Contact_No:"9095240592"
   },
   {
   S_no: 19,
   District: "Ramanathapuram",
   Name_of_the_JDHS:"Dr.A.Sakaya Stephenraj",
   Official_No: "9444982676",
   Control_Room: "04567-230060",
   Name_of_the_coordinator:  "Dr.Muthileswaran",
   Contact_No:"9789804212"
   },
   {
   S_no: 20,
   District: "Ranipet",
   Name_of_the_JDHS:"Dr.i.Yasmin",
   Official_No: "9444982688",
   Control_Room: "04172-273188",
   Name_of_the_coordinator:  "Dr.Ramya",
   Contact_No:"9751474818"
   },
   {
   S_no: 21,
   District: "Salem",
   Name_of_the_JDHS:"Dr.R.Malarvizhi Vallai",
   Official_No: "9444982677",
   Control_Room: "0427-2452202",
   Name_of_the_coordinator:  "Dr.Ramesh Kumar",
   Contact_No:"9894877720"
   },
   {
   S_no: 22,
   District: "Sivaganga",
   Name_of_the_JDHS:"Dr.Illango Maheswaran",
   Official_No: "9444982678",
   Control_Room: "04575-246233",
   Name_of_the_coordinator:  "Dr.Kishore Kumar",
   Contact_No:"9488232918"
   },
   {
   S_no: 23,
   District: "Tanjore",
   Name_of_the_JDHS:"Dr.P.Baskaran",
   Official_No: "9444982679",
   Control_Room: "04362-230121",
   Name_of_the_coordinator:  "Dr.Arul Selvan",
   Contact_No:"9442206774"
   },
   {
   S_no: 24,
   District: "Tenkasi",
   Name_of_the_JDHS:"Dr.K.Nedumaran",
   Official_No: "9444982683",
   Control_Room: "04546-261093",
   Name_of_the_coordinator:  "Dr.Karthick Arivudainambi",
   Contact_No:"9884356582"
   },
   {
   S_no: 25,
   District: "Nilgiris",
   Name_of_the_JDHS:"Dr.S.Palanisamy",
   Official_No: "9444982680",
   Control_Room: "0423-2450034",
   Name_of_the_coordinator:  "Dr.L.Subramanian",
   Contact_No:"9944039060"
   },
   {
   S_no: 26,
   District: "Theni",
   Name_of_the_JDHS:"Dr.Lakshmanan",
   Official_No: "9444982681",
   Control_Room: "04546-261093",
   Name_of_the_coordinator:  "Dr.Ramkumar",
   Contact_No:"9894521826"
   },
   {
   S_no: 27,
   District: "Thirupathur",
   Name_of_the_JDHS:"Dr.I.Yashmin",
   Official_No: "9444982688",
   Control_Room: "04179-222111",
   Name_of_the_coordinator:  "Dr.Ramya",
   Contact_No:"9751474818"
   },
   {
   S_no: 28,
   District: "Thiruppur",
   Name_of_the_JDHS:"Dr.T.K.Bhaghyalakshmi",
   Official_No: "9444982661",
   Control_Room: "0421-2971133",
   Name_of_the_coordinator:  "Dr.Marimuthy",
   Contact_No:"9942486422"
   },
   {
   S_no: 29,
   District: "Thoothukudi",
   Name_of_the_JDHS:"Dr.M.Murugavel",
   Official_No: "9444982682",
   Control_Room: "0461-2340101",
   Name_of_the_coordinator:  "Dr.Hemalatha",
   Contact_No:"9600957829"
   },
   {
   S_no: 30,
   District: "Tirunelveli",
   Name_of_the_JDHS:"Dr.K.Nedumaran",
   Official_No: "9444982683",
   Control_Room: "0462-2501070",
   Name_of_the_coordinator:  "Dr.Karthick Arivudainambi",
   Contact_No:"9884356582"
   },
   {
   S_no: 31,
   District: "Tiruvallur",
   Name_of_the_JDHS:"Dr.D.Rani",
   Official_No: "9444982684",
   Control_Room: "044-27666746",
   Name_of_the_coordinator:  "Dr.Feroz",
   Contact_No:"9566115409"
   },
   {
   S_no: 32,
   District: "Tiruvannamalai",
   Name_of_the_JDHS:"Dr.M.Kannagi",
   Official_No: "9444982685",
   Control_Room: "04175-233344",
   Name_of_the_coordinator:  "Dr.S.Chowdary",
   Contact_No:"9443474128"
   },
   {
   S_no: 33,
   District: "Tiruvarur",
   Name_of_the_JDHS:"Dr.J.Rajamoorthi",
   Official_No: "9444982686",
   Control_Room: "04366-226623",
   Name_of_the_coordinator:  "Dr.Arvindsamy",
   Contact_No:"8940430034"
   },
   {
   S_no: 34,
   District: "Trichy",
   Name_of_the_JDHS:"Dr.S.Lakshmi",
   Official_No: "9444982687",
   Control_Room: "0431-2418995",
   Name_of_the_coordinator:  "Dr.Gnanasekaran Muthukumar",
   Contact_No:"9600901904"
   },
   {
   S_no: 35,
   District: "Vellore",
   Name_of_the_JDHS:"Dr.I.Yasmin",
   Official_No: "9444982688",
   Control_Room: "0416-2226016",
   Name_of_the_coordinator:  "Dr.Ramya",
   Contact_No:"9751474818"
   },
   {
   S_no: 36,
   District: "Villupuram",
   Name_of_the_JDHS:"Dr.A.Shamigakani",
   Official_No: "9444982689",
   Control_Room: "04146-223265",
   Name_of_the_coordinator:  "Dr.Raghunath",
   Contact_No:"9442248058"
   },
   {
   S_no: 37,
   District: "Virudhunagar",
   Name_of_the_JDHS:"Dr.M.Mancharan",
   Official_No: "9444982690",
   Control_Room: "04562-252094",
   Name_of_the_coordinator:  "Dr.Sivakumar",
   Contact_No:"9488000262"
   }
   ]

   const details=a.map (detail =>  
    <tr>
        <th>{detail.S_no}</th>
        <th>{detail.District}</th>
        <th>{detail.Name_of_the_JDHS}</th>
        <th>{detail.Official_No}</th>
        <th>{detail.Control_Room}</th>
        <th>{detail.Name_of_the_coordinator}</th>
        <th>{detail.Contact_No}</th>
    </tr> )
      const [state, setstate] = useState("")
      console.log(state)
       
      const [dis, setdis] = useState([])
     
       
      var display = dis 
    //   ==  ? "true" : "false"
      console.log(display)
      
      var find = () =>{
        const str = state;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        console.log(str2);
        var dist = a.filter(diss => diss.District == str2)
        setdis(dist)
          console.log(state)
          console.log(dis)
      }
       var card = dis != 0 ?  <div className="containerc">
       <div className="cardc">
         
         <div className="front side">
           <h1 className="logoc">{dis[0].District}</h1>
         </div>
         
         <div className="back side">
            
         <h3 class="namec"><strong>Name_of_the_JDHS:</strong>{dis[0].Name_of_the_JDHS}
    
                </h3> 
                <h3 className="namec">
            
         <strong> Official_No: </strong>{dis[0].Official_No} 
                </h3>
                <h3 className="namec">
           
    
         <strong> Control_Room: </strong>  {dis[0].Control_Room}
    
                </h3>
                <h3 className="namec">
           
       <strong>Name_of_the_coordinator: </strong> {dis[0].Name_of_the_coordinator}
    
                </h3>
                <h3 className="namec">
           
            
          <strong>  Contact_No:</strong>  {dis[0].Contact_No}
                        </h3>
           <div></div>      
           <div className="infoc">
             <p><span className="property"> </span></p>
              
           </div>
         </div>
         
       </div>
     </div> : null
     console.log(dis.length)
      
  return (
    <div>
      <img className="contact-image" src="./images/Whom-to-contact-English.jpeg" alt="whom to contact"></img>
      <h4 className="heading">District Emergency Operations Center Contact Numbers</h4>
      

      <div>
      <div class="wrap1">
   <div class="search1">
      <input type="text" class="searchTerm1" placeholder="Search by District" onChange={(e)=>setstate(e.target.value)}></input>
      <button type="submit" class="searchButton1" onClick={find}>
      <svg className="search_icon1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg> 
     </button>
   </div>
</div>

        <table>
         {/* {details} */}
         </table>
          </div> 
          {card}
          <div className="nos"> 
    </div>

    
     <table className="tle">
     <tr className="rowh" >
         <th>S.no</th>
         <th>District</th>
         <th>Name of the JDHS</th>
         <th>Official No.</th>
         <th>Control Room</th>
         <th>Name of the coordinator</th>
         <th>Contact No.</th>
     </tr>
     <tr className="row1 ">
         <td>1.</td>
         <td>Ariyalur</td>
         <td>Dr.S.Selvaraj</td>
         <td>9444982674</td>
         <td>04329-228709</td>
         <td>Dr.Manikandan</td>
         <td>9943848250</td>
     </tr>
     <tr className="row2">
         <td>2.</td>
         <td>Chengalpattu</td>
         <td>Dr.E.Jeeva</td>
         <td>9444982667</td>
         <td>044-27427412</td>
         <td>Dr.Dhandapani</td>
         <td>9940013418</td>
     </tr>
     <tr className="row3">
         <td>3.</td>
         <td>Coimbatore</td>
         <td>Dr.P.Krishna</td>
         <td>9498027043</td>
         <td>0422-2306051 ,0422-2306052 ,0422-2306053</td>
         <td>Dr.M.Venkatesh</td>
         <td>9442348668</td>
     </tr>
     <tr className="row4">
         <td>4.</td>
         <td>Cuddalore</td>
         <td>Dr.P.N.Ramesh Babu</td>
         <td>9444982662</td>
         <td>04142-220700</td>
         <td>Dr.A.N.Parimelazhagan</td>
         <td>9444305528</td>
     </tr>
     <tr className="row5">
         <td>5.</td>
         <td>Dharmapuri</td>
         <td>Dr.K.Thilagam</td>
         <td>9444982663</td>
         <td>04342-231500</td>
         <td>Dr.S.Rajkumar</td>
         <td>9865533866</td>
     </tr></table>
     <p className="hint">***For more district contact numbers kindly search on searchbar.**</p>
     </div>
  )
}


{/* <table>
          <tr>
              <th>S.no</th>
              <th>District</th>
              <th>Name of the JDHS</th>
              <th>Official No.</th>
              <th>Control Room</th>
              <th>Name of the coordinator</th>
              <th>Contact No.</th>
          </tr>
          <tr>
              <td>1.</td>
              <td>Ariyalur</td>
              <td>Dr.S.Selvaraj</td>
              <td>9444982674</td>
              <td>04329-228709</td>
              <td>Dr.Manikandan</td>
              <td>9943848250</td>
          </tr>
          <tr>
              <td>2.</td>
              <td>Chengalpattu</td>
              <td>Dr.E.Jeeva</td>
              <td>9444982667</td>
              <td>044-27427412</td>
              <td>Dr.Dhandapani</td>
              <td>9940013418</td>
          </tr>
          <tr>
              <td>3.</td>
              <td>Coimbatore</td>
              <td>Dr.P.Krishna</td>
              <td>9498027043</td>
              <td>0422-2306051 ,0422-2306052 ,0422-2306053</td>
              <td>Dr.M.Venkatesh</td>
              <td>9442348668</td>
          </tr>
          <tr>
              <td>4.</td>
              <td>Cuddalore</td>
              <td>Dr.P.N.Ramesh Babu</td>
              <td>9444982662</td>
              <td>04142-220700</td>
              <td>Dr.A.N.Parimelazhagan</td>
              <td>9444305528</td>
          </tr>
          <tr>
              <td>5.</td>
              <td>Dharmapuri</td>
              <td>Dr.K.Thilagam</td>
              <td>9444982663</td>
              <td>04342-231500</td>
              <td>Dr.S.Rajkumar</td>
              <td>9865533866</td>
          </tr>
          <tr>
              <td>6.</td>
              <td>Dindigul</td>
              <td>Dr.R.Sivakumar</td>
              <td>9444982664</td>
              <td>0451-2460320</td>
              <td>Dr.Anitha</td>
              <td>9500627337</td>
          </tr>
          <tr>
              <td>7.</td>
              <td>Erode</td>
              <td>Dr.G.S.Gomathi</td>
              <td>9444982665</td>
              <td>0424-2260211</td>
              <td>Dr.R.Venkatesh</td>
              <td>7397625530</td>
          </tr>
          <tr>
              <td>8.</td>
              <td>Kallakurichy</td>
              <td>Dr.A.Shanmigakani</td>
              <td>9444982689</td>
              <td>04151-228801</td>
              <td>Dr.Raghunath</td>
              <td>9442248058</td>
          </tr>
          <tr>
              <td>9.</td>
              <td>Kancheepuram</td>
              <td>Dr.E.Jeeva</td>
              <td>9444982667</td>
              <td>044-27237107</td>
              <td>Dr.Dhandapani</td>
              <td>9940013418</td>
          </tr>
          <tr>
              <td>10.</td>
              <td>Kanniyakumari</td>
              <td>Dr.A.Pragalathan</td>
              <td>9444982668</td>
              <td>04342-231500</td>
              <td>Dr.S.Rajkumar</td>
              <td>9865533866</td>
          </tr>
          <tr>
              <td>11.</td>
              <td>Karur</td>
              <td>Dr.G.Gnankkan Prem Nawaz</td>
              <td>9444982669</td>
              <td>04342-256306</td>
              <td>Dr.Vijayapushpa</td>
              <td>8754151500</td>
          </tr>
          <tr>
              <td>12.</td>
              <td>Krishnagiri</td>
              <td>Dr.P.Paramasivam</td>
              <td>9444982670</td>
              <td>04343-233021</td>
              <td>Dr.P.SHanmugavel</td>
              <td>8012502981</td>
          </tr>
          <tr>
              <td>13.</td>
              <td>Madurai</td>
              <td>Dr.P.Venkatachalam</td>
              <td>9444982671</td>
              <td>0452-2530104</td>
              <td>Dr.Swamy</td>
              <td>8523929620</td>
          </tr>
          <tr>
              <td>14.</td>
              <td>Mayiladuthurai</td>
              <td>Dr.R.Mahendran(i/c)</td>
              <td>9444982672</td>
              <td>04364-222588</td>
              <td>Dr.R.Raja</td>
              <td>9965407980</td>
          </tr>
          <tr>
              <td>15.</td>
              <td>Nagapattinam</td>
              <td>Dr.R.Mahendran(i/c)</td>
              <td>9444982672</td>
              <td>04365-252593</td>
              <td>Dr.R.Raja</td>
              <td>9965407980</td>
          </tr>
          <tr>
              <td>16.</td>
              <td>Namakkal</td>
              <td>Dr.D.K.Chithra</td>
              <td>9444982673</td>
              <td>04286-281377</td>
              <td>Dr.Venkateshan</td>
              <td>9443471667</td>
          </tr>
          <tr>
              <td>17.</td>
              <td>Perambalur</td>
              <td>Dr.S.Selvaraj</td>
              <td>9444982674</td>
              <td>04328-1077</td>
              <td>Dr.Manikandan</td>
              <td>9943848250</td>
          </tr>
          <tr>
              <td>18.</td>
              <td>Pudukottai</td>
              <td>Dr.K.Ramu</td>
              <td>9444982675</td>
              <td>04322-222207</td>
              <td>Dr.Saravanan</td>
              <td>9095240592</td>
          </tr>
          <tr>
              <td>19.</td>
              <td>Ramanathapuram</td>
              <td>Dr.A.Sakaya Stephenraj</td>
              <td>9444982676</td>
              <td>04567-230060</td>
              <td>Dr.Muthileswaran</td>
              <td>9789804212</td>
          </tr>
          <tr>
              <td>20.</td>
              <td>Ranipet</td>
              <td>Dr.i.Yasmin</td>
              <td>9444982688</td>
              <td>04172-273188</td>
              <td>Dr.Ramya</td>
              <td>9751474818</td>
          </tr>
          <tr>
              <td>21.</td>
              <td>Salem</td>
              <td>Dr.R.Malarvizhi Vallai</td>
              <td>9444982677</td>
              <td>0427-2452202</td>
              <td>Dr.Ramesh Kumar</td>
              <td>9894877720</td>
          </tr>
          <tr>
              <td>22.</td>
              <td>Sivaganga</td>
              <td>Dr.Illango Maheswaran</td>
              <td>9444982678</td>
              <td>04575-246233</td>
              <td>Dr.Kishore Kumar</td>
              <td>9488232918</td>
          </tr>
          <tr>
              <td>23.</td>
              <td>Tanjore</td>
              <td>Dr.P.Baskaran</td>
              <td>9444982679</td>
              <td>04362-230121</td>
              <td>Dr.Arul Selvan</td>
              <td>9442206774</td>
          </tr>
          <tr>
              <td>24.</td>
              <td>Tenkasi</td>
              <td>Dr.K.Nedumaran</td>
              <td>9444982683</td>
              <td>04546-261093</td>
              <td>Dr.Karthick Arivudainambi</td>
              <td>9884356582</td>
          </tr>
          <tr>
              <td>25.</td>
              <td>The Nilgiris</td>
              <td>Dr.S.Palanisamy</td>
              <td>9444982680</td>
              <td>0423-2450034</td>
              <td>Dr.L.Subramanian</td>
              <td>9944039060</td>
          </tr>
          <tr>
              <td>26.</td>
              <td>Theni</td>
              <td>Dr.Lakshmanan</td>
              <td>9444982681</td>
              <td>04546-261093</td>
              <td>Dr.Ramkumar</td>
              <td>9894521826</td>
          </tr>
          <tr>
              <td>27.</td>
              <td>Thirupathur</td>
              <td>Dr.I.Yashmin</td>
              <td>9444982688</td>
              <td>04179-222111</td>
              <td>Dr.Ramya</td>
              <td>9751474818</td>
          </tr>
          <tr>
              <td>28.</td>
              <td>Thiruppur</td>
              <td>Dr.T.K.Bhaghyalakshmi</td>
              <td>9444982661</td>
              <td>0421-2971133</td>
              <td>Dr.Marimuthy</td>
              <td>9942486422</td>
          </tr>
          <tr>
              <td>29.</td>
              <td>Thoothukudi</td>
              <td>Dr.M.Murugavel</td>
              <td>9444982682</td>
              <td>0461-2340101</td>
              <td>Dr.Hemalatha</td>
              <td>9600957829</td>
          </tr>
          <tr>
              <td>30.</td>
              <td>Tirunelveli</td>
              <td>Dr.K.Nedumaran</td>
              <td>9444982683</td>
              <td>0462-2501070</td>
              <td>Dr.Karthick Arivudainambi</td>
              <td>9884356582</td>
          </tr>
          <tr>
              <td>31.</td>
              <td>Tiruvallur</td>
              <td>Dr.D.Rani</td>
              <td>9444982684</td>
              <td>044-27666746</td>
              <td>Dr.Feroz</td>
              <td>9566115409</td>
          </tr>
          <tr>
              <td>32.</td>
              <td>Tiruvannamalai</td>
              <td>Dr.M.Kannagi</td>
              <td>9444982685</td>
              <td>04175-233344</td>
              <td>Dr.S.Chowdary</td>
              <td>9443474128</td>
          </tr>
          <tr>
              <td>33.</td>
              <td>Tiruvarur</td>
              <td>Dr.J.Rajamoorthi</td>
              <td>9444982686</td>
              <td>04366-226623</td>
              <td>Dr.Arvindsamy</td>
              <td>8940430034</td>
          </tr>
          <tr>
              <td>34.</td>
              <td>Trichy</td>
              <td>Dr.S.Lakshmi</td>
              <td>9444982687</td>
              <td>0431-2418995</td>
              <td>Dr.Gnanasekaran Muthukumar</td>
              <td>9600901904</td>
          </tr>
          <tr>
              <td>35.</td>
              <td>Vellore</td>
              <td>Dr.I.Yasmin</td>
              <td>9444982688</td>
              <td>0416-2226016</td>
              <td>Dr.Ramya</td>
              <td>9751474818</td>
          </tr>
          <tr>
              <td>36.</td>
              <td>Villupuram</td>
              <td>Dr.A.Shamigakani</td>
              <td>9444982689</td>
              <td>04146-223265</td>
              <td>Dr.Raghunath</td>
              <td>9442248058</td>
          </tr>
          <tr>
              <td>37.</td>
              <td>Virudhunagar</td>
              <td>Dr.M.Mancharan</td>
              <td>9444982690</td>
              <td>04562-252094</td>
              <td>Dr.Sivakumar</td>
              <td>9488000262</td>
          </tr>
      </table> */}