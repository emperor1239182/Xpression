const Login = () => {
    const form = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        border: '2px solid blue',
        width: '300px',
        padding: '10px'
    }
    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        window.History();
    };
    
    return (
        <>
        <div style={container}>
        <form  style={form} onSubmit={handleSubmit} >
            <h4>LOGIN</h4>
            <p>Email address</p>
            <input type="email"></input> 
            <p>Password</p>
            <input type="text"></input> 
            <input type="submit" value="Login" />
            <p>Don't have an account? sign up</p>
        </form>
        
        </div>
        </>
    )
}
export default Login