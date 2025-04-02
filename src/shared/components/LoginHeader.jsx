import React from 'react';
import "../../css/LoginHeader.css"
import { Link } from 'react-router-dom';
const Header=()=> {
  return (
    <>
    
        <div className="navbar">
             <div className="logo">logo</div>
             <div className="nav">
    
                <Link to="/login" className='link log'>Login</Link>
                <Link to="/auth/patient/register" className='link pati'>Patient Register</Link>
                <Link to="/auth/provider/register" className='link pro'>Provider Register</Link>
               </div>
          
        </div>
        
    </>
  )
}

export default Header