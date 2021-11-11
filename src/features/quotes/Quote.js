import React from "react";
//Import nextQuote Action and dispatch
import { nextQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

export default function CurrentQuote({quote}) {
    const dispatch = useDispatch();
    var quoteText = quote.q;
    var quoteAuthor = quote.a;

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
