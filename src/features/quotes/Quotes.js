import React from "react";
//Importing quotesSlice actions and selectors
import { useDispatch, useSelector } from "react-redux";
import { selectQuotes, isLoadingQuotes, loadQuotes } from "./quotesSlice";
import CurrentQuote from "./Quote";


export default function Quote() {
    const dispatch = useDispatch();
    const quote = useSelector(selectQuotes);
    const quoteIsLoading = useSelector(isLoadingQuotes);

    dispatch(loadQuotes());

    if (quoteIsLoading) {
        return <div>Loading...</div>
    }
    else if (!quote) {
        return null;
    }

    return (
        <CurrentQuote quote = {quote}/>
    );
}
