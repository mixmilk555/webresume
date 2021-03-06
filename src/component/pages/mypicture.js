import React from 'react'
// import { Carousel } from 'antd';

export default function MyPicture() {
    return (
        <div id="mypicture" className="heroBlock">
            <div className="container-fluid" style={{ height: '100%' }}>
                <div style={{ width: '40%', margin: "0 auto" }}>
                    <img src="https://i.ibb.co/yXZzp3j/3.jpg" alt="myPicture" style={{ width: '100%', height: 'auto',borderRadius:'10%' }} />
                    <h2 data-text="Makawan&nbsp;Maneephong">Makawan&nbsp;Maneephong</h2>
                </div>
            </div>
        </div>
    )
}
