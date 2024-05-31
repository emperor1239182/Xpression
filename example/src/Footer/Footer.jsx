import { faShirt} from '@fortawesome/free-solid-svg-icons'
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
const Footer = () =>{
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const hour = time.getHours();
  const minute = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const name = hour < 12 ? 'AM' : 'PM';
    

    

    return(
        <>
<section className="footer">
                <footer className="closing">
                  <div>
                <p style={{fontSize:'20px'}}>Xpression <FontAwesomeIcon icon={faShirt} />  
                <span className='time' >{hour} : {minute} : {seconds} {name}</span>
                </p>   
                <br/> 
                    <span style={{display:'flex', justifyContent:'space-between', width:'100px', marginBottom:'10px'}}>
                    <FaFacebook size={15}  />
                     <FaTwitter size={15}/>
                     <FaInstagram size={15}/>
                     </span>
                     <p>Countries</p>
                     <p>Regions</p>
                     <p>Cities</p>
                     <p>Districts</p>
                     <p>Airpots</p>
                     <p>Hotels</p>
                     </div>
                     
                     <div style={{marginTop:'21px'}}>
                        <br /> <br /> <br />
                        <Link to='/home' className="link" style={{color:'white'}}>Home</Link>
                        <p>Apartments</p>
                        <p>Resorts</p>
                        <p>Villas</p>
                        <p>Hotels</p>
                        <p>Guest houses</p>
                     </div>
                     <div style={{marginTop:'28px'}}>
                     <br /> <br/>
                        <p>Unique places to stay</p>
                        <p>Reviews</p>
                        <p>Travel communities</p>
                        <p>Seasonal and holiday deals</p>
                     </div>
                     <div style={{marginTop:'28px'}}>
                     <br /> <br/>
                        <p>Car render</p>
                        <p>Flight finder</p>
                        <p>Restaurant reservations</p>
                        <p>Travel agents</p>
                     </div>
                     <p style={{marginTop:'50px', fontFamily:'fantasy', fontSize:'0.8rem'}}>Copyright <FaTrademark/> 2023 Emperor </p>
                </footer>
            </section>
            </>
    );
}
 export default Footer;