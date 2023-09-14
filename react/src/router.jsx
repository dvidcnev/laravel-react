import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import Users from "./views/users";
import Dashboard from "./views/dashboard";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/defaultlayout";
import GuestLayout from "./components/guestlayout";

const  router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/register',
                element: <Register />
            },
        ]
    },

   

    

    {
        path: '*',
        element: <NotFound />
    }
])


export default router;