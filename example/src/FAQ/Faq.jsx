import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
const Faq = () => {
    const [visible1, setVisible1] = useState(false);
        const [visible2, setVisible2] = useState(false);
        const [visible3, setVisible3] = useState(false);
    
        useEffect(() => {
            const answer = document.getElementById('content1');
            if (answer) {
                answer.style.display = visible1 ? 'block' : 'none';
            }
        }, [visible1]);
    
        useEffect(() => {
            const answer2 = document.getElementById('content2');
            if (answer2) {
                answer2.style.display = visible2 ? 'block' : 'none';
            }
        }, [visible2]);

        useEffect(() => {
            const answer3 = document.getElementById('content3');
            if (answer3) {
                answer3.style.display = visible3 ? 'block' : 'none';
            }
        }, [visible3]);
    
        const handleButtonClick1 = () => {
            setVisible1(prevVisible => !prevVisible);
        };
    
        const handleButtonClick2 = () => {
            setVisible2(prevVisible => !prevVisible);
        };
        const handleButtonClick3 = () => {
            setVisible3(prevVisible => !prevVisible);
        };

        
    
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '30px'}}>Frequently Asked Questions</h1>
            <div className="questions">
                <div className="dropDown">
                    <p className="question" onClick={handleButtonClick1}> How long does the delivery take? </p>
                <div className="dropdownContent" id="content1">
                    <p>It takes a maximum of two days for delivery within Nigeria and 5 days - 1 week for delivery outside Nigeria</p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question" onClick={handleButtonClick2} > Do you deliver to doorstep? </p>
                <div className="dropdownContent" id="content2">
                    <p>We are glad to let you know that our delivery comes in two types depending on your choice. we deliver to doorstep and also we deliver to the nearest bus stop of your choice </p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question" onClick={handleButtonClick3}> Are there sizes for kids on all your products? </p>
                <div className="dropdownContent" id="content3">
                    <p>Yes absolutely. All our products are available in all sizes for both young and old </p>
                </div>
                </div>
            </div>

            <Footer/>
            
        </>
    );
}
export default Faq;


