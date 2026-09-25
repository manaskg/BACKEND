import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <h1>HOME</h1>
    },
    {
        path:"/login",
        element: <Login/>
    }
])