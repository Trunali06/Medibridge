import{createRoot} from "react-dom/client";

import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientRegistration from "../src/pages/auth/PatientRegistration.jsx"
import ProviderRegistration from "../src/pages/auth/ProviderRegistration.jsx"
import Login from "../src/pages/auth/Login.jsx"
import PatientHome from "./shared/components/PatientHome.jsx";
import BookAppoitment from "./shared/components/BookAppoitment.jsx";
import AppointmentList from "./shared/components/AppointmentList.jsx"
import Profile from "./shared/components/Profile.jsx"
import Message from "./shared/components/Message.jsx"

const router= createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  children:[
    
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/auth/patient/register',
      element:<PatientRegistration/>,
    },
    {
      path:'/auth/provider/register',
      element:<ProviderRegistration/>,
    },
    {
      path:'/PatientHome',
      element:<PatientHome/>
    },
    {
      path:'/BookAppoitment',
      element:<BookAppoitment/>
    },
    {
      path:'/AppointmentList',
      element:<AppointmentList/>
    },
    {
      path:'/Profile',
      element:<Profile/>
    },
    {
      path:'/Message',
      element:<Message/>
    },

  ]
}
])
 const root = createRoot(document.querySelector("#root"));
 root.render(<RouterProvider router={router}/>);