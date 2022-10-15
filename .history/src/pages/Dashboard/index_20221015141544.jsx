import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import AllTours from "./components/AllTours";
import Newslatter from "./components/Newslatter";
import SlideBanner from './Slide-banner';

const Dashboard = () => {
  const [menu, setMenu] = useState(false)

  const toggle = () => {
    setMenu(!menu)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Visit-Help</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <SlideBanner />


            <h5 className="text-center  mt-5">
              Date and time data is commonly managed by database systems and is incredibly important, but can often be trickier to handle correctly than it initially appears. Databases must be able to store date and time data in clear, unambiguous formats, transform that data into user-friendly formats to interact with client applications, and perform time-based operations taking into account complexities like different timezones and changes in daylight savings time.
            </h5>

          </div>

          <AllTours />

          {/* <Newslatter /> */}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard