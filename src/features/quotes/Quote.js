import React from "react";
//Import nextQuote Action and dispatch
//import { nextQuote } from "./quotesSlice";
//import { useDispatch } from "react-redux";

export default function CurrentQuote({quote}) {
    //const dispatch = useDispatch();
    //console.log("this is the quote object from my initial state")
    //console.log(quote);

        
    // Button functionality for swapping through multiple quotes
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     dispatch(nextQuote());
    // }
    
    return (
        <section className = "quote-text">
            {/* <button onClick = {handleChange}>Next</button> */}
            <span className = "quote-quote">"{quote.quote}"</span>
            <span className = "quote-author">{quote.author}</span>    
        </section>
    );
}
