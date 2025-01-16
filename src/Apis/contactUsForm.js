import axios from "axios";

let BASE_URL = "http://localhost:5000"

let createContactUs = async (formData) => {
    try{
        let apiResponse = await axios.post(`${BASE_URL}/api/contactus/add`,formData)
        console.log('api response is..',apiResponse);
        return apiResponse
    }
    catch(error){
        throw error.message || 'An error occurred';
    }

}

export default createContactUs