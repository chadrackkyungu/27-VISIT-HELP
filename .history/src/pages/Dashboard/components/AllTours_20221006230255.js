import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import tour1 from "../../../assets/images/gallery/tour-1.svg"
import tour2 from "../../../assets/images/gallery/tour-2.svg"
import tour3 from "../../../assets/images/gallery/tour-3.svg"

function Cards() {
  return (
    <React.Fragment className="banner mt-5 mb-5">

      <p className="text-center  my-5 text-p">
        Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
      </p>
      <h3>Natures</h3>

      <Row className='mt-5'>
        <Col md={4}>
          <Card>
            <CardBody>
              <div className='w-100 pb-4'>
                <img src={tour1} alt="" className='w-100' />
              </div>
              <h4>Park virunga</h4>
              <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</small>

              <Link to="/#" className='btn btn-success'>View details</Link>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <div>
                <img src={tour2} alt="" />
              </div>
              <h4>Park virunga</h4>
              <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</small>

              <Link to="/#" className='btn btn-success'>View details</Link>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <div>
                <img src={tour3} alt="" />
              </div>
              <h4>Park virunga</h4>
              <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</small>

              <Link to="/#" className='btn btn-success'>View details</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>


    </React.Fragment>
  )
}

export default Cards