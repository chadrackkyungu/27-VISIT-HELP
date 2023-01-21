import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Account/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import LeadGuideProfile from "../pages/Account/LeadGuideProfile"
import AdminProfile from "../pages/Account/AdminProfile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import TourDetails from '../pages/Dashboard/Tour-details';
import MyAccount from '../pages/Account/Account';
import MyTourForTourGuides from '../pages/My-Tours/My-tour-for-tour-guide';
import MyLeadGuide from '../pages/My-Lead-Guide/My-lead-guide';
import AdminTours from '../pages/My-Tours/Admin-Tour';
import MyTickets from '../pages/My Tickets/MyTickets';
import AddTour from '../pages/My-Tours/Add-tour';
import UpdateTour from '../pages/My-Tours/UpateTour';
import Mybookings from '../pages/Account/Mybookings';
import Layout from '../pages/Layout';
import Logout from '../pages/Authentication/Logout';

const userRoutes = [
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/tour-details/:id", exact: true, component: TourDetails },
  // { path: "/my-account", exact: true, component: MyAccount },
  { path: "/my-account", exact: true, component: Layout },

  { path: "/profile", exact: true, component: UserProfile },
  { path: "/my-bookings", exact: true, component: Mybookings },
  { path: "/lead-guide-profile", exact: true, component: LeadGuideProfile },
  { path: "/admin-profile", exact: true, component: AdminProfile },

  { path: "/lead-guide-tours", exact: true, component: MyTourForTourGuides },
  { path: "/my-lead-guide", exact: true, component: MyLeadGuide },
  { path: "/admin-tour", exact: true, component: AdminTours },

  { path: "/my-tickets", exact: true, component: MyTickets },
  { path: "/add-tour", exact: true, component: AddTour },
  { path: "/edit-tour/:id", exact: true, component: UpdateTour },
  { path: "/logout", exact: true, component: Logout },

  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/login", exact: true, component: Login },
  { path: "/forgot-password", exact: true, component: ForgetPwd },
  { path: "/register", exact: true, component: Register },
  { path: "/resetPassword/:token", exact: true, component: ResetPassword },
  { path: "/verify/:userId/:token", exact: true, component: VerifiedEmail },
]

export { userRoutes, authRoutes }
