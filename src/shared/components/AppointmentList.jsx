import React from 'react'
import "../../css/AppointmentList.css"
import Button from './Button'
const AppointmentList=() =>{
  return (
    <>
    <div className="appointlist">
        <div className="card card1">
          <div className="data">
           <p  className='dt' >Provider Name :</p>
           <p  className='dt' >Appt. Fee :</p>
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
        <div className=" card card2">

        </div>
        <div className="card card3">

        </div>
    </div>
    </>
  )
}

export default AppointmentList