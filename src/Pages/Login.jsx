import { useState } from "react";
import { loginUser } from "../Apis/register";
import { useNavigate } from "react-router-dom"; 

export default function Login(){

    let [userName,setUserName] = useState('');
    let [password,setPassword] = useState('');
    let [message,setMessage] = useState('');
    let [error,setError] = useState('')

    const navigate = useNavigate()

    function handleUserName(e){
        setUserName(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleLoginForm(e){
       try{
        e.preventDefault();

        const userLoginData = {userName,password};
        const response = await loginUser(userLoginData)
        console.log('response is 123343.....',response)
        if(response.data.status===true){
            setMessage("User Logged In Successfully");
            setError('')
            navigate('/home');
        }else{
            setError(response.error || 'Failed to Login')
            setMessage('')
        }

        setTimeout(() => {
            setUserName('')
            setPassword('')
            setMessage('')
            setError('')
        }, 2000);
       }
       catch(error){
            setError(error.message)
            setMessage('')
       }
    }

     return(
        <>
        <form onSubmit={handleLoginForm} className="registration-form">
            <h1 style={{color:"green"}}>Sign In</h1>
            <div className="form-group">
               <input className="input-field" type="text" required value={userName} placeholder="Enter User Name" onChange={handleUserName}/>
            </div>

            <div className="form-group">
               <input className="input-field" type="text" required value={password} placeholder="Enter Password" onChange={handlePassword}/>
            </div>

            <button className="submit-button" type="submit">Submit</button>
            {message && <p style={{color:"green"}}>{message}</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
        </form>
        </>
     )  
}
