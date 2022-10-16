import React, { useState, useEffect } from "react";
import { AvForm } from "availity-reactstrap-validation"
import MetaTags from 'react-meta-tags';
import { Container, Card, CardBody, Spinner } from "reactstrap"
import Form1 from "./components/UpdateTour";
import Form2 from "./components/UpdateForm2";
import Layout from "../Layout"
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFecth";
import Loading from '../../components/Loading';
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";

const UpdateTourComp = () => {

    const user = useStore1Selector(userDetails);
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);

    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)
        console.log(values)
    }

    return (
        <Layout>
            <Container fluid>
                <Link to="/admin-tour" className="btn text-white mb-3"> Back </Link>
                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <Card>
                        <CardBody>
                            <Form1 />
                            <Form2 />
                            <button className="btn text-white mt-4" type="submit" onClick={() => setSubmit(true)} >
                                {!loadBtn ? <span className="me-2">Submit</span> : null}
                                {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                            </button>
                        </CardBody>
                    </Card>
                </AvForm>
            </Container>
        </Layout >
    )
}

export default UpdateTourComp