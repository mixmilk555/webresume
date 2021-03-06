import { Anchor, Button, Drawer } from 'antd'
import React, { useState } from 'react'

const { Link } = Anchor;
export default function AppHeader() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo" >
                    <a href='/webresume/'>
                        <img src="https://i.ibb.co/QKTMCJF/Logo-Makr-5-Tz-Q4-C.png" style={{ maxWidth: '70%' }} alt="logo" border="0" />
                    </a>
                </div>
                <div className='mobileHidden'>
                    <Anchor targetOffset="79.69">
                        <Link href="#home" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#project" title="Project" />
                        <Link href="#resume" title="Resume" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer}>
                <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="79.69">
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#project" title="Project" />
                            <Link href="#resume" title="Resume" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}
