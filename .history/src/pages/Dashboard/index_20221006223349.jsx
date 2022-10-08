import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import Cards from "./Cards";
import Newslatter from "./Newslatter";
import SlideBanner from './Slide-banner';

import { perf, analytics } from '../../Database/init-firebase'
import { logEvent } from "firebase/analytics";

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    // analytics.logEvent('Home_page_visited')
    logEvent(analytics, 'Home Page Visited', { name: 'lever_puzzle' });
  })

  //this event trigger when the user done play a game
  logEvent(analytics, 'Home Page Visited', { name: 'lever_puzzle' }, console.log("visited"));

  // this event trigger when you click on a product
  logEvent(analytics, 'select_content', {
    content_type: 'image',
    content_id: 'P12453',
    items: [{ name: 'Kittens' }]
  });




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