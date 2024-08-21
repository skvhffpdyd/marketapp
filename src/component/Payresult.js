import React, { useState, useEffect } from "react";
import '../css/Payresult.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './Reducer';
import { Link } from 'react-router-dom';
import StarRating from "./StarRating";
import { useParams } from 'react-router-dom';
import data from "../data/productlist.json";
import { isFocusable } from "@testing-library/user-event/dist/utils";

function Payresult({match}){
    const[{rate},dispatch] = useStateValue();
    const [ starValue, setStarValue ] = useState(3);
    const getStarValue = (i) => {
        setStarValue(i);
    }
    const { id } = useParams();
    const checkId = data.filter(i => i.id === id)

    const newRate = () =>{
        console.log(id,starValue);
        dispatch({
            type:'NEW_RATE',
            item: {
                id, rating : starValue
            },
        });
    };

    return (
        <div className="payresult">
            <h1 className="payresult_title">상품이 배송 완료되었습니다!</h1>
            <div className="payresult_content">
            
            <img className = "payresult_image" src={checkId[0].image} alt=""/>
            <form>
                    <h5 className="payresult_rating">별점</h5>
                    <StarRating getStarValue = {getStarValue}/>
                    <Link to ="/checkout/checkoutresult">
                    <button className='payresult_button' onClick={newRate}>별점 등록</button>
                    </Link>
            </form>
            </div>
        </div>
    );
}

export default Payresult;