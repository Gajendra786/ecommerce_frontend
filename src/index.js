import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
// import Home from "./components/Home/Home"
import About from "./components/About/About"
import NotFoundPage from "./components/NotFound"
import {ProtectedRoute,PublicRoute} from "./components/Layout"
import {Outlet,Navigate} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
// import Home from '../src/customer/pages/HomePage';
import store from "./store/store"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';

// const router = createBrowserRouter([
//   {
//     element: (
//       <ProtectedRoute>
//         <Outlet />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <Navigate to="home" />,
//       },
//       {
//         path: "home",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: (
//       <PublicRoute>
//         <Login />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (
//       <PublicRoute>
//         <SignUp />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <PublicRoute>
//         <About />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
    //   <RouterProvider router={router}/>
    // </Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


