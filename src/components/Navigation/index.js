import React from "react";
import "./style.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"


const Navigation = ({
  whatsapp,
  github,
  linkedin
}) => {
  return (
    <section className="navigation">
      <div className="float">
        <a className="link" href={`https://api.whatsapp.com/send?phone=5511959031882&text=Entre%20em%20contato%20para%20agendar%20uma%20entrevista%20%3B)%20`}>
          <div className="icone">
        <FontAwesomeIcon icon={faWhatsapp}> </FontAwesomeIcon>
         </div>
          <span className="text">Whatsapp</span>
        </a>
        <a className="link" href={`https://github.com/natalia-tavares`}>
        <div className="icone">
        <FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon>
        </div>
          <span className="text">GitHub</span>
        </a>
        <a className="link" href={`https://www.linkedin.com/in/natalia-tavares-/`}>
        <div className="icone">
        <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>
        </div>
          <span className="text">Linkedin</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;