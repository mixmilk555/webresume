import React from 'react'
// import { Carousel } from 'antd';

export default function MyPicture() {
    return (
        <div id="mypicture" className="heroBlock">
            <div className="container-fluid" style={{ height: '100%' }}>
                <div style={{ width: '50%', margin: "0 auto" }}>
                    <img src="https://i.ibb.co/yXZzp3j/3.jpg" alt="myPicture" style={{marginTop:'15%', width: '100%', height: 'auto', borderRadius: '10%' }} />
                    <p style={{ textAlign:'center',width: 'auto', wordWrap: 'break-word' }} data-text="Makawan&nbsp;&nbsp;&nbsp;Maneephong">Makawan&nbsp;&nbsp;&nbsp;Maneephong</p>
                </div>
            </div>
        </div>
    )
}
