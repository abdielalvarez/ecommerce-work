import React from 'react';
import '../assets/styles/App.scss';
import trash from '../assets/static/delete.png';

function HelloWorld() {
    return (
        <div>
            Hola
            <img src={trash} />
        </div>
    )
}

export default HelloWorld;
