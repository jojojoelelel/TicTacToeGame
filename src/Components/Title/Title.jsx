import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Title.module.css'

const Title = ({titleRef, winner}) => {

    useEffect(() => {
        if (winner === 'X') {
            titleRef.current.innerHTML = `Congratulations: X wins`
        } else if (winner === 'O') {
            titleRef.current.innerHTML = `Congratulations: O wins`
        }
    })

    return (
        <div className={styles.title}>
                {/* <h1 ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1> */}
                <h1 ref={titleRef}>Tic Tac Toe</h1>
        </div>
    )
}

export default Title;