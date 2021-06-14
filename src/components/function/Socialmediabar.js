import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import './Socialmediabar.css'

export default function Socialmediabar() {
  return (
    <div className="social-container">
       
      <a
        href="https://www.google.com"
        className="google social"
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.whatsapp.com"
        className="whatsapp social"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cdesk006@gmail.com"  
        className="gmail1"
      >
      <svg className="gmail" width="70px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg>
      <p className="myinfo"> &emsp;cdesk006@gmail.com</p></a>
    </div>
  );
}
