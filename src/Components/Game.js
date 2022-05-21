import React, { useEffect, useState } from 'react'
import "./game.css"

function Game(){
    var i=0;
    const arr=[
            {
                "question":"what is css used for",
                "choice1":"styling",
                "choice2":"routing",
                "choice3":"coding",
                "choice4":"database",
                "answer":"styling"
            },
            {
                "question": "Inside which HTML element do we put the JavaScript??",
                "choice1": "<script>",
                "choice2": "<javascript>",
                "choice3": "<js>",
                "choice4": "<scripting>",
                "answer": "<script>"
            },
            {
                "question":
                    "What is the correct syntax for referring to an external script called 'xxx.js'?",
                "choice1": "<script href='xxx.js'>",
                "choice2": "<script name='xxx.js'>",
                "choice3": "<script src='xxx.js'>",
                "choice4": "<script file='xxx.js'>",
                "answer": "<script src='xxx.js'>"
            },
            {
                "question": " How do you write 'Hello World' in an alert box?",
                "choice1": "msgBox('Hello World');",
                "choice2": "alertBox('Hello World');",
                "choice3": "msg('Hello World');",
                "choice4": "alert('Hello World');",
                "answer": "alert('Hello World');"
            }
          ]
    const [que,setQue]=useState([])
    const [selected,setselected]=useState(0)
    useEffect(()=>{
        setQue(arr[0])
    },[])
    const NextQue=(e)=>{
        //check if options match
        const ans=que.answer
        console.log(e.target.value,ans)
        if(selected+1===arr.length){
            alert("Win..!!")
        }
        else if(e.target.value===ans){
            i=selected+1;
            setselected(i)
            setQue(arr[i]);
        }
        else{
            alert("Game over....!!!")
        }
        console.log(i)
    }
    return(
        <div>
            <h3 className='que'>{que.question}</h3>
            <div className='options'>
                <div className='cube'><input type="radio" onClick={NextQue} checked={false} value={que.choice1}/>{que.choice1}</div>
                <div className='cube'><input type="radio" onClick={NextQue} checked={false} value={que.choice2}/>{que.choice2}</div>
                <div className='cube'><input type="radio" onClick={NextQue} checked={false} value={que.choice3}/>{que.choice3}</div>
                <div className='cube'><input type="radio" onClick={NextQue} checked={false} value={que.choice4}/>{que.choice4}</div>
            </div>
            <h2 className='level'>Level : {selected+1}</h2>
        </div>
    );
}

export default Game;