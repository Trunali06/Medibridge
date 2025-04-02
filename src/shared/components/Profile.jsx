import React from 'react'
import "../../css/Profile.css"
import Button from './Button'
const Profile=() =>{
  return (
    <>
    <div className="profile">
      <div className="profiledata">
          <img src="" alt="" />
          <p>Trunali Gaidhane</p>
          <span>patient</span><br />
          <span>user ID</span>
      <div><Button btnName={"Change Password"}/></div>
      <div><Button btnName={"Edit Profile"}/></div>
      </div>
      <div className="patientdata">
           <p>first Name : 
            </p><input type="text" /><hr />
           <p>last Name: </p><input type="text" /><hr />
           <p>email: </p><input type="email" /><hr />
           <p>date of birth :</p> <input type="date" /><hr />
           <p>phone Number : </p><input type="number" /><hr />
           <p> gender: </p><input type="text" /><hr />
           <p>blood Group: </p><input type="text" /><hr/>
           <p>address: </p><input type="text" /><hr/>
           <p>city: </p><input type="text" /><hr/>
           <p>country: </p><input type="text" /><hr/>
           <p>state: </p><input type="text" /><hr />
           <p>zipCode : </p><input type="number" /><hr />
           
      </div>
    </div>
    </>
  )
}

export default Profile