import React from 'react'

export default function MyContact() {
    return (
        <div id="contact" className="block  bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contact</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
                    <p><i class="fas fa-phone fa-2x"></i> &nbsp;&nbsp;(+66)616844028</p>
                    <p><i class="fas fa-envelope-square fa-2x"></i>&nbsp;&nbsp;&nbsp;  mixmilk777@gmail.com</p>
                </div>
                <div className="logoContact">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <a href="https://web.facebook.com/mixoo.aimlessly/" target="_bank"><i className="fab fa-facebook-f fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/makawan-maneephong-38b8a81a5/" target="_bank"><i className="fab fa-linkedin-in fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mixma1/" target="_bank"><i className="fab fa-instagram fa-2x"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/mixmilk555" target="_bank"><i class="fab fa-github fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
