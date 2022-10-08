import React from 'react'

function tourContent() {
    return (
        <div>
            <h2> THE PARK CAMPER TOUR </h2>

            <Row>
                <Col md={6}>
                    <h4> QUICK FACTS </h4>
                    <p> <b>NEXT DATE </b> : August 2021 </p>
                    <p> <b>DIFFICULTY </b> : Medium </p>
                    <p> <b>PARTICIPANTS </b> : 20 People </p>
                    <h4> YOUR TOUR GUIDES </h4>
                    <div className="guide-container">
                        <div>
                            <img src="" alt="" />
                            <p>Steven Miller</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Steven Miller</p>
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                    <h4> ABOUT THE PARK CAMPER TOUR </h4>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                        page editors now use Lorem Ipsum as their default model text, and a search  </p>
                </Col>
            </Row>
        </div>
    )
}

export default tourContent