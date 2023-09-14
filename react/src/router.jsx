import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import Users from "./views/users";
import NotFound from "./views/NotFound";

const  router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/register',
        element: <Register />
    },

    {
        path: '/users',
        element: <Users />
    },

    {
        path: '*',
        element: <NotFound />
    }
])


export default router;