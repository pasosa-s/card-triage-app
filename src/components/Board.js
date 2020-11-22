import React from 'react';

const Board = (props) => {

    const onDragOver = e => {
        e.preventDefault();
    };

    const onDrop = e => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const boardName = e.target.getAttribute('boardname');
        props.handleStatusChange(id, boardName);
    };

    return (
        <div 
            className="board"
            boardname={props.boardName}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {props.children}
        </div>
    )
};

export default Board;