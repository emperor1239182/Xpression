import { Link } from "react-router-dom"
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
const Faq = () => {
    const [visible, setVisible] = useState([false, false]);
    useEffect(()=>{
        const answer = [document.getElementById('content1'),
            document.getElementById('content2')
        ];
        answer.forEach(element => {
            if(element){
                element.style.display = visible? 'none' : 'block'
            }
        });
        
    }, [visible] );

    const handleButtonClick = () =>{
        setVisible(prevStates =>
            !prevStates
        );
    }
    
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '30px'}}>Frequently Asked Questions</h1>
            <div className="questions">
                <div className="dropDown">
                    <p className="question" onClick={handleButtonClick}> How long does the delivery take? </p>
                <div className="dropdownContent" id="content1">
                    <p>It takes a maximum of two days for delivery within Nigeria and 5 days - 1 week for delivery outside Nigeria</p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question"  > Do you deliver to doorstep? </p>
                <div className="dropdownContent" id="content2">
                    <p>We are glad to let you know that our delivery comes in two types depending on your choice. we deliver to doorstep and also we deliver to the nearest bus stop of your choice </p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question" > Are there sizes for kids on all your products? </p>
                <div className="dropdownContent" id="content3">
                    <p>Yes absolutely. All our products are available in all sizes for both young and old </p>
                </div>
                </div>
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
export default Faq;


