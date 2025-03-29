import{createRoot} from "react-dom/client";
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProviderRegistration from "../src/pages/auth/ProviderRegistration.jsx"
import PatientRegistration from "../src/pages/auth/PatientRegistration.jsx"
import Login from "../src/pages/auth/Login.jsx"

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
      path:'/patient/register',
      element:<PatientRegistration/>,
    },
    {
      path:'/provider/register',
      element:<ProviderRegistration/>,
    },
  ]
}
])
 const root = createRoot(document.querySelector("#root"));
 root.render(<RouterProvider router={router}/>);