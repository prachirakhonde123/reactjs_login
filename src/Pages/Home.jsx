// import { Navigate } from 'react-router-dom';
import {Navigate, useNavigate} from 'react-router-dom'
import { getSessionUser } from '../Components/Session';
import { destroySession } from '../Components/Session';

export default function HomePage(){
    const user = getSessionUser();
    const navigate = useNavigate(); 

    if (!user || user===null) {
        return <Navigate to="/sign-in" />;
    }

    async function handleLogout(){
        console.log('triggered')
        let user = destroySession();
        console.log('logged out user is...',user) 
        if(user===null){
            setTimeout(() => {
                console.log('triggered');     
                navigate('/sign-in');
            }, 2000);
        }
    } 

    return(
        <>
            <h1>Welcome to Home : {user.username}</h1>
            <h2>You are learning React Js</h2>
            {/* <h2>User Is : {user}</h2> */}
            <img
               src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlr.com%2Fimage-generator%2F&psig=AOvVaw0s1vdItCCB3s48zij-aTkT&ust=1736489448124000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjo2bj954oDFQAAAAAdAAAAABAE"
               alt="XYZ"
            />
            <div>
               <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}