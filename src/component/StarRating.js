import React, { useEffect } from "react";
import Star from "./Star";
import { useState } from "react";
const createArray = length => [...Array(length)];
const StarRating = ({ totalStars = 5, getStarValue}) => {
    const [selectedStars, setSelectedStars] =useState(3);
    useEffect (() => {
        getStarValue(selectedStars);
    },[selectedStars]);
    return (
    <>
        {createArray(totalStars).map((n, i) =>
        <Star key={i} selected={selectedStars > i}
        onSelect={() => {
            setSelectedStars(i+1);
        } } />)}
        <p><h4>{selectedStars}점 등록</h4></p>
    </>
    );
}
    
export default StarRating;