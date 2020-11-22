import React from 'react';
import Board from './Board';

const Main = (props) => {
    return (
        <div className="main-container">
            <Board 
                boardName="TODO"
                handleStatusChange={props.handleStatusChange}
            >
                <h1 className="board__title">ToDo.</h1>
                {props.deckTodo}
            </Board>
            <Board 
                boardName="DONE"
                handleStatusChange={props.handleStatusChange}
            >
                <h1 className="board__title">Done.</h1>
                {props.deckDone}
            </Board>
        </div>
    )
};

export default Main;