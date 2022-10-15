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


            <h5 className="text-center  my-5 text-p">
              Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
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