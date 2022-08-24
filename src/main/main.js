import './style.css'
import { useState,useEffect } from 'react'
import LeftSideBar from './left-side-bar/leftSideBar'
import RightSideBar from './right-side-bar/rightSideBar'
import Hero from './hero/hero'

const Main = () => {

  const [turn,setTurn] = useState("Circle")
  const [moves,setMoves] = useState(0)
  const [boardPlay, setBoardPlay] = useState([false,false,false,false,false,false,false,false])
  const [boardPositions, setboardPositions] = useState(["None","None","None","None","None","None","None","None","None"])
  const [selection,setSelection] = useState(false)
  const [frequency, setfrequency] = useState({'left-1':0,'left-2':0,'left-3':0,'left-4':0,'right-1':0,'right-2':0,'right-3':0,'right-4':0})
  //id win conditions //1 2 3 -- 4 5 6 -- 7 8 9  //1 4 7 -- 2 5 8 -- 3 6 9 //1 5 9 -- 3 5 7
  const [win_positions, setwin_Positions] = useState([[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]])
  //r1c1 = id1 ; r1c2 = id2 ; r2c1 = id4 ....

  const id_to_width = {'left-1':25,'left-2':35,'left-3':45,'left-4':55,'right-1':25,'right-2':35,'right-3':45,'right-4':55}
  const left = document.querySelectorAll('.left')
  const right = document.querySelectorAll('.right')

  //to clear the board
  function clearBoard(){
    for(let i=1;i<10;i++){
        document.querySelector(`.circle${i}`).style.display = "none"
        document.querySelector(`.cross${i}`).style.display = "none"
        document.querySelector('.right-side-bar').style.opacity = "1.0"
        document.querySelector('.left-side-bar').style.opacity = "1.0"
        boardPlay[i-1] = false;
    }
    setMoves(0)
    setboardPositions(["None","None","None","None","None","None","None","None","None"])
    setfrequency({'left-1':0,'left-2':0,'left-3':0,'left-4':0,'right-1':0,'right-2':0,'right-3':0,'right-4':0})
}
  //play function for main board
  function play(event){
    let eventId = event.target.id
    if (selection !== false){
        if(frequency[selection] === 2){
            alert("Cant play that size more than 2 times")
            return
        }
        //if seletected box is already filled
        if(boardPlay[eventId-1] === true){
            if (parseInt(selection.slice(-1)) <= parseInt((boardPositions[eventId-1]).slice(-1))){
                return
            } else {

             }
        }
        boardPlay[eventId-1] = true
        setMoves(moves + 1)
        if(turn === "Circle"){
            document.querySelector(`.cross${event.target.id}`).style.display = "none";
            document.querySelector(`.circle${event.target.id}`).style.display = "block";
            document.querySelector(`.circle${event.target.id}`).style.width = `${id_to_width[selection]}px`;
            boardPositions[eventId-1] = `circle${selection.slice(-1)}`;
            document.querySelector('.right-side-bar').style.opacity = "1.0";
            document.querySelector('.left-side-bar').style.opacity = "0.5";
        } else {
            document.querySelector(`.circle${event.target.id}`).style.display = "none";
            document.querySelector(`.cross${event.target.id}`).style.display = "block";
            document.querySelector(`.cross${event.target.id}`).style.width = `${id_to_width[selection]}px`;
            boardPositions[eventId-1] = `cross${selection.slice(-1)}`;
            document.querySelector('.left-side-bar').style.opacity = "1.0";
            document.querySelector('.right-side-bar').style.opacity = "0.5";
        }

        frequency[selection] += 1
        checkWin();
    } else { return alert("Select something.") }
  }

  //left & right sidebar selection
  function select(event){
    if (selection === false){
        if ((turn === "Circle")&&(event.target.className === "left")){
        document.querySelector(`#${event.target.id}`).classList.add('selected')
        setSelection(`${event.target.id}`)
        }
        if ((turn === "Cross")&&(event.target.className === "right")){
            document.querySelector(`#${event.target.id}`).classList.add('selected')
            setSelection(`${event.target.id}`)
            }
        } else {
            if ((turn === "Circle")&&(event.target.className === "left")){
                for(let i=0;i<4;i++){left[i].classList.remove('selected')}
                document.querySelector(`#${event.target.id}`).classList.add('selected')
                setSelection(`${event.target.id}`)
                }
            if ((turn === "Cross")&&(event.target.className === "right")){
                for(let i=0;i<4;i++){right[i].classList.remove('selected')}
                document.querySelector(`#${event.target.id}`).classList.add('selected')
                setSelection(`${event.target.id}`)
                }
        }
    }

    //to check if someone wins
  let checkWin = ()=>{
    let circle = []
    let cross = []
    for(let i=0;i<boardPositions.length;i++){
        if ((boardPositions[i]).slice(0,6) === "circle"){ circle = circle.concat([i+1]) }
        if ((boardPositions[i]).slice(0,5) === "cross"){ cross = cross.concat([i+1]) }
    }
    circle.sort();
    cross.sort();
    win_positions.forEach((item)=>{
        for(let i=0; i<(circle.length - 2); i++){
            if(circle[i] === item[0]){
                if((circle.indexOf(item[1]) !== -1) && (circle.indexOf(item[2]) !== -1)){
                    alert('Circle won the game')
                    document.querySelector('.right-side-bar').style.opacity = "1.0"
                    document.querySelector('.left-side-bar').style.opacity = "1.0"
                    return
                }
            }
        }
        for(let i=0; i<(cross.length - 2); i++){
            if(cross[i] === item[0]){
                if((cross.indexOf(item[1]) !== -1) && (cross.indexOf(item[2]) !== -1)){
                    alert('Cross won the game')
                    document.querySelector('.right-side-bar').style.opacity = "1.0"
                    document.querySelector('.left-side-bar').style.opacity = "1.0"
                    return
                }
            }
        }
        if(boardPositions.indexOf("None") === -1){
            alert("It's a draw Idiots")
            document.querySelector('.right-side-bar').style.opacity = "1.0"
            document.querySelector('.left-side-bar').style.opacity = "1.0"
            clearBoard()
            return
        }
    })
  }

  useEffect(()=>{
    const left = document.querySelectorAll('.left')
    const right = document.querySelectorAll('.right')
    if (moves % 2 === 0){
        setTurn("Circle")
        //document.getElementsByClassName('right-side-bar').style.opacity = "0.5";
    } else {
        setTurn("Cross")
        //document.getElementsByClassName('left-side-bar').style.opacity = "0.5";
    }
    for(let i=0;i<4;i++){
        left[i].classList.remove('selected')
        right[i].classList.remove('selected')
    }
    setSelection(false)
  },[moves])

    return(
        <div className="main">
            <LeftSideBar select={select} frequency={frequency}/>
            <Hero clearBoard={clearBoard} play={play} turn={turn}/>
            <RightSideBar select={select} frequency={frequency}/>
        </div>
    )
}

export default Main;
