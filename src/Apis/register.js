import axios from 'axios'
import { setSession } from '../Components/Session';


const BASE_URL = "http://localhost:5000"

export async function registerUserApi(userData){
    try{
        const apiResponse = await axios.post(`${BASE_URL}/api/user/register`,userData);
        console.log('api response data is..',apiResponse);
        return apiResponse
    }
    catch(error){
        throw error.response?.data || error.message || 'An error occurred';
    }
}

export async function loginUser(userLoginData){
    try{
        console.log('userData is...',userLoginData)
        const apiResponse = await axios.post(`${BASE_URL}/api/auth/login`,
            userLoginData,
            // {withCredentials:true}
        );
        console.log('api response is..',apiResponse);
        // console.log('login data is..',apiResponse.data.status);
        if(apiResponse && apiResponse.data && apiResponse.data.status === true){
             const token = apiResponse.data.access_token;
             setSession(token)    
        }
        
        return apiResponse


    }
    catch(error){
        throw error.message || "Error Occured"
    }
}

