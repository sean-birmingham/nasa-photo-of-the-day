import React from 'react';

export default function Photo(props) {


    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <h2>{props.title}</h2>
            <img src={props.url} alt="NASA daily" />
            <div>
                <p>{props.explanation}</p>
                <p>Date: {props.date}</p>
                <p>{props.copyright}</p>
            </div>
        </div>
    )

}