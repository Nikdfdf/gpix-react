import React from 'react';

import { Link } from 'react-router-dom';

import './socialLinks.scss';

import instApp from "../../assets/img/inst.svg";
import okApp from "../../assets/img/ok.svg";
import fbApp from "../../assets/img/fb.svg";
import vkApp from "../../assets/img/vk.svg";

const SocialLinks = () => {
  return (
    <div>
      <Link className="footer__social-link" to="#">
        <img className="footer__social-img" src={okApp} alt="Ссылка на одноклассники"/>
      </Link>
      <Link className="footer__social-link" to="#">
        <img className="footer__social-img" src={fbApp} alt="Ссылка на фейсбук"/>
      </Link>
      <Link className="footer__social-link" to="#">
        <img className="footer__social-img" src={vkApp} alt="Ссылка на вконтакте"/>
      </Link>
      <Link className="footer__social-link" to="#">
        <img className="footer__social-img" src={instApp} alt="Ссылка на инстаграм"/>
      </Link>
    </div>
  )
}

export default SocialLinks;