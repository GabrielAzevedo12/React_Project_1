//import logo from './logo.svg';
import './css/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <div className="Footer center flex-column style_template_1">
      <div className="Footer_lista flex-row flex-wrap center">
        <div className="Footer_item">
          <FaFacebook/>
        </div>
        <div className="Footer_item">
          <FaInstagram/>
        </div>
        <div className="Footer_item">
          <FaLinkedin/>
        </div>
      </div>
      <div className='Footer_text'>
        <span>Costs</span> &copy; 2021
      </div>
    </div>
  );
}

export default Footer;
