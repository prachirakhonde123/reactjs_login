// import { Navigate } from 'react-router-dom';
import {Navigate, useNavigate} from 'react-router-dom'
import { getSessionUser } from '../Components/Session';
import Image1 from '../Images/images.jpg'


export default function HomePage(){
    const user = getSessionUser();

    if (!user || user===null) {
        return <Navigate to="/sign-in" />;
    }

    return(
        <>
          <div className='homepage'>
            <h1>Welcome {user.firstName} {user.lastName}</h1>
            <h2>You are learning React Js</h2>
            {/* <h2>User Is : {user}</h2> */}
            <img
               src={Image1}
               alt="XYZ"
            />
            </div>

        </>
    )
}