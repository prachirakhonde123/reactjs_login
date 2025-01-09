import { useState } from "react"
import { registerUserApi } from "../Apis/register"
import { React } from "react"

export default function RegisterForm(){
    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let [userName,setUserName] = useState('')
    let [password,setPassword] = useState('')
    let [email,setEmail] = useState('')
    let [message, setMessage] = useState('');
    let [error, setError] = useState('');

    function handleFisrtName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    function handleUserName(e){
        setUserName(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();

        const userData = {firstName, lastName, userName, email, password}

        try{
            const response = await registerUserApi(userData)
            console.log('response',response);
            if(response.message === "Username is already used"){
                setError('Username is already used')
                setMessage('')
            }else{
                setMessage(response.message)
                setError('')
            }
           
            setTimeout(() => {
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setUserName('')
                setMessage('')   
            }, 2000);
        }
        catch(error){
            setError(error.message || "Failed to Register")
            setMessage('')
        }
    }

    return(
        <>
          <form onSubmit={handleSubmit} className="registration-form">
          <h1 className="registerh1" style={{color:"green"}}>Register User</h1>

            <div className="form-group">
             {/* <label className="label">First Name</label> */}
             <input className="input-field" type="text" required value={firstName} placeholder="Enter FirstName" onChange={handleFisrtName}/>
            </div>

            <div className="form-group">
             {/* <label className="label">Last Name</label> */}
             <input className="input-field" type="text" required value={lastName} placeholder="Enter LastName" onChange={handleLastName}/>
            </div>

            <div className="form-group">
             <input className="input-field" type="text" value={userName} placeholder="Enter UserName" onChange={handleUserName}/>
            </div>

            <div className="form-group">
             <input className="input-field" type="text" value={email} placeholder="Enter Email" onChange={handleEmail}/>
            </div>

            <div className="form-group">
             {/* <label className="label">Password</label> */}
             <input className="input-field" value={password} type="password" placeholder="Enter Password" onChange={handlePassword}/>
            </div>

            <button className="submit-button" type="submit">Submit</button>
            {message && <p style={{color:"green"}}>{message}</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
          </form> 
        </>
    )
}