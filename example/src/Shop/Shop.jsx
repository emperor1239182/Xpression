import { Link } from "react-router-dom"
import {FaSearch} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt} from '@fortawesome/free-solid-svg-icons'
const Shop = () => {

    
     const productsImages = {
        border: '1px solid grey',
        borderRadius: '4px',
        width: '150px',
        height: '33vh',
        
     }
     const shop = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px auto',
        padding: '25px',
        width: '80%',
        backgroundColor: 'rgb(164, 227, 227, 0.4)'

     }
     


    return (
        <>
        <div style={shop}>
            <p style={{fontSize:'0.9rem'}}>Explore All The Items In Our Shop </p> 
            <p style={{fontFamily:'fantasy', fontSize:'20px', marginTop:'5px'}}>Current Shop Stock</p> <br/>
            <form>
                <input type="text" placeholder="search product..." /> <FaSearch />
                </form>
                </div>
                <section className="new-products">
            <div className="newProducts">
            <li>
            
            <br /> <br />
                <Link to="/skirt" className='link'> <img src="/public/hf.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Fashion</p> 
                <p className="price">$9000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/buy" className='link'> <img src="/public/green joggers.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Joggers</p>
                <p className="price">$6000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/buy" className='link'> <img src="/public/armless.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Armless</p>
                <p className="price">$2000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/buy" className='link'> <img src="/public/white vintage.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Vintage</p>
                <p className="price">$1000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/jeans up and down.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper jeans</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/TTIO8506.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/PGGY2062.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}> Chrome Combat Short</p>
                <p className="price">$4000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/LXLK6631.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Quality Stylish</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/KVJJ2447.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper Joggers</p>
                <p className="price">$8000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/women jeans.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Chrome Combat jeans</p>
                <p className="price">$2000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/buy" className="link "> <img src="/public/black armless.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            </div>
            </section> <br />

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
export default Shop;