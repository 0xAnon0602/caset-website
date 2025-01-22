import '../css/Footer.css'
import { SiLinkedin } from "react-icons/si";

function Footer() {
    return (
  
        <div className="footer">

            <div className="contactDiv">
                <div className="contact">
                    <p className="contactTitle">Contact</p>
                    <p>
                        Professor in Charge <br />
                        Department of Chemical Engineering <br />
                        BITS Pilani K K Birla Goa Campus <br />
                        NH 17B, Bypass, Road, Zuarinagar <br />
                        Sancoale, Goa 403726
                    </p>
                </div>

                {/* <div className="email">
                    <p className="contactTitle">Email</p>
                    <p>arcset.energy@goa.bits-pilani.ac.in</p>
                </div> */}
            </div>

            <div className="social">
                <p className="contactTitle">Created And Maintained</p>
                <p> 
                    <a className="link" href="https://www.linkedin.com/in/0xanon0602/" target="_blank"> Utkarsh Singh 
                        <SiLinkedin  style={{"marginLeft":"4px"}} size={15}/>
                    </a>
                    <br/>
                    <a className="link" href="https://www.linkedin.com/in/deept-ratna-2b5747256/" target="_blank"> Deept Ratna 
                    <   SiLinkedin  style={{"marginLeft":"4px"}} size={15}/>
                    </a>
                </p>
            </div>


            <div className="other">
                <p className="contactTitle">Connect With Us </p>
                <p>arcset.energy@goa.bits-pilani.ac.in</p>
                {/* <div className='socialLogo'>
                    <SiLinkedin  size={18}/>
                </div> */}
            </div>


        </div>

        
    );
}
  
  export default Footer;