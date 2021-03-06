import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

export default function MyProject() {
    return (
        <div id="project" className="block  bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Project</h2>
                </div>
                <Row justify="center">
                    <Col >
                    <a href='https://github.com/mixmilk555/ProjectCodeCamp6' target="blank">
                        <Card
                            hoverable
                            style={{ width: '100%',border:"0.3vw solid rgba(201, 76, 76, 0.3)",borderRadius:'10px'}}
                            cover={<img src="https://i.ibb.co/zsML7jC/os99JZ.png" alt="Web Novel" />}>
                            <Meta style={{textAlign:'center'}} title="Web Novel Project" />
                        </Card>
                        </a>
                    </Col>              
                </Row>
            </div>
        </div>
    )
}