import {
    createBrowserRouter
  } from "react-router";
import Home from '../Pages/Home/Home';
import HomePage from "../Pages/Home/HomePage";
import CatergoryNews from "../Pages/CatergoryNews";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";

const router = createBrowserRouter([
            {
              path: "/",
              Component:Home,
              children:[
                {
                  path:"",
                  Component:HomePage,
                },
                {
                  path:'/category/:id',
                  Component:CatergoryNews,
                  loader:()=>fetch('/news.json')
                }
              ]
            },
            {
                path:'/auth',
                element:<AuthLayout></AuthLayout> ,
                children:[
                  {
                    path:'/auth/login',
                    Component: Login,
                  },
                  {
                    path:'/auth/register',
                    Component: Register,
                  }
                ]
            }
          ]);
 
export default router;