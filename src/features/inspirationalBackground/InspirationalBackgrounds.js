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
    

    useEffect(()=> {
        dispatch(loadInspirationalBackgrounds());
        
    }, [dispatch])

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

    return (
        <section >
            <div className = "buttons">
                <button onClick = {nextHandleChange} className = "next-image-button">Next</button>
                <button onClick = {prevHandleChange} className = "prev-image-button">Prev</button>
            </div>
            <img src ={inspirationalBackgrounds.urls.full} alt = "background" className = "background-image"/>
        </section>
    );
}