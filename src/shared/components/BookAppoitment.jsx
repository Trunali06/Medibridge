import React from 'react'
import "../../css/BookAppoitment.css"
import Button from './Button'
const BookAppoitment=()=> {
    
  return (
    <>
    <div className='BookAppoitment'>

        <div className="specialization">

        <label for="specialties">Select a Specialty:</label><br />

    <select id="specialties" name="specialties">
        <option value="">-- Select a specialty --</option>
        <option value="Allergist/immunologist">Allergist/immunologist</option>
        <option value="Anesthesiologist">Anesthesiologist</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Endocrinologist">Endocrinologist</option>
        <option value="Family physician">Family physician</option>
        <option value="Gastroenterologist">Gastroenterologist</option>
        <option value="Geneticist">Geneticist</option>
        <option value="Hematologist">Hematologist</option>
        <option value="Hospice and palliative medicine specialist">Hospice and palliative medicine specialist</option>
        <option value="Infectious disease physician">Infectious disease physician</option>
        <option value="Internal Medicine">Internal Medicine</option>
        <option value="Nephrologist">Nephrologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Obstetrician/gynecologist (OBGYNs)">Obstetrician/gynecologist (OBGYNs)</option>
        <option value="Oncologist">Oncologist</option>
        <option value="Ophthalmologist">Ophthalmologist</option>
        <option value="Orthopedist">Orthopedist</option>
        <option value="Otolaryngologist">Otolaryngologist</option>
        <option value="Osteopath">Osteopath</option>
        <option value="Pathologist">Pathologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Physician executive">Physician executive</option>
        <option value="Plastic surgeon">Plastic surgeon</option>
        <option value="Podiatrist">Podiatrist</option>
        <option value="Psychiatrist">Psychiatrist</option>
        <option value="Pulmonologist">Pulmonologist</option>
        <option value="Radiologist">Radiologist</option>
        <option value="Rheumatologist">Rheumatologist</option>
        <option value="Sleep medicine specialist">Sleep medicine specialist</option>
        <option value="Surgeon">Surgeon</option>
        <option value="Urologist">Urologist</option>
    </select>
        </div>

        <div className="provider">
            <label > Provider </label><br />
          <select name="Provider" id="">
            <option value="sharma">sharma</option>
            <option value="patil">patil</option>
            <option value="rangari">rangari</option>
            <option value="chole">chole</option>
            <option value="Lanjewar">Lanjewar</option>
          </select>
        </div>
        <div className="fee">
           <label >Fee</label><br />
           <input type="text" />
        </div>
        <div className="Appointdate">
           <label >Date Of Appointment</label><br />
           <input type="date" />
        </div>
    </div>
    <div className="Bookapp">
        <div className="starttime">
            <label >Start Time</label><br />
            <input type="time" name="" id="" />
        </div>
        <div className="chief">
            <label >Chief Complaint</label> <br />
            <input type="text" />
        </div>
    </div>
    <div className="Bookbtn" >
               <div className='Paybtn'><Button  btnName={"Pay and Book"}/></div>
               <div className='resetbtn'><Button  btnName={"Reset"}/></div> 
    </div>
    </>
  )
}

export default BookAppoitment