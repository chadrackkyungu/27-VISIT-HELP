import React, { useState, useRef } from "react";
import { AvForm } from "availity-reactstrap-validation"
import { Container, Card, CardBody, Spinner, Row, Col, Button } from "reactstrap"
import Image from "../../assets/images/gallery/placeholder.svg";
import Form1 from "./components/UpdateTour";
import Form2 from "./components/AddTourFrom2";
import Layout from "../Layout"
import { Link, useHistory, useParams } from "react-router-dom";
import { userDetails } from '../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../index';
import { successMessage, warningMessage } from "../../components/Toast"
import useFetch from "../../hooks/useFecth";
import Loading from '../../components/Loading';

const UpdateTour = () => {
    const { id } = useParams();
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const tourImages = "https://tourisms.herokuapp.com/img/images/";
    const { data, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);

    const filterTour = data.filter(tour => {
        return tour.id === id
    })

    const history = useHistory()
    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token
    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profile1, setProfile1] = useState();
    const [profile2, setProfile2] = useState();
    const [profile3, setProfile3] = useState();
    const [profile4, setProfile4] = useState();
    const [profileServer, setProfileServer] = useState();
    const [profileServer1, setProfileServer1] = useState();
    const [profileServer2, setProfileServer2] = useState();
    const [profileServer3, setProfileServer3] = useState();
    const [profileServer4, setProfileServer4] = useState();

    console.log(filterTour[0]?.startDates[0])
    console.log(filterTour[0]?.startDates[1])

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        console.log(values)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();

        formdata.append("startDates", !values.startDate ? filterTour[0]?.startDates[0] : values.startDate);
        formdata.append("startDates", !values.endDate ? filterTour[0]?.startDates[0] : values.endDate);
        formdata.append("name", values.tourName);
        formdata.append("price", values.price);
        formdata.append("duration", values.duration);
        formdata.append("maxGroupSize", values.groupSize);
        formdata.append("difficulty", values.type);
        formdata.append("priceDiscount", values.priceDiscount);
        formdata.append("summary", values.summary);
        formdata.append("description", values.description);

        formdata.append("imageCover", !profileServer ? filterTour[0]?.imageCover : profileServer);
        formdata.append("images", !profileServer1 ? filterTour[0]?.images[0] : profileServer1);
        formdata.append("images", !profileServer2 ? filterTour[0]?.images[1] : profileServer2);
        formdata.append("images", !profileServer3 ? filterTour[0]?.images[2] : profileServer3);
        formdata.append("images", !profileServer4 ? filterTour[0]?.images[3] : profileServer4);

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`https://tourisms.herokuapp.com/api/v1/tours/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(" Result : ", result);
                if (result.status === 'success') {
                    successMessage("Successfully updated!");
                    setloadBtn(false)
                    reFetch();
                    window.setTimeout(() => {
                        history.push("/admin-tour");
                    })
                }
                if (result.status === 'fail') {
                    warningMessage(result.message);
                    setloadBtn(false)
                }
                if (result.status === 'error') {
                    warningMessage(result.message);
                    setloadBtn(false)
                }
            })
            .catch(error => {
                warningMessage(`Something went wrong try again ${error.message}`);
                setloadBtn(false)
            });
    }

    const refFileUpload = useRef(null);
    const refFileUpload1 = useRef(null);
    const refFileUpload2 = useRef(null);
    const refFileUpload3 = useRef(null);
    const refFileUpload4 = useRef(null);

    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick1 = () => {
        if (refFileUpload1) {
            refFileUpload1.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick2 = () => {
        if (refFileUpload2) {
            refFileUpload2.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick3 = () => {
        if (refFileUpload3) {
            refFileUpload3.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick4 = () => {
        if (refFileUpload4) {
            refFileUpload4.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb1 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer1(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile1(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer2(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile2(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb3 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer3(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile3(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb4 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer4(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile4(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };


    if (!data) { return <Loading /> }

    return (
        <Layout>
            <Container fluid>
                <Link to="/admin-tour" className="btn text-white mb-3"> Back </Link>
                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <Card>
                        <CardBody>

                            <Col md={12}>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
                                    <img src={profile === undefined ? `${tourImg}${filterTour[0]?.imageCover}` : profile} alt="user" width={900} height={350} className="rounded" />
                                    <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                        onClick={onThumbChangeClick}
                                    > <i className="ion ion-md-image"></i>
                                    </Button>
                                    <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                </div>
                            </Col>

                            <Form1 details={filterTour} />
                            {/* <Form2 /> */}

                            <Row>
                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile1 === undefined ? `${tourImages}${filterTour[0]?.images[0]}` : profile1} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick1}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload1} className="file-upload d-none" accept="image/*" onChange={changeThumb1} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile2 === undefined ? `${tourImages}${filterTour[0]?.images[1]}` : profile2} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick2}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload2} className="file-upload d-none" accept="image/*" onChange={changeThumb2} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile3 === undefined ? `${tourImages}${filterTour[0]?.images[2]}` : profile3} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick3}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload3} className="file-upload d-none" accept="image/*" onChange={changeThumb3} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile4 === undefined ? `${tourImages}${filterTour[0]?.images[3]}` : profile4} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick4}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload4} className="file-upload d-none" accept="image/*" onChange={changeThumb4} />
                                    </div>
                                </Col>

                            </Row>

                            <div className="text-center mt-5">
                                <button className="btn text-white mt-4 w-50" type="submit" >
                                    {!loadBtn ? <span className="me-2">Submit</span> : null}
                                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                                </button>
                            </div>

                        </CardBody>
                    </Card>
                </AvForm>
            </Container>
        </Layout>
    )
}

export default UpdateTour