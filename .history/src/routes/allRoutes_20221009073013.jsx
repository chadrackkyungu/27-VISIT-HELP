import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Account/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import LeadGuideProfile from "../pages/Account/LeadGuideProfile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import TourDetails from '../pages/Dashboard/Tour-details';
import MyAccount from '../pages/Account/Account';
import MyTourForTourGuides from '../pages/My-Tours/My-tour-for-tour-guide';

const userRoutes = [
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/profile", exact: true, component: UserProfile },
  { path: "/tour-details/:id", exact: true, component: TourDetails },
  { path: "/my-account", exact: true, component: MyAccount },
  { path: "/lead-guide-tours", exact: true, component: MyTourForTourGuides },

  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/login", exact: true, component: Login },
  { path: "/forgot-password", exact: true, component: ForgetPwd },
  { path: "/register", exact: true, component: Register },
  { path: "/reset-password", exact: true, component: ResetPassword },
  { path: "/lead-guide-profile", exact: true, component: LeadGuideProfile },
]

export { userRoutes, authRoutes }
