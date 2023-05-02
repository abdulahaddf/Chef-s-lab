import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
// import LoginLayout from "../layouts/LoginLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch(`https://chef-recipe-server-abdulahaddf.vercel.app/data`);
                  },
            },
            {
                path: '/login',
                element: <Login></Login>
            
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
   
])

export default router;