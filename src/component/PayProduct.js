import React from "react";
import { Link } from "react-router-dom";
import '../css/PayProduct.css'
import {useStateValue} from './StateProvider';

function PayProduct({id, image, title, price, rating, count}){
    const [{basket, history}, dispatch] = useStateValue();
    const date = new Date();
    const addHistory = () => {
        dispatch({
            type:'ADD_HISTORY',
            id:id,
            count:count,
            item: {
                id, title, image, price, rating, count, date
            },
        })
    }
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id : id,
        })
    }   
    const removeAndAddHistory = () => {
        addHistory();
        removeFromBasket();
    }
    return (
        <div className="payProduct">
            <img className="payProduct_image" src={image} alt=""/>
            <div className="payProduct_info">
                <p className="payProduct_title">
                    {title}
                </p>
                <p className="payProduct_price">
                    <small>₩</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <p>
                    <small>상품 개수 : </small>
                   <small>{count}</small>
                </p>
            
            <Link to = {`/review/${id}`}>
            <button className="sendbutton" onClick={removeAndAddHistory}> 배송 확정 </button>
            </Link>
                <p className="payProduct_date">
                    <small>결제 시각 : </small>
                   <small>{date.getMonth()+1}월 </small>
                   <small>{date.getDate()}일 </small>
                   <small>{date.getHours()}시간 </small>
                   <small>{date.getMinutes()}분 </small>
                   <small>{date.getSeconds()}초 </small>
                </p>
            </div>
        </div>
    )
}

export default PayProduct;