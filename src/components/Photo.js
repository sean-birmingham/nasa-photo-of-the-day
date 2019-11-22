import React from 'react';
import styled from 'styled-components';

const PhotoCard = styled.div`
    background:  #525252;
    color: white;
    width: 70%;
    margin: 1% auto;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    box-shadow: 0 4px 8px 0 #000;
`

const ExplanationText = styled.p`
    background: white;
    color: black;
    width: 70%;
    padding: 20px;
    margin: 2% auto;
    box-shadow: 0 4px 8px 0 #000;
`

const Date = styled.p`
    background: white;
    color: black;
    width: 20%;
    margin: 2% auto;
    padding: 10px 20px;
    border: none;
    box-shadow: 0 4px 8px 0 #000;
`


export default function Photo(props) {


    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <PhotoCard>
                <h2>{props.title}</h2>
                <img src={props.url} alt="NASA daily" />
                <div>
                    <ExplanationText>{props.explanation}<br /><strong>Copyright:</strong> {props.copyright}</ExplanationText>
                    <Date><strong>Date:</strong> {props.date}</Date>
                </div>
            </PhotoCard>
        </div >

    )

}