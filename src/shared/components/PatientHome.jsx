import React from 'react'
import "../../css/PatientHome.css"
const PatientHome=() =>{
  return (
    <>
     <div className="shedule">
      <select >
      <option value="Sheduled">Sheduled</option>
        <option value="Morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
        <option value="Night">Night</option>
      </select>
    </div>
     <div className="appointment">
      <h3>No Appointments</h3>
    </div>

    </>
  )
}

export default PatientHome