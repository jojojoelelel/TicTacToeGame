import React, { useEffect, useState } from 'react'
import styles from '../styles/TicTacToe.module.css'
import { RedoOutlined } from '@ant-design/icons'

const TicTacToe = ({ box_array, bodyStyles, lock, setLock, count, setCount, data, setData, 
                    titleRef, setXWins, setOWins, won, setWon, setWinner, resetMatch, xColor, 
                    oColor, xWins, oWins, winner, winTally}) => {

    var bodyStyles = bodyStyles;
    bodyStyles.setProperty('--x-color', xColor);
    bodyStyles.setProperty('--o-color', oColor);

    const [matchHistory, setmatchHistory] = useState([])

    useEffect(() => {
        checkWin()
        console.log('matchhistory',matchHistory)
    },[data])
   
    const toggle = (e,num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0 && data[num]==='' && data[num]!=='o') {
            // e.target.innerHTML = `<img src='${cross_icon}'>`;
            e.target.innerHTML = `<h1>X</h1>`
            e.target.className = styles.boxes_x;
            setData(prevData => {
                const newData = [...prevData]; // Create a copy of the previous state array
                newData[num] = 'x'; // Update the desired element
                return newData; // Set the state with the updated array
            });
            setCount(++count);
        }
        else if (count%2!==0 && data[num]==='' && data[num]!=='x') {
            // e.target.innerHTML = `<img src='${circle_icon}'>`;
            e.target.innerHTML = `<h1>O</h1>`
            e.target.className = styles.boxes_o;
            setData(prevData => {
                const newData = [...prevData]; // Create a copy of the previous state array
                newData[num] = 'o'; // Update the desired element
                return newData; // Set the state with the updated array
            });
            setCount(++count);
        }
        checkWin()
    }

    const checkWin = () => {
        // Draw
        if(count===9) {
            titleRef.current.innerHTML = `Draw`
        }
       
        for (let i = 0 ; i<9 ; i++) {
            var xwinCount = 0
            var owinCount = 0
            if (i%3===0) { // 1st column. Horizontal win, n in a row
                // console.log(i)
                for (let j = i; j < i + 3-1; j++) {    
                    // i = 0, j = 0 1 
                    if (data[j]==='x' && data[j]===data[j+1]) {
                        // console.log(j, data[j], j+1, data[j+1])
                        xwinCount++
                    } else if (data[j]==='o' && data[j]===data[j+1]) {
                        // console.log(j, data[j], j+1, data[j+1])
                        owinCount++
                    }
                    // console.log(xwinCount, owinCount)
                    if (xwinCount === 2) {
                        wonGame(data[i], i, 'h')
                        // xwinCount = 0
                        break;
                    }
                    if (owinCount === 2) {
                        wonGame(data[i], i, 'h')
                        // owinCount = 0
                        break;
                    }
                }
                owinCount = 0
                xwinCount = 0
            }

            if (i<=3-1) { // 1st row. Vertical win, n in a row
                for (let j = i; j < i + (3*(3-1)); j += 3) {
                    if (data[j]==='x' && data[j]===data[j+3]) {
                        xwinCount++
                    }
                    else if (data[j]==='o' && data[j]===data[j+3]) {
                        owinCount++
                    }
                    if (xwinCount === 2) {
                        wonGame(data[i], i, 'v')
                        // xwinCount = 0
                        break;
                    }
                    if (owinCount === 2) {
                        wonGame(data[i], i, 'v')
                        // owinCount = 0
                        break;
                    }
                }
                owinCount = 0
                xwinCount = 0
            }
            // Diagonal win, 2 corners

            if( i === 0 ) { // Top left corner
                for(let j = i; j < i + ((3-1)*(3+1)); j+=(3+1)) {
                    if (data[j]==='x' && data[j]===data[j+(3+1)]) {
                        xwinCount++
                    }
                    else if (data[j]==='o' && data[j]===data[j+(3+1)]) {
                        owinCount++
                    }
                    if (xwinCount === 2) {
                        wonGame(data[i], i, 'dL')
                        // xwinCount = 0
                        break;
                    }
                    if (owinCount === 2) {
                        wonGame(data[i], i, 'dL')
                        // owinCount = 0
                        break;
                    }
                }
                owinCount = 0
                xwinCount = 0
            }

            if( i === (3-1) ) { // Top right corner
                for(let j = i; j < i + ((3-1)*(3-1)); j+=(3-1)) {
                    if (data[j]==='x' && data[j]===data[j+(3-1)]) {
                        xwinCount++
                    }
                    else if (data[j]==='o' && data[j]===data[j+(3-1)]) {
                        owinCount++
                    }
                    if (xwinCount === 2) {
                        wonGame(data[i], i, 'dR')
                        // xwinCount = 0
                        break;
                    }
                    if (owinCount === 2) {
                        wonGame(data[i], i, 'dR')
                        // owinCount = 0
                        break;
                    }
                }
                owinCount = 0
                xwinCount = 0
            }
        }
    }

    const wonGame = (winner, i, type) => {
        console.log(i, type)
        setLock(true)

        if (type==='h') {
            box_array[i].current.className = styles.winBoxes;
            box_array[i+1].current.className = styles.winBoxes;
            box_array[i+2].current.className = styles.winBoxes;
        } else if (type==='v') {
            box_array[i].current.className = styles.winBoxes;
            box_array[i+3].current.className = styles.winBoxes;
            box_array[i+6].current.className = styles.winBoxes;
        } else if (type==='dL') {
            box_array[i].current.className = styles.winBoxes;
            box_array[i+4].current.className = styles.winBoxes;
            box_array[i+8].current.className = styles.winBoxes;
        } else if (type==='dR') {
            box_array[i].current.className = styles.winBoxes;
            box_array[i+2].current.className = styles.winBoxes;
            box_array[i+4].current.className = styles.winBoxes;
        }

        if(winner==='x') 
        {
            // bodyStyles.setProperty('--winner-color', '#4cc0ff')
            bodyStyles.setProperty('--winner-color', xColor)
            // titleRef.current.innerHTML = `Congratulations: <span>X</span> wins`
            setmatchHistory(prevItems => [...prevItems, 'X'])
            setXWins(prevXWins => prevXWins + 1)
        }
        else 
        {
            bodyStyles.setProperty('--winner-color', oColor)
            // titleRef.current.innerHTML = `Congratulations: O wins`
            setmatchHistory(prevItems => [...prevItems, 'O'])
            setOWins(prevOWins => prevOWins + 1)
        }
    }

    const resetGame = () => {
        setLock(false);
        setCount(0);
        setData(['', '', '', '', '', '', '', '', '']);
        if(won) {
            resetMatch();
            setmatchHistory([]);
        }
        titleRef.current.innerHTML = 'Tic Tac Toe'
        // titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>'
        box_array.forEach((e)=>{
            e.current.innerHTML = ''
            e.current.className = styles.boxes
        })
      }

    useEffect(() => {
        if(count%2===0) 
        {
            // bodyStyles.setProperty('--hover-color', '#4cc0ff');
            bodyStyles.setProperty('--hover-color', xColor);
        }
        else 
        {
            // bodyStyles.setProperty('--hover-color', '#af36d4');
            bodyStyles.setProperty('--hover-color', oColor);
        }   
    },[count])


    return (
        <div className={styles.gameContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {(xWins + oWins === 0) ? (
                        <div className={styles.dotContainer}>
                            {Array.from({ length: winTally }).map((_, index) => (
                                <span key={index} className={styles.dotDeactivated}></span>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.dotContainer}>
                            {Array.from({ length: winTally }).map((_, index) => (
                                <span key={index} className={(matchHistory[index] === 'X') ? styles.xdotActivated : (matchHistory[index] === 'O') ? styles.odotActivated : styles.dotDeactivated}></span>
                            ))}
                        </div>
                    )}
                </h1>
            </div>
            <div className={styles.board}>
                <div className={styles.row1}>
                    <div className={styles.boxes} ref={box_array[0]} onClick={(e) => {toggle(e,0)}}></div>
                    <div className={styles.boxes} ref={box_array[3]} onClick={(e) => {toggle(e,3)}}></div>
                    <div className={styles.boxes} ref={box_array[6]} onClick={(e) => {toggle(e,6)}}></div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.boxes} ref={box_array[1]} onClick={(e) => {toggle(e,1)}}></div>
                    <div className={styles.boxes} ref={box_array[4]} onClick={(e) => {toggle(e,4)}}></div>
                    <div className={styles.boxes} ref={box_array[7]} onClick={(e) => {toggle(e,7)}}></div>
                </div>
                <div className={styles.row3}>
                    <div className={styles.boxes} ref={box_array[2]} onClick={(e) => {toggle(e,2)}}></div>
                    <div className={styles.boxes} ref={box_array[5]} onClick={(e) => {toggle(e,5)}}></div>
                    <div className={styles.boxes} ref={box_array[8]} onClick={(e) => {toggle(e,8)}}></div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.resetBtn} onClick={()=>{resetGame()}}><RedoOutlined /></button>
            </div>
        </div>
    )
}

export default TicTacToe;