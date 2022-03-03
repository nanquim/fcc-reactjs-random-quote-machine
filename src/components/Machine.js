import React, { useState, useEffect } from 'react';
import './Machine.css';
import data from './data.json'
import { faRotate  } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Machine() {

    const [ quote, setQuote ] = useState({})

    useEffect(() => {
        setNewQuote()
    }, []);

    function setNewQuote() {
        setQuote(data.quotes[Math.floor(Math.random() * (data.quotes.length))])
    }
    
    function handleClick() {
        setNewQuote()
    }

    function tweet() {

    }

    return (
        <div id="container-machine">
            <h1 className="titulo">Random Quote Machine</h1>
            <div id="quote-box">
                <div id="text"> {quote.text} </div>
                <div id="author"> {quote.author} </div>
                <div id="twitter" onClick={tweet}>
                    <a href={`https://twitter.com/intent/tweet?text=${JSON.stringify([quote.text, quote.author].join(" - "))}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size = '2x' color='#1DA1F2' />
                    </a>
                </div>
                <div id="new-quote" onClick={handleClick}>
                    <FontAwesomeIcon icon={faRotate} size = '2x'/>
                </div>
            </div>
        </div>
    )
}

export default Machine;
