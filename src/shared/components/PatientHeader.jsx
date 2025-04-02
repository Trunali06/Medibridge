import React from 'react'
import "../../css/PatientHeader.css"
import { Link } from 'react-router-dom';

const PatientHeader=()=> {
  return (
    <>
    
  
    <div className='patientheader'>
        <div className="logo">Logo</div>
        <div className="patient-nav">
            
        <Link to="/PatientHome" className='patientlink'>Patient-Home</Link>
        <Link to="/BookAppoitment" className='patientlink'>Book-Appoitment</Link>
        <Link to="/AppointmentList" className='patientlink'>Appoitment-List</Link>
        <Link to="/Profile" className='patientlink'>Profile</Link>
        <Link to="/Message" className='patientlink'>Message</Link>

        </div>
    </div>
   
   
    
    

    </>
  )
}

export default PatientHeader