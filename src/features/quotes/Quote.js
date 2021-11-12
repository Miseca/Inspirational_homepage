import React from "react";
//Import nextQuote Action and dispatch
import { nextQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

export default function CurrentQuote({quote}) {
    const dispatch = useDispatch();
    //console.log("this is the quote object from my initial state")
    //console.log(quote);
    var quoteText = quote.quote;
    var quoteAuthor = quote.author;

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(nextQuote());
    }
    
    return (
        <section>
            <button onClick = {handleChange}>Next</button>
            <span>{quoteText}</span>
            <span>{quoteAuthor}</span>    
        </section>
    );
}
