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

                </Col>
            </Row>
        </div>
    )
}

export default tourContent