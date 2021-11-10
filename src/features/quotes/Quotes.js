import React from "react";

//Importing quotesSlice actions and selectors
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentQuote, isLoadingCurrentQuote, loadCurrentQuote } from "./quotesSlice";


export const Quote = () => {
    const dispatch = useDispatch();
    const quote = useSelector(selectCurrentQuote);
    const quoteIsLoading = useSelector(isLoadingCurrentQuote);

    // dispatch(loadCurrentQuote());


    if (quoteIsLoading) {
        return <div>Loading...</div>
    }
    else if (!quote) {
        return null;
    }

    return (
        <section>
            <span>{quote.q}</span>
            <span>{quote.a}</span>
        </section>
    );
}
