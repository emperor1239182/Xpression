import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
import {  faShirt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Contact = () => {
    const contact = {
        backgroundColor: 'rgb(233, 230, 230)',
        
        width: '100%',
        margin: 'auto auto',
        textAlign: 'center',
        padding: '14px'
    }
    return (
        <>
        <div style={contact}>
            <h1>Contact Us</h1>
            <p>Get in touch with us on various platforms</p>
            <img src='/public/jeans jacket.JPG' style={{width:'300px', height:'400px', marginTop:'10px'}}/>
            <p> Facebook <FaFacebook size={15}  /> : @Xpression </p>
            <p> Twitter <FaTwitter size={15}/> : @Xpression2526 </p>
            <p> Instagram <FaInstagram size={15}/> : @Xpression002 </p>
            <p>tel: +1 565 775 342</p>
        </div>
        <section className="footer">
                <footer className="closing">
                    <div>
                <p style={{fontSize:'20px'}}>Xpression <FontAwesomeIcon icon={faShirt} /> </p> <br />
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
export default Contact;