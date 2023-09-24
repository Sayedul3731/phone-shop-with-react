
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Favorites from '../pages/Favorites/Favorites';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PhoneDetails from '../components/PhoneDetails/PhoneDetails';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('phones.json')
            },
            {
                path: "/favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreatedRoute;