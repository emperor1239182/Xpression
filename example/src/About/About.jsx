import { faShirt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
    const about = {
        display: 'block',
        fontSize: '1rem',
        fontFamily: 'Cambria, Cochin, Georgia, Times, serif'
    }
    



    return (
        <>
        <div style={about} className='row'>
        <h2 style={{textAlign:'center', margin:'10px'}}>About Us</h2>
            <div className='col-7'>
            
            <p>At Xpression we bring to you the home of quality, luxurious and affordable clothing. <br/>
            Our products aren't limited to the Luxury lovers alone.. Are you a fashionista? Xpression is the best place for you to get any kind of fashion clothing of your choice. <br />
            We aren't just about your clothes alone, we are also concerned about the most fancy footwear to give you a complete outstanding outfit <br />
            We've got you outfits for all seasons, occassion, outing... wanna go on a date with your loved ones? we got you covered <br />
            </p>
            </div>
            <div className='col-5'>
            <img src="/public/swag.JPG" style={{width:'300px', height:'400px', marginTop:'10px'}}/>
            </div>
        </div>
        <p style={{textAlign:'center'}}>With over 20,000 delivery nationwide, we are across over 7 countries nationwide (South Africa, Nigeria, United States, Japan, France, Italy, Russia )</p> <br />
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
export default About;