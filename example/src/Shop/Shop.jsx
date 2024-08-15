import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa';
import Footer from "../Footer/Footer";
import { useEffect } from "react";
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

     

     useEffect(() => {
        const handleSearch = () => {
          const input = document.getElementById('myInput');
          const filter = input.value.toUpperCase();
          const ul = document.getElementById('myUl');
          const li = ul.getElementsByTagName('li');
    
          for (let i = 0; i < li.length; i++) {
            const link = li[i].getElementsByTagName('a')[0] || li[i].getElementsByTagName('Link')[0];
            const textValue = link.textContent || link.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = '';
            } else {
              li[i].style.display = 'none';
            }
          }
        };
    
        const input = document.getElementById('myInput');
        input.addEventListener('keyup', handleSearch);
    
        return () => {
          input.removeEventListener('keyup', handleSearch);
        };
      }, []);


    return (
        <>
        <div style={shop}>
            <p style={{fontSize:'0.9rem'}}>Explore All The Items In Our Shop </p> 
            <p style={{fontFamily:'fantasy', fontSize:'20px', marginTop:'5px'}}>Current Shop Stock</p> <br/>
            <form>
                <input type="text" placeholder="search product..." id="myInput"/> <FaSearch />
                </form>
                </div>
                <section className="new-products">
            <div className="newProducts" id="myUl">
            <li>
            
            <br /> <br />
                 <img src="/public/hf.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>High Fashion</p> 
                <p className="price">$9000</p>
            </li>
            <li>
            <br /> <br />
                <img src="/public/green joggers.JPG" style={productsImages}></img>  
                <p className="productName" style={{fontSize: '13.8px'}}>Joggers</p>
                <p className="price">$6000</p>
            </li>
            <li>
            <br /> <br />
                 <img src="/public/armless.JPG" style={productsImages}></img>
                <p className="productName" style={{fontSize: '13.8px'}}>Armless</p>
                <p className="price">$2000</p>
            </li>
            <li>
            <br /> <br />
                 <img src="/public/white vintage.JPG" style={productsImages}></img>  
                <p className="productName" style={{fontSize: '13.8px'}}>Vintage</p>
                <p className="price">$1000</p>
            </li>
            <li>
                <br/> <br />
                <img src="/public/jeans up and down.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper jeans</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                 <img src="/public/TTIO8506.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            <li>
                <br/> <br />
                 <img src="/public/PGGY2062.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}> Chrome Combat Short</p>
                <p className="price">$4000</p>
            </li>
            <li>
                <br/> <br />
                <img src="/public/LXLK6631.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>High Quality Stylish</p>
                <p className="price">$3000</p>
            </li>
            <li>
                <br/> <br />
                <img src="/public/KVJJ2447.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper Joggers</p>
                <p className="price">$8000</p>
            </li>
            <li>
                <br/> <br />
                 <img src="/public/women jeans.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>Chrome Combat jeans</p>
                <p className="price">$2000</p>
            </li>
            <li>
                <br/> <br />
                <img src="/public/black armless.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
            </li>
            <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/pink crocs.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13'}}>Crocs</p>
                <p className="price">$800</p>
                </Link>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/loaffers.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13'}}>Loafers</p>
                <p className="price">$600</p>
                </Link>
                </li>
                <li> <br /> <br />
                <Link to="/shop" className="link ">
                 <img src="/public/monk strap.JPG" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13'}}>Monk Strap</p>
                <p className="price">$400</p>
                </Link>
                </li>
            </div>
            </section> <br />
            <Footer/>
            
        </>
    );
}
export default Shop;