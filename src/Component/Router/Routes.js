import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import DisplayError from "../DisplayError/DisplayError";
import About from "../Pages/About/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddADoctor/AddDoctor";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Login from "../Pages/Login/Login";
import MyAppointment from "../Pages/MyAppointment/MyAppointment";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRouts from "./AdminRouts/AdminRouts";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const { default: Home } = require("../Pages/Home/Home/Home");

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            
        ]
        
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/users',
                element:<AdminRouts><AllUser></AllUser></AdminRouts>
            },
            {
                path:'/dashboard/addDoctor',
                element:<AdminRouts><AddDoctor></AddDoctor></AdminRouts>
            },
            {
                path:'/dashboard/manageDoctors',
                element:<AdminRouts><ManageDoctor></ManageDoctor></AdminRouts>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRouts><Payment></Payment></AdminRouts>,
                loader:({params})=>fetch(`https://doctors-portal-server-self.vercel.app/bookings/${params.id}`)
            },

        ]
    },
])
export default routes;