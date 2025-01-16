import React from "react"
import { useNavigate } from "react-router-dom"

export default function ThankYouPage(){
  let navigate = useNavigate()
    return(
        <>
          <div className="thank-you">
             <h1>Thank You For Contacting Us</h1>
             <p className="back-btn" onClick={()=>{navigate('/')}}>Go to Home Page</p>
          </div>
        </>
    )
}