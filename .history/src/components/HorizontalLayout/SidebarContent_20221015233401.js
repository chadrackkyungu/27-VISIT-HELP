import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { useStore1Selector } from '../../index';
import { userDetails } from '../../Redux/Slices/userSlice'

const SidebarContent = props => {
    const ref = useRef()

    const userDet = useStore1Selector(userDetails);
    const userRole = userDet.data.data.role;
    console.log(userRole);

    useEffect(() => {
        const pathName = props.location.pathname

        const initMenu = () => {
            new MetisMenu("#side-menu")
            let matchingMenuItem = null
            const ul = document.getElementById("side-menu")
            const items = ul.getElementsByTagName("a")
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i]
                    break
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }
        initMenu()
    }, [props.location.pathname])

    useEffect(() => {
        ref.current.recalculate()
    })

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300
            }
        }
    }

    function activateParentDropdown(item) {
        item.classList.add("active")
        const parent = item.parentElement
        const parent2El = parent.childNodes[1]
        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show")
        }

        if (parent) {
            parent.classList.add("mm-active")
            const parent2 = parent.parentElement

            if (parent2) {
                parent2.classList.add("mm-show")

                const parent3 = parent2.parentElement

                if (parent3) {
                    parent3.classList.add("mm-active")
                    parent3.childNodes[0].classList.add("mm-active")
                    const parent4 = parent3.parentElement
                    if (parent4) {
                        parent4.classList.add("mm-show")
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show")
                            parent5.childNodes[0].classList.add("mm-active")
                        }
                    }
                }
            }
            scrollElement(item);
            return false
        }
        scrollElement(item);
        return false
    }

    return (
        <React.Fragment>
            <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled mt-5" id="side-menu">
                        <li className="menu-title">{props.t("Account")} </li>
                        {
                            userRole === "user" ? (<>
                                <li>
                                    <Link to="/my-profile" className="waves-effect">
                                        <i className="ti-user"></i>
                                        <span>{props.t("My Profile")}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-bookings" className="waves-effect">
                                        <i className="ti-user"></i>
                                        <span>{props.t("My Bookings")}</span>
                                    </Link>
                                </li>
                            </>
                            ) : null
                        }

                        {
                            userRole === "lead-guide" ? (
                                <>
                                    <li>
                                        <Link to="/lead-guide-profile" className="waves-effect">
                                            <i className="ti-user"></i>
                                            <span>{props.t("Lead guide profile")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/lead-guide-tours" className=" waves-effect">
                                            <i className="ti-calendar"></i>
                                            <span>{props.t("Lead guide tour")}</span>
                                        </Link>
                                    </li>

                                </>
                            ) : null
                        }


                        {
                            userRole === "admin" ? (
                                <>

                                    <li>
                                        <Link to="/admin-profile" className="waves-effect">
                                            <i className="ti-user"></i>
                                            <span>{props.t("Admin profile")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/my-lead-guide" className=" waves-effect">
                                            <i className="ti-calendar"></i>
                                            <span>{props.t("My lead guide")}</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/admin-tour" className=" waves-effect">
                                            <i className="ti-calendar"></i>
                                            <span>{props.t("Amin tour")}</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/my-tickets" className=" waves-effect">
                                            <i className="ti-calendar"></i>
                                            <span>{props.t("My tickets")}</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/add-tour" className=" waves-effect">
                                            <i className="ti-calendar"></i>
                                            <span>{props.t("Add tour")}</span>
                                        </Link>
                                    </li>
                                </>
                            ) : null
                        }



                        {/* <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="ti-package"></i>
                                <span>{props.t("UI Elements")}</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li>
                                    <Link to="/ui-alerts">{props.t("Alerts")}</Link>
                                </li>
                                <li>
                                    <Link to="/ui-buttons">{props.t("Buttons")}</Link>
                                </li>
                                <li>
                                    <Link to="/ui-cards">{props.t("Cards")}</Link>
                                </li>
                            </ul>
                        </li> */}


                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment>
    )
}

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))