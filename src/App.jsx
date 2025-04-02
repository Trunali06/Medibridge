import { useState } from 'react'
import LoginHeader  from './shared/components/LoginHeader'
import { Outlet } from 'react-router-dom';
import PatientHeader from './shared/components/PatientHeader';
import Home from './pages/org/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <LoginHeader/> */}
     <PatientHeader/>
     {/* <Home/> */}
     <Outlet/>
     </>
  )
}

export default App
