import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {Home} from '../../pages/Home'
import { Foods } from "../../pages/Foods";

const router = createBrowserRouter([
    // [0]
    {
        path: '/',
        element: <Home />
    },
    // [1]
    {
        path: '/foods',
        element: <Foods />
    },
    
]);

export function AppRoutes() {
    return <RouterProvider  router={router} />
}