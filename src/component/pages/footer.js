import React from 'react';
import { BackTop } from 'antd';
export default function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <a href='/'>
                        <img src="https://i.ibb.co/QKTMCJF/Logo-Makr-5-Tz-Q4-C.png" style={{ maxWidth: '50%', height: 'auto' }} alt="logo" border="0" />
                    </a>
                    <div style={{ fontSize: "0.5em" }}>CopyRight &copy; 2021</div>
                    <BackTop>
                        <i className="fas fa-arrow-circle-up fa-2x" style={{color:"aqua"}}></i>
                    </BackTop>
                </div>
            </div>
        </div>
    )
}
