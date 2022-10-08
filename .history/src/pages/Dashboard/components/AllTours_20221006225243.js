import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"

function Cards() {
  return (
    <React.Fragment className="banner mt-5 mb-5">

      <p className="text-center  my-5 text-p">
        Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
      </p>
      <h2>Natures</h2>

      <Row>
        <Col md={4}>
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Col>
      </Row>


    </React.Fragment>
  )
}

export default Cards