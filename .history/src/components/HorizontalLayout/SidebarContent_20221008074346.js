import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
    const ref = useRef()

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
                parent2.classList.add("mm-show") // ul tag

                const parent3 = parent2.parentElement // li tag

                if (parent3) {
                    parent3.classList.add("mm-active") // li
                    parent3.childNodes[0].classList.add("mm-active") //a
                    const parent4 = parent3.parentElement // ul
                    if (parent4) {
                        parent4.classList.add("mm-show") // ul
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show") // li
                            parent5.childNodes[0].classList.add("mm-active") // a tag
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
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">{props.t("Main")} </li>
                        <li>
                            <Link to="/dashboard" className="waves-effect">
                                <i className="ti-user"></i>
                                <span>{props.t("My profile")}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/calendar" className=" waves-effect">
                                <i className="ti-calendar"></i>
                                <span>{props.t("My bookings")}</span>
                            </Link>
                        </li>

                        <li>
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
                        </li>
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
