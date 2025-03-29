import React, { useEffect, useState } from 'react'
import "../../css/PatientRegistration.css"
import Button from "../../shared/components/Button";


const PatientRegistration=()=> {
const initialValues=
{
    firstName:"",
    lastName:"",
    email:"",
    date:"",
    phoneNumber:"",
    gender:"",
    bloodGroup:"",
    address:"",
    city:"",
    country:"",
    state:"",
    zipCode:"",
    profileImage:"",
    checkBox:"",
};
const [formData, setFormData]=useState(initialValues);

const[errors,setErrors]=useState();

 const[isSubmit,setIsSubmit]=useState(false);


 const handleChange=(e)=>
    {
    const{name,value}=e.target;
    setFormData({ ...formData,[name]:value,});
    };

   const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
    
   };


   useEffect(()=>{
    if(Object.keys(errors).length===0&& isSubmit){
        console.log("Form submitted successfully:",formData);
    }
   },[errors,isSubmit]);

   const validate=(formData)=>{
    const newErrors={};
    if (!formData.firstName){
        newErrors.firstName="First name is required";
    }
    if (!formData.lastName){
        newErrors.lastName="Lirst name is required";
    }
    if (!formData.email){
        newErrors.email="Email name is required";
    }
    if (!formData.date){
        newErrors.date="Date name is required";
    }
    if (!formData.phoneNumber){
        newErrors.phoneNumber="Phone Number name is required";
    }
    if (!formData.gender){
        newErrors.gender="Gender name is required";
    }
    if (!formData.bloodGroup){
        newErrors.bloodGroup="Blood Group name is required";
    }
    if (!formData.address){
        newErrors.address="Address name is required";
    }
    if (!formData.city){
        newErrors.city="City name is required";
    }
    if (!formData.country){
        newErrors.country="Country name is required";
    }
    if (!formData.state){
        newErrors.state="State name is required";
    }
    if (!formData.zipCode){
        newErrors.zipCode="ZipCode name is required";
    }
    if (!formData.profileImage){
        newErrors.profileImage="profile  Image name is required";
    }
    if (!formData.checkBox){
        newErrors.checkBox="checkBox name is required";
    }
    return newErrors;
     };
  return (
    <>
     <main>
        <form onSubmit={handleSubmit}>

        <div className="info">

        <div>
             <label >First Name</label><br/>
             <input className="text" 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
             /><br/>
        </div>

        <div>
            <label >Last Name</label><br/>
            <input className="text"
             type="text"
             name="lastName"
             value={formData.lastName}
             onChange={handleChange}
             
             />
        </div>
        <div>
            <label >Email</label><br/>
            <input className="text"
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}

             />
        </div>

        </div>

        <div className="info2">
            <div>
            <label >Date Of Birth</label><br/>
            <input className="text"
             type="date"
             name="date"
             value={formData.date}
             onChange={handleChange}

             /><br/>
            </div>
    
            <div>
                <label >Phone Number</label><br/>
                <input className="text" 
                type="number"
                name="number"
                value={formData.number}
              onChange={handleChange}

                />
            </div>
            <div>
                <label >Gender</label><br/>
                <div className="radio"
                  name="gender"
                  value={formData.gender}
              onChange={handleChange}

                  >
                <input type="radio"/><p>Male</p>
                <input type="radio"/><p>Female</p>
                <input type="radio"/><p>Other</p>
                </div>
            </div>
            </div>
            <div className="info3">
                <div>
                <label >Blood Group</label><br/>
                <select className="drop"
                 name="bloodGroup"
                 value={formData.bloodGroup}
              onChange={handleChange}

                  id="blood">
                    <option value="A+">A+</option>
                    <option value="A+">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB+">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O+">O-</option>
                  
                </select>
                </div>
        
                <div>
                    <label >Address</label><br/>
                    <input className="text"
                     type="text"
                     name="address"
                     value={formData.address}  
              onChange={handleChange}

                     />
                </div>
                <div>
                    <label >City</label><br/>
                    <input className="text"
                     type="text"
                     name="city"
                     value={formData.city} 
              onChange={handleChange}
              />
                </div>
                </div>
                <div className="info">
                    <div>
                    <label >Country</label><br/>
                    <select className="drop"
                      name="country"
                      value={formData.country}
              onChange={handleChange}

                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                    </div>
            
                    <div>
                    <label >State</label><br/>
                        <select className="drop"
                         name="state"
                         value={formData.state}
              onChange={handleChange}

                         >
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div>
                        <label >ZipCode</label><br/>
                        <input className="text"
                         type="text" 
                         name="zipCode"
                         value={formData.zipCode}
              onChange={handleChange}

                         
                         />
                    </div>
                   
                </div>
            <div className="file-profile">
                <label >Profile Image</label><br/>
                <input className="text filefold"
                 type="file"
                 name="profileImage"
                 value={formData.profileImage}
              onChange={handleChange}

                 
                 />
            </div>

            <input className="check"
             type="checkbox"
             name="checkBox"
             value={formData.checkBox}
             onChange={handleChange}

             />
             <span>Agree to terms and conditions</span><br/>
            <div className="btnpatient" >
               <div className='btn'><Button  btnName={"Register"}/></div>
               <div ><Button  btnName={"Clear"}/></div> 
            </div>
            </form>
       </main>
    
    </>
  )
}

export default PatientRegistration