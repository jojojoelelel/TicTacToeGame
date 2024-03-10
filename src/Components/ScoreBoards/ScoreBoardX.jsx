import React, { useEffect, useState } from 'react'
import styles from '../styles/ScoreBoardX.module.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/x.png'

const ScoreBoard = ({oWins, xWins, won, setWon, winner, setWinner, winTally, xColor, oColor}) => {

    var bodyStyles = document.body.style;
    var xHeight = 0
    var oHeight = 0
    var bodyStyles = bodyStyles;

    bodyStyles.setProperty('--x-color', xColor);

    useEffect(() => {
        xHeight = xWins * (100 / Math.ceil(winTally / 2))
        oHeight = oWins * (100 / Math.ceil(winTally / 2))
        bodyStyles.setProperty('--x-height', `${xWins+oWins===0 ? '0' : xHeight}%`)
        bodyStyles.setProperty('--x-opacity', `${xHeight/100}`)
        checkWin()
    }, [xWins, oWins])

    const checkWin = () => {
        if(xWins === Math.ceil(winTally / 2)) { // x wins
            setWon(true)
            setWinner('X')
            bodyStyles.setProperty('--winner-color', xColor)
        } else if (oWins === Math.ceil(winTally / 2)) { // o wins
            setWon(true)
            setWinner('O')
        } else if ((xWins + oWins) === winTally) { // max games played
            if (xWins > oWins) {
                setWon(true)
                setWinner('X')
                bodyStyles.setProperty('--winner-color', xColor)
            } else {
                setWon(true)
                setWinner('O')
            }
        }
    }

    return (
        <div className={styles.screen}>
            <div className={styles.textContainer}>
                {/* <h1 className={styles.title}>{won ? <span><span className={styles.winnerGlyph}>{winner}</span> wins</span> : `Game ${xWins+oWins+1}`}</h1> */}
                <h1 className={styles.title}>
                    <div className={(xWins > 0) ? styles.winnerGlyph_activated : styles.winnerGlyph_deactivated}></div>
                </h1>
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.xContainer}>
                    <div className={styles.xColumn}></div>
                </div>
                {/* <div className={styles.oContainer}>
                    <div className={styles.oColumn}></div>
                </div> */}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.xtitle}>X</h1>
                {/* <h1 className={styles.otitle}>O</h1> */}
            </div>
        </div>
    )
}

export default ScoreBoard;