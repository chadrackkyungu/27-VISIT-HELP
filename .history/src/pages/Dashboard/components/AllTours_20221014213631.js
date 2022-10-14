import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import tour1 from "../../../assets/images/gallery/tour-1.svg"
import tour2 from "../../../assets/images/gallery/tour-2.svg"
import tour3 from "../../../assets/images/gallery/tour-3.svg"
import useFetch from "../../../hooks/useFecth";

function Cards() {

  const tourImg = "https://polar-basin-47052.herokuapp.com/img/tours/";

  const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);
  console.log(data);
  console.log(length);
  console.log(error);
  console.log(reFetch);

  return (
    <React.Fragment className="banner mt-5 mb-5">

      <p className="text-center  my-5 text-p">
        Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
      </p>

      <Row className='mt-5'>
        {
          data.map((tour, i) =>
            <Col md={4} key={i}>
              <Card className='tour-card'>
                <CardBody>
                  <div className='w-100 pb-4'>
                    <img src={`${tourImg}${tour.imageCover}`} alt="" className='w-100' />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Park virunga</h4>
                    <button className='btn btn-warning'>R 250</button>
                  </div>
                  <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
                    <p className='mt-2'>Ratings(45)</p>
                    <FcLike size={32} className="like-btn" />
                    <FcLikePlaceholder size={32} className="like-btn" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          )
        }


        {/* <Col md={4}>
          <Card className='tour-card'>
            <CardBody>
              <div className='w-100 pb-4'>
                <img src={tour2} alt="" className='w-100' />
              </div>
              <h4>Park virunga</h4>
              <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

              <div className="d-flex justify-content-between align-items-center">
                <Link to="/tour-details/2" className='btn btn-success'>View details</Link>
                <p className='mt-2'>Ratings(45)</p>
                <FcLike size={32} className="like-btn" />
                <FcLikePlaceholder size={32} className="like-btn" />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card className='tour-card'>
            <CardBody>
              <div className='w-100 pb-4'>
                <img src={tour3} alt="" className='w-100' />
              </div>

              <h4>Park virunga</h4>
              <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

              <div className="d-flex justify-content-between align-items-center">
                <Link to="/tour-details/3" className='btn btn-success'>View details</Link>
                <p className='mt-2'>Ratings(45)</p>
                <FcLike size={32} className="like-btn" />
                <FcLikePlaceholder size={32} className="like-btn" />
              </div>
            </CardBody>
          </Card>
        </Col> */}

      </Row>

    </React.Fragment>
  )
}

export default Cards