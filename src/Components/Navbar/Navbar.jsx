import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { PlayCircleFilled, SettingFilled, QuestionCircleFilled } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className={styles.navBar}>
            {/* <Link to="/settings" className={styles.title} style={{ textDecoration: 'none' }}><h1>SETTINGS</h1></Link> */}
            <Link to="/settings" className={styles.title} style={{ textDecoration: 'none' }}><SettingFilled /></Link>

            {/* <Link to="/" className={styles.title} style={{ textDecoration: 'none' }}><h1>PLAY</h1></Link> */}
            <Link to="/" className={styles.title} style={{ textDecoration: 'none' }}><PlayCircleFilled /></Link>

            {/* <Link to="/about" className={styles.title} style={{ textDecoration: 'none' }}><h1>ABOUT</h1></Link> */}
            <Link to="/about" className={styles.title} style={{ textDecoration: 'none' }}><QuestionCircleFilled /></Link>
        </div>
    )
}

export default Navbar;