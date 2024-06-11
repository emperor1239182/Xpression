import Footer from "../Footer/Footer";
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
        <p style={{textAlign:'center'}}>With over 20,000 delivery nationwide, we are across over 7 countries worldwide (South Africa, Nigeria, United States, Japan, France, Italy, Russia )</p> <br />
        <Footer/>
        </>
    );
}
export default About;