import React from 'react';
import MyPicture from '../component/pages/mypicture';
import AppAbout from '../component/pages/about';
import MyProject from '../component/pages/project';
import MyResume from '../component/pages/resume';
import MyContact from '../component/pages/contact';
export default function AppHome() {
    return (
        <div id="home" className="main">
            <MyPicture />
            <AppAbout />
            <MyProject />
            <MyResume />
            <MyContact />
        </div>
    )
}
