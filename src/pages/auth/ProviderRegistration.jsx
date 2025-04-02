import React, { useEffect, useState } from 'react'
import "../../css/ProviderRegistration.css"
import Button from "../../shared/components/Button";

const ProviderRegistration=()=> {
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
    qualification:"",
    specialization:"",
    regiNumber:"",
    visiCharge:"",
    profileImage:"",
    checkBox:"",
};
const[formData,setFormData]=useState(initialValues);
const[errors, setErrors]=useState({});
const[isSubmit,setIsSubmit]=useState(false);

const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData ({...formData,[name]:value});
};

 const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
    
   };


   useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmit){
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
        newErrors.email="Email is required";
    }
    if (!formData.date){
        newErrors.date="Date is required";
    }
    if (!formData.phoneNumber){
        newErrors.phoneNumber="Phone Number is required";
    }
    if (!formData.gender){
        newErrors.gender="Gender is required";
    }
    if (!formData.bloodGroup){
        newErrors.bloodGroup="Blood Group is required";
    }
    if (!formData.address){
        newErrors.address="Address is required";
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
        newErrors.zipCode="ZipCode is required";
    }
    if (!formData.qualification){
        newErrors.qualification="Qualification is required";
    }
    if (!formData.specialization){
        newErrors.specialization="Specialization is required";
    }
    if (!formData.regiNumber){
        newErrors.regiNumber="Registration Number is required";
    }
    if (!formData.visiCharge){
        newErrors.visiCharge="Visiting Charge is required";
    }
    if (!formData.profileImage){
        newErrors.profileImage="Profile-Image  is required";
    }
    if (!formData.checkBox){
        newErrors.checkBox="CheckBox is required";
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
        <input className="text" type="text"
         value={formData.firstName}
         onChange={handleChange}/><br/>
          {
          errors.firstName && 
          <p className='error'>
          {errors.firstName}</p>
          }

        </div>

        <div>
            <label >Last Name</label><br/>
            <input className="text" type="text"
            value={formData.lastName}
            onChange={handleChange}/>
          {
          errors.lastName && 
          <p className='error'>
          {errors.lastName}</p>
          }
        </div>
        <div>
            <label >Email</label><br/>
            <input className="text" type="email"
            value={formData.email}
            onChange={handleChange}/>
             {
          errors.email && 
          <p className='error'>
          {errors.email}</p>
          }
        </div>
        </div>
        <div className="info2">
            <div>
            <label >Date Of Birth</label><br/>
            <input className="text" type="date"
            value={formData.date}
            onChange={handleChange}/><br/>
             {
          errors.date && 
          <p className='error'>
          {errors.date}</p>
          }
            </div>
    
            <div>
                <label >Phone Number</label><br/>
                <input className="text" type="number"
                value={formData.phoneNumber}
                onChange={handleChange}/>
                 {
          errors.phoneNumber && 
          <p className='error'>
          {errors.phoneNumber}</p>
          }
            </div>
            <div>
                <label >Gender</label><br/>
                <div className="radio"
                value={formData.gender}
                onChange={handleChange}>
                <input type="radio"/><p>Male</p>
                <input type="radio"/><p>Female</p>
                <input type="radio"/><p>Other</p>
                
            
                </div>
                {
          errors.gender && 
          <p className='error'>
          {errors.gender}</p>
          }
            </div>
            </div>
            <div className="info3">
                <div>
                <label >Blood Group</label><br/>
                <select className="drop" name="blood" id="blood"
                value={formData.bloodGroup}
                onChange={handleChange}>
                    <option value="A+">A+</option>
                    <option value="A+">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB+">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O+">O-</option>
                  
                </select>
                {
          errors.bloodGroup && 
          <p className='error'>
          {errors.bloodGroup}</p>
          }
                </div>
        
                <div>
                    <label >Address</label><br/>
                    <input className="text" type="text" 
                    value={formData.address}
                    onChange={handleChange}/>
                     {
          errors.address && 
          <p className='error'>
          {errors.address}</p>
          }
                </div>
                <div>
                    <label >City</label><br/>
                    <input className="text" type="text" 
                    value={formData.city}
                    onChange={handleChange}/>
                     {
          errors.city && 
          <p className='error'>
          {errors.city}</p>
          }
                </div>
                </div>
                <div className="info">
                    <div>
                    <label >Country</label><br/>
                    <select className="drop"
                    value={formData.country}
                    onChange={handleChange}>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                    {
          errors.country && 
          <p className='error'>
          {errors.country}</p>
          }
                    </div>
            
                    <div>
                    <label >State</label><br/>
                        <select className="drop" 
                        value={formData.state}
                        onChange={handleChange}>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Delhi">Delhi</option>
                        </select>
                        {
             errors.state && 
          <p className='error'>
          {errors.state}</p>
          }
                    </div>
                    <div>
                        <label >ZipCode</label><br/>
                        <input className="text" type="text" 
                        value={formData.zipCode}
                        onChange={handleChange}/>
                         {
          errors.zipCode && 
          <p className='error'>
          {errors.zipCode}</p>
          }
                    </div>
                   
                </div>

                <div className="info">
                         <div>
                            <label >Qualification</label><br/>
                            <input className="text" type="text"
                            value={formData.qualification}
                            onChange={handleChange}/><br/>
                             {
          errors.qualification && 
          <p className='error'>
          {errors.qualification}</p>
          }
                         </div>

                           <div>
                               <label >Specialisation</label><br/>
                               <input className="text" type="text"
                               value={formData.specialization}
                               onChange={handleChange}/>
                                {
          errors.specialization && 
          <p className='error'>
          {errors.specialization}</p>
          }
                           </div>
                           <div>
                               <label >Registration Number</label><br/>
                               <input className="text" type="email"
                               value={formData.regiNumber}
                               onChange={handleChange}/>
                                {
          errors.regiNumber && 
          <p className='error'>
          {errors.regiNumber}</p>
          }
                           </div>
                           </div>
            <div className="last">             
            <div>
              <label >Visiting Charge</label><br/>
                <input className="text visi" type="email"
                value={formData.visiCharge}
                onChange={handleChange}/>
                 {
          errors.visiCharge && 
          <p className='error'>
          {errors.visiCharge}</p>
          }
             </div>
            <div className="file">
                <label >Profile Image</label><br/>
                <input className="text filefolder" type="file" 
                value={formData.profileImage}
                onChange={handleChange}/>
                 {
          errors.profileImage && 
          <p className='error'>
          {errors.profileImage}</p>
          }
            </div>
            </div>
            <input className="check" type="checkbox"
            value={formData.checkBox}
            onChange={handleChange}/>
            <span>Agree to terms and conditions</span><br/>
            {
          errors.checkBox && 
          <p className='error err'>
          {errors.checkBox}</p>
          }
            <div className="btnpatient" >
               <div className='btn'><Button  btnName={"Register"}/></div>
               <div ><Button  btnName={"Clear"}/></div> 
            </div>
            </form>
       </main>
    
    </>
  )
}

export default ProviderRegistration