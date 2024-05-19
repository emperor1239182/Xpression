const Faq = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '30px'}}>Frequently Asked Questions</h1>
            <div className="questions">
                <div className="dropDown">
                    <p className="question"> How long does the delivery take? </p>
                <div className="dropdownContent">
                    <p>It takes a maximum of two days for delivery within Nigeria and 5 days - 1 week for delivery outside Nigeria</p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question"> Do you deliver to doorstep? </p>
                <div className="dropdownContent">
                    <p>We are glad to let you know that our delivery comes in two types depending on your choice. we deliver to doorstep and also we deliver to the nearest bus stop of your choice </p>
                </div>
                </div>

                <div className="dropDown">
                    <p className="question"> Are there sizes for kids on all your products? </p>
                <div className="dropdownContent">
                    <p>Yes absolutely. All our products are available in all sizes for both young and old </p>
                </div>
                </div>

                


            </div>
        </>
    );
}
export default Faq;


