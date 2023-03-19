import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Secondary from "../../Layout/Secondary";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ],
    },
    {
        path: '/user',
        element: <Secondary />,
        children: [
            {
                path:'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

export default router;