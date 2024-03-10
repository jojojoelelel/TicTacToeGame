import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.aboutScreen}>
            <div className={styles.aboutContainer}>
            <h1>About</h1>
                <span>
                    Welcome to my Tic Tac Toe game! This classic game, also known as "Xs and Os" or "Noughts and Crosses," is a simple yet entertaining game suitable for players of all ages.
                </span>
            <h2>Objective</h2>
                <span>
                    The objective of Tic Tac Toe is to be the first player to form a line of three of your symbols (either X or O) horizontally, vertically, or diagonally on the game board.
                </span>
            <h2>How to Play</h2>
                <span>
                    <ol>
                        <li>
                            To start the game, two players take turns marking empty squares on a 3x3 grid.
                        </li>
                        <li>
                            The first player typically uses "X," and the second player uses "O."
                        </li>
                        <li>
                            Players take turns placing their symbols on the grid until one player achieves a line of three consecutive symbols and wins.
                        </li>
                        <li>
                            A full board without any lines of three consecutive symbols results in a draw.
                        </li>
                    </ol>
                </span>
            <h2>Features</h2>
                <div className={styles.featuresContainer}>
                    <ul>
                        <li>
                            Built-in scoring system to keep track of wins and draws.
                        </li>
                        <li>
                            Customizable settings to adjust series length and player colours.
                        </li>
                    </ul>
                </div>
            <h2>Developers</h2>
                <span>
                    This Tic Tac Toe game was developed by me. I am passionate about creating fun and engaging webapps with visually pleasing design. 
                </span>
                <span>
                    Thank you for choosing our Tic Tac Toe game. Have fun playing!
                </span>
            </div>
        </div>
    )
}

export default About;