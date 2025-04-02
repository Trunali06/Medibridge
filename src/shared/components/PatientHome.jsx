import React, { useState } from 'react'
import "../../css/PatientHome.css"
import "../../css/AppointmentList.css"
import Button from './Button'

const PatientHome=() =>{
  const [appointments, setAppointments] = useState([{
    "appointmentId": 2012,
    "patientId": 1011,
    "providerId": 7,
    "providerName": "Chetan Mundlepro",
    "appointmentDate": "2025-04-03T00:00:00",
    "appointmentTime": "09:50:00",
    "appointmentStatus": "Scheduled",
    "chiefComplaint": "wqer",
    "fee": 250,
    "email": "chetanmundle7875@gmail.com"
},
{
    "appointmentId": 2011,
    "patientId": 1011,
    "providerId": 1010,
    "providerName": "Teju Banasure",
    "appointmentDate": "2025-04-03T00:00:00",
    "appointmentTime": "09:50:00",
    "appointmentStatus": "Scheduled",
    "chiefComplaint": "asdf",
    "fee": 150,
    "email": "tejugaidhane@yopmail.com"
},
{
    "appointmentId": 2010,
    "patientId": 1011,
    "providerId": 7,
    "providerName": "Chetan Mundlepro",
    "appointmentDate": "2025-04-03T00:00:00",
    "appointmentTime": "09:49:00",
    "appointmentStatus": "Scheduled",
    "chiefComplaint": "asdf",
    "fee": 250,
    "email": "chetanmundle7875@gmail.com"
}
])
  return (
    <> 
     <div className="shedule">
      <select >
      <option value="Sheduled">Sheduled</option>
        <option value="Morning">Cancelled</option>
        <option value="afternoon">Completed</option>
      </select>
    </div>
    <div className="appointment">
      <h3>No Appointments</h3>
    </div>

    <div>
      {appointments.map((item, index)=>(
        <div className="appointlist" key={index}>
        <div className="card card1">
          <div className="data">
           <p  className='dt' >Provider Name : {item.providerName}</p>
           <p  className='dt' >Appt. Fee : {item.fee}</p>
           <p className='dt' >Appointment Time :</p>
          </div>
          <div className="data2">
           <p className='dt'>Appt. Status :</p>
           <p className='dt' >Appt. Date :</p>
          </div>
          <div className="btnns">
          <div className='butns Editbtn'><Button  btnName={"Edit"}/></div>
          <div className=' butns Canclebtn'><Button  btnName={"Cancle"}/></div> 
          <div className=' butns Deletebtn'><Button  btnName={"Delete"}/></div> 
          </div>
        </div>
       
    </div>
      ))}
    </div>

    </>
  )
}

export default PatientHome