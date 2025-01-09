import axios from 'axios'

const BASE_URL = "http://localhost:5000"

export async function registerUserApi(userData){
    try{
        const apiResponse = await axios.post(`${BASE_URL}/api/user/register`,userData);
        console.log('api response data is..',apiResponse);
        return apiResponse.data
    }
    catch(error){
        throw error.response?.data || error.message || 'An error occurred';
    }
}

export async function loginUser(userLoginData){
    try{
        console.log('userData is...',userLoginData)
        const apiResponse = await axios.post(`${BASE_URL}/api/user/login`,
            userLoginData,
            {withCredentials:true}
        );
        console.log('login data is..',apiResponse);
        return apiResponse.data
    }
    catch(error){
        throw error.message || "Error Occured"
    }
}

export async function getSession() {
    const response = await axios.get('http://localhost:5000/api/user/session', {
        withCredentials: true,
    });
    console.log('get session are 1221',response.data)
    return response.data;
}

export async function logout() {
    const response = await axios.get(`${BASE_URL}/api/user/logout`, {
        withCredentials: true,
    });
    return response.data;
}
