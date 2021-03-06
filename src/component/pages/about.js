import React from 'react';
import { Row, Col } from 'antd';

export default function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About me</h2>
                    <p>Life is a journey</p>
                </div>
                <div className="contentHolder">
                    <p>I love exploring new things, challenges. I think programming is interesting and challenging, i’m keen to learn more about it so I decided to apply “codecamp 6 online”. I hope to learn something new about this career path.</p>
                </div>
                <div className="titleHolder">
                    <h2>Skills</h2>
                </div>
                <div className="content" >
                    <Row gutter={[16, 40]} justify='space-between'>
                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fab fa-react fa-5x"></i></Col>
                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fab fa-node fa-5x" ></i></Col>
                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fab fa-html5 fa-5x"></i></Col>

                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fab fa-css3-alt fa-5x"></i></Col>
                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fab fa-js fa-5x"></i></Col>
                        <Col  xs={10} sm={10} md={10} lg={8} xl={8} xxl={8}><i className="fas fa-database fa-5x"></i></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
