import Footer from "../Footer/Footer";
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
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
        <Footer/>
        </>
    );
}
export default Contact;