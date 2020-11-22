import React from 'react';

const Card = (props) => {

    const onDragStart = e => {
        e.dataTransfer.setData('text', e.target.id);
    };

    const onDragOver = e => {
        e.stopPropagation();
    };

    const setCreatedDate = new Date(props.createdDate).toISOString().split('T')[0];

    const setStatusStyle = () => {
        const style = {color: "white"}
        if(props.status === "PENDING") {
            style.color = "#67c6d9"; //blue
        } else if(props.status === "DONE") {
            style.color = "#00b159"; //green
        } else {
            style.color = "#d62d20"; //rejected == red
        }
        return style;
    };

    return (
        <div 
            className="card"
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            draggable="true"
            id={props.id}
        >
            <div>
            <h1 className="card__patient-name">{props.patientName}</h1>
            <p className="card__sub-title">creation date: <span>{setCreatedDate}</span></p>
            </div>
            <br/>
            <h3 className="card__arrhythmias-title">Arrhythmias</h3>
            <ul className="card__arrhythmias-list">{props.arrhythmias.map(arr => <li>{arr}</li>)}</ul>
            <br/>
            <div className="card__status-container">
                <p className="card__sub-title">status: </p>
                <h4 className="card__status" style={setStatusStyle()}>{props.status}</h4>
            </div>
        </div>
    )
};

export default Card;