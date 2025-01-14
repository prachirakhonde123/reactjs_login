import React from "react";
import { useNavigate} from "react-router-dom";
import './Button.css'
import { destroySession } from "../Session";

function ButtonLink(){
    const navigate = useNavigate(); 
    async function handleLogout(){
          let user = destroySession();
          if(user===null){
              setTimeout(() => {
                  navigate('/sign-in');
              }, 1000);
          }
      } 
    return(
        <>
            <button className="link-btn" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ButtonLink