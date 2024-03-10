import React, { useState, useRef } from 'react'
import TicTacToe from './Components/TicTacToe/TicTacToe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './Components/styles/App.module.css'
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import ScoreBoardO from './Components/ScoreBoards/ScoreBoardO';
import ScoreBoardX from './Components/ScoreBoards/ScoreBoardX';
import Settings from './Components/Settings/Settings';
import About from './Components/About/About';

function App() {

  const [data, setData] = useState(Array(9).fill(''))
  const [winTally, setwinTally] = useState(3)
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)
  const [won, setWon] = useState(false)
  const [winner, setWinner] = useState('')
  const [xColor, setxColor] = useState('#4cc0ff')
  const [oColor, setoColor] = useState('#af36d4')

  const titleRef = useRef(null)

  let box0 = useRef('')
  let box1 = useRef('')
  let box2 = useRef('')
  let box3 = useRef('')
  let box4 = useRef('')
  let box5 = useRef('')
  let box6 = useRef('')
  let box7 = useRef('')
  let box8 = useRef('')

  let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

  var bodyStyles = document.body.style;

  const resetMatch = () => {
      setWon(false);
      setWinner('');
      setXWins(0);
      setOWins(0);
      titleRef.current.innerHTML = 'Tic Tac Toe'
  }

  return (
    <Router basename="/TicTacToeGame">
      <div className={styles.screen}>
        <div className={styles.header}>
          <Title titleRef={titleRef} winner={winner}/>
          <Navbar />
        </div>
            <Routes>
                <Route exact path='/' element={
                  <React.Fragment>
                    <div className={styles.body}>
                      <ScoreBoardX xWins={xWins} oWins={oWins} 
                        won={won} setWon={setWon} winner={winner} 
                        setWinner={setWinner} bodyStyles={bodyStyles} 
                        winTally={winTally} xColor={xColor} 
                        oColor={oColor}
                      />
                      <TicTacToe
                        box_array={box_array} bodyStyles={bodyStyles} 
                        lock={lock} setLock={setLock} 
                        count={count} setCount={setCount} 
                        data={data} setData={setData} 
                        titleRef={titleRef} setXWins={setXWins}
                        setOWins={setOWins} setWon={setWon}
                        setWinner={setWinner} won={won}
                        resetMatch={resetMatch} 
                        xColor={xColor} oColor={oColor}
                        xWins={xWins} oWins={oWins}
                        winner={winner} winTally={winTally}
                      />
                      <ScoreBoardO xWins={xWins} oWins={oWins} 
                      won={won} setWon={setWon} winner={winner} 
                      setWinner={setWinner} bodyStyles={bodyStyles} 
                      winTally={winTally} xColor={xColor} 
                      oColor={oColor}
                      />
                    </div>
                  </React.Fragment>
                }/>
                <Route exact path='/settings' element={
                  <Settings 
                  winTally={winTally} setwinTally={setwinTally} 
                  xColor={xColor} oColor={oColor} 
                  setxColor={setxColor} setoColor={setoColor}
                  bodyStyles={bodyStyles} 
                  />}
                />
                <Route exact path ='/about' element={
                  <About />
                  }
                />
              </Routes>
      </div>
  </Router>
  );
}

export default App;
