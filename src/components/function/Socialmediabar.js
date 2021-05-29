import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
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
    </div>
  );
}
