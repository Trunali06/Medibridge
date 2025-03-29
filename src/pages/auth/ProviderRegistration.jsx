import React from 'react'
import "../../css/ProviderRegistration.css"
import Button from "../../shared/components/Button";

const ProviderRegistration=()=> {
  return (
    <>
     <main>
        <div className="info">
        <div>
        <label >First Name</label><br/>
        <input className="text" type="text"/><br/>
        </div>

        <div>
            <label >Last Name</label><br/>
            <input className="text" type="text"/>
        </div>
        <div>
            <label >Email</label><br/>
            <input className="text" type="email"/>
        </div>
        </div>
        <div className="info2">
            <div>
            <label >Date Of Birth</label><br/>
            <input className="text" type="date"/><br/>
            </div>
    
            <div>
                <label >Phone Number</label><br/>
                <input className="text" type="number"/>
            </div>
            <div>
                <label >Gender</label><br/>
                <div className="radio">
                <input type="radio"/><p>Male</p>
                <input type="radio"/><p>Female</p>
                <input type="radio"/><p>Other</p>
                </div>
            </div>
            </div>
            <div className="info3">
                <div>
                <label >Blood Group</label><br/>
                <select className="drop" name="blood" id="blood">
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
                    <input className="text" type="text" required/>
                </div>
                <div>
                    <label >City</label><br/>
                    <input className="text" type="text" required/>
                </div>
                </div>
                <div className="info">
                    <div>
                    <label >Country</label><br/>
                    <select className="drop">
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                    </div>
            
                    <div>
                    <label >State</label><br/>
                        <select className="drop"required>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div>
                        <label >ZipCode</label><br/>
                        <input className="text" type="text" />
                    </div>
                   
                </div>

                <div className="info">
                         <div>
                            <label >Qualification</label><br/>
                            <input className="text" type="text"/><br/>
                         </div>

                           <div>
                               <label >Specialisation</label><br/>
                               <input className="text" type="text"/>
                           </div>
                           <div>
                               <label >Registration Number</label><br/>
                               <input className="text" type="email"/>
                           </div>
                           </div>
            <div className="last">             
            <div>
              <label >Visiting Charge</label><br/>
                <input className="text" type="email"/>
             </div>
            <div className="file">
                <label >Profile Image</label><br/>
                <input className="text filefolder" type="file" required/>
            </div>
            </div>
            <input className="check" type="checkbox"required/><span>Agree to terms and conditions</span><br/>
            <div className="btnpatient" >
               <div className='btn'><Button  btnName={"Register"}/></div>
               <div ><Button  btnName={"Clear"}/></div> 
            </div>
       </main>
    
    </>
  )
}

export default ProviderRegistration