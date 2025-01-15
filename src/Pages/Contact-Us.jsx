import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function ContactUsForm(){

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    function handleValidation(){
        let formFields = {...fields};
        let formErrors = {};
        let formIsValid = true

        if(!formFields["name"]){
            formIsValid = false;
            formErrors["name"] = "Name is required";
        }

        if(formFields["name"]!==undefined){
            if(!formFields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                formErrors["name"] = "Name must contain only letters";
            }
        }

        if(!formFields["phone"]){
            formIsValid = false;
            formErrors["phone"] = "Phone Number is required";
        }

        if(!formFields['email']){
            formIsValid = false;
            formErrors['email'] = "Email is required"
        }

        if(formFields['email'] !== undefined){
            if(!formFields['email'].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
                formIsValid = false;
                formErrors['email'] = "Invalid Email Format";
            }
        }

        setErrors(formErrors);
        return formIsValid
    }

    const handleChange = (field, value) => {
        setFields({
          ...fields,
          [field]: value
        })
    }

    function contactForm(e){
        e.preventDefault();
        if(handleValidation()){
            setTimeout(() => {
                <Navigate to="/thank-you"/>
            }, 1000);
        }else{
            alert('Form Has Errors')
        }
    }
 

    return(
        <>
          <form className="registration-form" onSubmit={contactForm}>
              <h1 className="registerh1">Contact Us</h1>
              <div className="form-group">
                  <input className="input-field" type="text" onChange={e=>handleChange('name',e.target.value)} value={fields['name']} placeholder="Enter Name"/>
                  <span className="error">{errors['name']}</span>
              </div>
              <div className="form-group">
                  <input className="input-field" type="text" placeholder="Enter Mobile Number" onChange={e=>handleChange('phone',e.target.value)} value={fields['phone']}/>
                  <span className="error">{errors['phone']}</span>
              </div>
              <div className="form-group">
                  <input className="input-field" type="text" onChange={e=>handleChange('email',e.target.value)} placeholder="Enter Email"/>
                  <span className="error">{errors['email']}</span>
              </div>
              <div className="form-group">
                  <textarea className="input-field" type="text" onChange={e=>handleChange('message',e.target.value)} placeholder="Enter Message"/>
              </div>
              <button className="submit-button" type="submit">Submit</button>
          </form>
        </>
    )

}