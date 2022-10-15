import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { Link } from "react-router-dom"
import user1 from "../../../assets/images/users/avatar.webp"

import { signOut } from 'firebase/auth';
import { auth } from '../../../Database/init-firebase'
import { useHistory, useLocation } from "react-router-dom"
import { userDetails } from '../../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../../index';

const ProfileMenu = props => {

  const [menu, setMenu] = useState(false);
  const history = useHistory()
  const location = useLocation()
  const userDet = useStore1Selector(userDetails);
  const userImg = "https://tourisms.herokuapp.com/img/users/";
  const pic = userDet?.data?.data?.photo;

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">

        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={!pic ? user1 : `${userImg}${pic}`} alt="" />
          <span className="text-white"> {userDet?.data?.data?.firstName} </span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/my-account"><i className="bx bx-user font-size-16 align-middle me-1" />My Account</DropdownItem>
          <div className="dropdown-divider" />

          <Link
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("user signed out");
                  history.replace(location.state?.from ?? "/login")
                  localStorage.removeItem('token');
                })
                .catch((error) => {
                  console.log("error", error);
                });
            }}

            className="dropdown-item"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /><span>Logout</span> </Link>
        </DropdownMenu>

      </Dropdown>
    </React.Fragment>
  )
}

export default ProfileMenu
