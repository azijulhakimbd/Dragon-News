import {
    createBrowserRouter
  } from "react-router";
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import HomePage from "../Pages/Home/HomePage";
import CatergoryNews from "../Pages/CatergoryNews";
const router = createBrowserRouter([
            {
              path: "/",
              Component:Home,
              children:[
                {
                  index:true,
                  Component:HomePage,
                },
                {
                  path:'/category/:id',
                  Component:CatergoryNews
                }
              ]
            },
            {
                path:'/Login',
                Component:Login
            }
          ]);
 
export default router;