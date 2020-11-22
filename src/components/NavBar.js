import React from 'react';

const NavBar = (props) => {

    const onDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onDrop = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar__radio-container">
                <label>
                    <input 
                        type="radio" 
                        name="filter"
                        value="name"
                        checked={props.filterBy === "name"}
                        onChange={props.handleFilterBy}
                    />
                    <p>name</p>
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="filter"
                        value="arryhthmias"
                        checked={props.filterBy === "arryhthmias"}
                        onChange={props.handleFilterBy}
                    />
                    <p>arryhthmias</p>
                </label>
            </div>
            <input
                className="nav-bar__text-input" 
                type="text" 
                value={props.filterInput}
                onChange={props.handleFilterInput}
                onDragOver={onDragOver}
                onDrop={onDrop}
                placeholder="filter"
            />
        </div>
    )
};

export default NavBar;