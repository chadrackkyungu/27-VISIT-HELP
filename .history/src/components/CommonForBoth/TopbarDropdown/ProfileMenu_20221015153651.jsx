import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { Link } from "react-router-dom"
import user1 from "../../../assets/images/users/avatar.webp"
import { useHistory, useLocation } from "react-router-dom"
import { userDetails } from '../../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../../index';
import { successMessage, warningMessage } from "../../components/Toast"

const ProfileMenu = () => {

  const [menu, setMenu] = useState(false);
  const history = useHistory()
  const location = useLocation()
  const userDet = useStore1Selector(userDetails);
  const userImg = "https://tourisms.herokuapp.com/img/users/";
  const pic = userDet?.data?.data?.photo;
  const token = userDet?.token

  const LogoutHandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = "";

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://tourisms.herokuapp.com/api/v1/users/logout", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          dispatch(Login(result));
          successMessage("You have successfully logged in!");
          setloadBtn(false);
        }
        if (result.status === 'fail') {
          warningMessage("Try again something went wrong");
          setloadBtn(false);
        }
      })
      .catch(error => {
        warningMessage(`Something went wrong try again ${error.message}`);
        setloadBtn(false);
      });
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
