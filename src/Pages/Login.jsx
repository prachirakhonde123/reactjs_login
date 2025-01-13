import { useState } from "react";
import { loginUser } from "../Apis/register";
// import { useNavigate } from "react-router-dom"; 
import {useNavigate} from 'react-router-dom'

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
        if(response.data && response.data.status===true){
            // console.log('User Logged In Successfully')
            setMessage("User Logged In Successfully");
            setError('')
            navigate('/home');
        }else{
            setError(response.data.message || "Invalid Credentials")
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
            <h1 className="registerh1">Sign In</h1>
            <div className="form-group">
               <input className="input-field" type="text" required value={userName} placeholder="Enter User Name" onChange={handleUserName}/>
            </div>

            <div className="form-group">
               <input className="input-field" type="text" required value={password} placeholder="Enter Password" onChange={handlePassword}/>
            </div>

            <button className="submit-button" type="submit">Submit</button>
            {message && <p className="registerh1">{message}</p>}
            {error && <p className="error_msg">{error}</p>}
        </form>
        <button >Logout User</button>
        </>
     )  
}
