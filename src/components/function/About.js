import React from 'react'
import './About.css'
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="entire">
       <h1 className="title">About Corona Virus</h1>
      <p className="text">Corona viruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).

Corona virus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.

Corona viruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known corona viruses are circulating in animals that have not yet infected humans.

Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.

AboutCorona virusContent5″>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.

On this website you can find information, guidance, preventive mechanisms taken by Tamil Nadu Government and current outbreak of corona virus disease (COVID-19) to be reported. Please visit this page for daily updates. Source:WHO</p>

    
<h4 className="external">Covid-19 External Links</h4>
<div className="links"><a href="http://covidindiaupdates.in/">1.Covid-19 Indian Dashboard</a></div>
<div className="links"><a href="https://healthmap.org/formobile/">2.Health Map</a></div>
<div className="links"><a href="https://hgis.uw.edu/virus/">3.Interactive Infection Map</a></div>
<div className="linkfour"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">4.Situation Dashboard</a></div>
<div>

     <ul className="sci">
       <li><Link to="/facebook" className="fa fa-facebook" ></Link></li>
       <li><Link to="/instagram"  className="fa fa-instagram"> </Link></li>
       <li><Link to="/github"  className="fa fa-github" > </Link></li>
       <li><Link to="/twitter"  className="fa fa-twitter" > </Link></li>
       <li><Link to="/whatsapp" className="fa fa-whatsapp" ></Link></li>
     </ul>
     </div> 
    </div>
  )
}
/*<a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></a> */
     
/*<i class="fa fa-facebook-official" aria-hidden="true"></i>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/


/*<div>
    <div className="container">
      <div className="card">
        <div className="imgbox">
          <img src='./images/corona.jpeg' alt=""></img>
        </div>
        <div className="details">
       <h3>About Corona Virus</h3>
      <p className="text">Corona viruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).

Corona virus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.

Corona viruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known corona viruses are circulating in animals that have not yet infected humans.

Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.

AboutCorona virusContent5″>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.

On this website you can find information, guidance, preventive mechanisms taken by Tamil Nadu Government and current outbreak of corona virus disease (COVID-19) to be reported. Please visit this page for daily updates. Source:WHO</p>
</div>
  </div>
  </div>*/