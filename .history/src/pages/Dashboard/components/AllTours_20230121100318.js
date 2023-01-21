import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import "../Style.scss";
import { BsArrowRight } from "react-icons/bs";
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

function Cards() {

  const user = useStore1Selector(userDetails);
  const tourImg = "https://tourism.up.railway.app/img/imageCover/";
  const { data } = useFetch(`https://tourism.up.railway.app/api/v1/tours`, null);

  if (!data) { return <Loading /> }
  if (data.length <= 0) { return <Loading /> }

  return (
    <React.Fragment className="banner mt-5 mb-5">
      <Row className='mt-5'>
        {
          data?.map((tour, i) => {
            return (
              <Col md={4} key={i}>
                <Card className='tour-card'>
                  <CardBody>
                    <div className='pb-4 image-cover'>
                      <img src={`${tourImg}${tour.imageCover}`} alt="" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5>{tour.name}</h5>
                      <h5 className="text-success">R {tour.price}</h5>
                    </div>
                    <p className='tour-description'> {tour.description} </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/tour-details/${tour._id}`} className=''>View details <BsArrowRight /> </Link>
                      <p className='mt-2'>Ratings({tour.ratingsQuantity})</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )
          }
          )
        }

      </Row>

    </React.Fragment>
  )
}

export default Cards