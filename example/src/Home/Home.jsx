import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faShirt} from '@fortawesome/free-solid-svg-icons'
import {FaFacebook, FaTwitter, FaInstagram, FaTrademark} from 'react-icons/fa'
const Home = () => {
    // style for the image slider and texts
    const Imag = {
        width: '100%',
         height: '80vh',
         objectFit: 'fill'
     }
     const ImgTexts = {
         color: '#453437d7',
         fontWeight: '900',
         fontSize: '1rem',
         marginBottom: '20px'
     } 

     // style for the products images
     
     const Samples = {
        display: 'flex',
        justifyContent: 'center'
    
     }
     const productsImages = {
        border: '1px solid grey',
        width: '150px',
        height: '33vh'
     }

     //style for the info
     const info = {
        textAlign: 'center'
     }
     const notification = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(233, 230, 230)',
        padding: '20px'
     }
     
     

    // function for the image slider
    const [currentImage, setCurrent] = useState(0); // products
    const [run, setRun] = useState(0); // reviews

//products
   const images = [{image: '/public/blue cargo pant.JPG', text: 'Zipper Leather Pant'}, 
    {image: '/public/jeans multi pocket.JPG', text: 'Chrome Combat'}, 
    {image: '/public/jeans up and down.JPG', text: 'High Quality Double '}, 
    {image: '/public/hf.JPG', text: 'High Fashion '}, 
    {image: '/public/swag.JPG', text: 'Double Stitched Chrome Pant'}, 
    {image: '/public/up and down.JPG', text: 'Quality Highfashion Two Pieces'} 
];

//reviews
const clients = [{pic: '/public/Canadian.JPG', text: 'First time patronizing this brand and I dont regret it' },
{pic: '/public/Baddie 2.JPG', text: 'I got exactly what I ordered'},
{pic: '/public/baddie.JPG', text: 'I love this brand, very friendly'}
];

useEffect (() => {
    const interval = setInterval(() => {
        setCurrent((c) => (c + 1) % images.length);
        
    }, 3000);

    return () => {
        clearInterval(interval);
    };
   }, [images.length]);

    return (
        <>
            <div className="slider">
                <img src={images[currentImage].image}  style={Imag}/>
                <p className="texts" style={ImgTexts}> {images[currentImage].text} </p>

    </div>
    <div className="samples" style={Samples}>
            <div className="items">
        <br /> 
            <li>
            <h4>New Products</h4>
            <br /> 
                <Link to="/shop" className='link'> <img src="/public/leather skirt.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Leather Skirt</p> 
                <p className="price">$400</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/jeans jacket.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Jeans Jacket</p>
                <p className="price">$6000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/Blue hoodie.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Blue Hoodie</p>
                <p className="price">$8000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/mickey mouse.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Mickey Mouse</p>
                <p className="price">$1000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/short.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Short Combat Pant</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/brown jacket.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Brown Jacket</p>
                <p className="price">$700</p>
            </li>
            </div>
            </div>
            <br /> <br /> <br /> <br />

            <section className="new-products">
            <div className="newProducts">
            <li>
            <h4>Popular Products</h4>
            <br /> 
                <Link to="/shop" className='link'> <img src="/public/hf.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Fashion</p> 
                <p className="price">$9000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/green joggers.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Joggers</p>
                <p className="price">$6000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/armless.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Armless</p>
                <p className="price">$2000</p>
            </li>
            <li>
            <br /> <br />
                <Link to="/shop" className='link'> <img src="/public/white vintage.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Vintage</p>
                <p className="price">$1000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/jeans up and down.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper jeans</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/TTIO8506.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/PGGY2062.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}> Chrome Combat Short</p>
                <p className="price">$4000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/LXLK6631.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Quality Stylish</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/KVJJ2447.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper Joggers</p>
                <p className="price">$8000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/women jeans.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Chrome Combat jeans</p>
                <p className="price">$2000</p>
            </li>
            <li>
                <br/> <br />
                <Link to="/shop" className="link "> <img src="/public/black armless.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            </div>
            </section>  <br /> <br />   <br /> 

            <section className="hoodiesCollection">
            <div className='hoodies'> <br />
            <h4>Top Sweater Collection</h4> <br /> <br /> 
                <div className="collections">
            <li>
             <img src="/public/crochet sweater.WEBP" className='sweater' style={productsImages}></img> 
            <p className="productName" style={{fontSize: '13px'}}>Crochet Sweater </p>
            <p className="productName" style={{fontSize: '13px'}}>Crochet sweater collection just for you</p>
                <Link to="/shop" className="linK ">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                <li>
                 <img src="/public/Blue hoodie.JPG" className="sweater" style={productsImages}></img>  
                <p className="productName" style={{fontSize: '13px'}}>Blue Hoodie</p>
                <p className="productName" style={{fontSize: '13px'}}>Blue hoodie collection, peerfect for gifting </p>
                <Link to="/shop" className="link">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                <li>
                 <img src="/public/green sweater.JPG" className="sweater" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13'}}>Green Sweater</p>
                <p className="productName" style={{fontSize: '13px'}}>Lovely winter collection just for you </p>
                <Link to="/shop" className="link ">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                </div>
            </div> 
            </section><br /> <br />

            <section className="Combat-Pants">
            <h4 style={{textAlign: 'center'}}>Combat Pants Collection</h4> <br /> <br />
            <div className="combatPants" style={Samples}>
                <div className="pants">
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/blue cargo pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Blue Combat Pant</p>
                <p className="price">$700</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/brown cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Cargo Pant</p>
                <p className="price">$6000</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/quality combat pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Luxury Cobant Pant</p>
                <p className="price">$3000</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/slim fit cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Perfect Fit</p>
                <p className="price">$1300</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/white rope cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>High Fashion</p>
                <p className="price">$2500</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/white jorgas.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Jorgas</p>
                <p className="price">$5000</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/swag.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Two Piece</p>
                <p className="price">$800</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/ash joggers.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Zip UP Pant</p>
                <p className="price">$1000</p>
                </li>
                <li>
                <Link to="/shop" className="link ">
                 <img src="/public/blue cargo pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Cargo Pant</p>
                <p className="price">$12000</p>
                </li>
                </div>
            </div>
            </section> <br /> <br />

            <section className="shoes-Collection">
                <div className="newProducts">
                    <li>
                    <h4 >Shoes Collection</h4> <br /> 
                <Link to="/shop" className="link ">
                 <img src="/public/High fashion mixed loafers.JPG"  style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Mixed Loafers</p>
                <p className="price">$6000</p>
                </li> 
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/female.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Jeans Made sandals</p>
                <p className="price">$1000</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/Derby.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Derby</p>
                <p className="price">$3000</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/Loafers.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Loafers</p>
                <p className="price">$1000</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/oxford sshoe.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>All Black Oxford</p>
                <p className="price">$2500</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/pink crocs.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Crocs</p>
                <p className="price">$8000</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/loaffers.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Loafers</p>
                <p className="price">$1600</p>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/monk strap.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Monk Strap</p>
                <p className="price">$4000</p>
                </li>
                </div>
            </section>

            <section className="stylying">
                <div className="beauty">
                    <h4 >Come And Let Us Style You</h4>
                    <p>get in touch with us today</p>
                    <p>explore our shop</p> <br />
                    <Link to="/shop" className="link shopLink">shop</Link>
                </div>
            </section> <br /> <br />

            <section className="Reviews">
                <div className="review">
                    <p style={{textAlign: 'center', fontSize: '0.95rem', fontWeight: 'bolder'}}>Check Out What Our Top Customers And Friends Say About Us</p> <br />
                    <div className="rev">
                    <img src={clients[run].pic} className="Cl-pics"/>
                    <p className="texts" style={ImgTexts}> {clients[run].text} </p>
                    <button onClick={() => setRun((t) => (t - 1 + clients.length) % clients.length )} className="buttonLeft"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> </button>
                    <button onClick={() => setRun((t) => (t + 1) % clients.length )} className="buttonRight"> <FontAwesomeIcon icon={faArrowAltCircleRight } /> </button>
                    </div>
                </div> 
            </section> <br /> <br />

            <section className="ask">
                <div className="info" style={info}>
                    <p style={{fontFamily:'monospace', fontSize:'1.3rem', marginBottom:'12px'}}>HAVE ANY QUESTIONS YOU WANT TO ASK US?</p> 
                    <Link to='/shop' className="link">Read our frequently asked questions here <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                </div>
            </section> <br />

            <section className="getNotified" style={notification}>
                <div className="notification" style={{width: '300px', margin:'20px', textAlign:'center'}} >
                    <p style={{fontSize:'1.3rem', fontFamily:'cursive', marginBottom:'10px'}}>Want To Receive Notification In Real Time For Our Latest Products?</p>
                    <p style={{fontSize:'0.85rem', marginBottom:'10px'}}>Get Instant Alert And Be The First Person TO Know When New Items Drop</p>
                    <form style={{display:'flex', justifyContent:'space-evenly'}}>
                        <input type="email" placeholder="enter email" style={{height:'30px', borderRadius:'3px'}}/>
                        <input type="submit" style={{backgroundColor:'black', color:'white', width:'100px'}}/>
                    </form>
                </div>
            </section>

            <section className="banking">
        <div className="card">
            <h3 className="bank">UBA</h3>
            <div className="details">
            <div className="side">
              <img src='/public/chip.JPG' style={{width:'30px', height:'auto'}} />
              <h5 className="card-numbers">0000 0000 0000 </h5>
              <span className="validity">Valid</span>  <span className="validity">10/40</span> <br />
              <span className="name validity">Jhon Doe</span>
            </div>
              <span className="design orange"></span> <span className="design red"></span>
            </div>
        </div>
        <p style={{textAlign:'center', backgroundColor:'ThreeDLightShadow', width:'200px'}}><Link to='/shop'>Shop With Your Card </Link> </p>
            </section>

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
    )
}
export default Home;