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

const ProfileMenu = () => {

  const [menu, setMenu] = useState(false);
  const history = useHistory()
  const location = useLocation()
  const userDet = useStore1Selector(userDetails);
  const userImg = "https://tourisms.herokuapp.com/img/users/";
  const pic = userDet?.data?.data?.photo;

  const LogoutHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDVjZTcwMzZjZWUyN2M4YzUyZTdlMiIsImlhdCI6MTY2NTg0MDczMCwiZXhwIjoxNjczNjE2NzMwfQ.ZmOYoAQP1otOdXbdqSIP7Ww-t6G88y7Y_Oek2plQwIY");
    myHeaders.append("Cookie", "jwt=loggedout");

    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://tourisms.herokuapp.com/api/v1/users/logout", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

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

          <Link onClick={LogoutHandler}
            className="dropdown-item"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /><span>Logout</span>
          </Link>
        </DropdownMenu>

      </Dropdown>
    </React.Fragment>
  )
}

export default ProfileMenu
