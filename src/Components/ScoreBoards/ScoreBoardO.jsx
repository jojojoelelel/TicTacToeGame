import React, { useEffect, useState } from 'react'
import styles from '../styles/ScoreBoardO.module.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/x.png'

const ScoreBoard = ({oWins, xWins, won, setWon, winner, setWinner, winTally, xColor, oColor}) => {

    var bodyStyles = document.body.style;
    var xHeight = 0
    var oHeight = 0
    var bodyStyles = bodyStyles;

    // bodyStyles.setProperty('--x-color', xColor);
    bodyStyles.setProperty('--o-color', oColor);

    useEffect(() => {
        xHeight = xWins * (100 / Math.ceil(winTally / 2))
        oHeight = oWins * (100 / Math.ceil(winTally / 2))
        bodyStyles.setProperty('--o-height', `${xWins+oWins===0 ? '0' : oHeight}%`)
        bodyStyles.setProperty('--o-opacity', `${oHeight/100}`)
        checkWin()
    }, [xWins, oWins])

    const checkWin = () => {
        if(xWins === Math.ceil(winTally / 2)) { // x wins
            setWon(true)
            setWinner('X')
        } else if (oWins === Math.ceil(winTally / 2)) { // o wins
            setWon(true)
            setWinner('O')
            bodyStyles.setProperty('--winner-color', oColor)
        } else if ((xWins + oWins) === winTally) { // max games played
            if (xWins > oWins) {
                setWon(true)
                setWinner('X')
            } else {
                setWon(true)
                setWinner('O')
                bodyStyles.setProperty('--winner-color', oColor)
            }
        }
    }

    return (
        <div className={styles.screen}>
            <div className={styles.textContainer}>
                {/* <h1 className={styles.title}>{won ? <span><span className={styles.winnerGlyph}>{winner}</span> wins</span> : `Game ${xWins+oWins+1}`}</h1> */}
                <h1 className={styles.title}>
                    <div className={(oWins > 0) ? styles.winnerGlyph_activated : styles.winnerGlyph_deactivated}></div>
                </h1>
            </div>
            <div className={styles.columnContainer}>
                {/* <div className={styles.xContainer}>
                    <div className={styles.xColumn}></div>
                </div> */}
                <div className={styles.oContainer}>
                    <div className={styles.oColumn}></div>
                </div>
            </div>
            <div className={styles.textContainer}>
                {/* <h1 className={styles.xtitle}>X</h1> */}
                <h1 className={styles.otitle}>O</h1>
            </div>
        </div>
    )
}

export default ScoreBoard;