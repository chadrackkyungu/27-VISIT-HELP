import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import Cards from "./components/AllTours";
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
          </div>

          <Cards />

          <Newslatter />

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard