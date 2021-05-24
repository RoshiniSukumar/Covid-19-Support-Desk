import React from 'react'
import './Exlinks.css'
import { Link } from "react-router-dom"
<script src="https://kit.fontawesome.com/0c9450273d.js" crossorigin="anonymous"></script>


export default function Exlinks() {
  return (
     <div>
  <h3 className="external">Covid-19 External Links</h3>
  
<div className="links"><a href="http://covidindiaupdates.in/">1.Covid-19 Indian Dashboard</a></div>
<div className="links"><a href="https://healthmap.org/formobile/">2.Health Map</a></div>
<div className="links"><a href="https://hgis.uw.edu/virus/">3.Interactive Infection Map</a></div>
<div className="linkfour"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">4.Situation Dashboard</a></div>
<div> 
<ul className="sci">
       <li><a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
       <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
       <li><a href="#"><i class="fab fa-github" aria-hidden="true"></i></a></li>
       <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
       <li><a href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
     </ul>
    </div>
     
    </div>
     
    
  );
}

/*<div> 
     <ul className="sci">
       <li><Link to="/facebook" className="fa fa-facebook" ></Link></li>
       <li><Link to="/instagram"  className="fa fa-instagram"> </Link></li>
       <li><Link to="/github"  className="fa fa-github" > </Link></li>
       <li><Link to="/twitter"  className="fa fa-twitter" > </Link></li>
       <li><Link to="/whatsapp" className="fa fa-whatsapp" ></Link></li>
     </ul>
    </div>*/