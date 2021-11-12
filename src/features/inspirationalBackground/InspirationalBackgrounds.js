import React, { useEffect } from "react";
//Import goals and goals selector
import { selectInspirationalBackgrounds, isLoadingInspirationalBackgrounds } from "./inspirationalBackgroundSlices";
import { useSelector, useDispatch } from "react-redux";
import { loadInspirationalBackgrounds, nextImage, prevImage } from "./inspirationalBackgroundSlices";

export default function InspirationalBackgrounds() {
    const dispatch = useDispatch();
    const inspirationalBackgrounds = useSelector(selectInspirationalBackgrounds);
    const isLoading = useSelector(isLoadingInspirationalBackgrounds);
    // console.log("HELLLLLLOOOOO")
    // console.log(inspirationalBackgrounds);
    var imageLink = ''
    

    useEffect(()=> {
        dispatch(loadInspirationalBackgrounds());
        
    }, [])



    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!inspirationalBackgrounds) {
        return null;
    }
    const nextHandleChange = (e) => {
        e.preventDefault();
        dispatch(nextImage());
    }

    const prevHandleChange = (e) => {
        e.preventDefault();
        dispatch(prevImage());
    }

    imageLink = inspirationalBackgrounds.urls.regular;

    return (
        <section>
            <h4>Background</h4>
            <button onClick = {nextHandleChange}>Next</button>
            <button onClick = {prevHandleChange}>Previous</button>
            <img src ={imageLink} alt = "background"/>
        </section>
    );
}