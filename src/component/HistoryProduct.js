import React, { useState, useEffect } from 'react';
import '../css/HistoryProduct.css';

function HistoryProduct({id, title, image, price, rating, count, date}) {

    return (
        <div className='historyProduct'>
            <img className='historyProduct_image' src={image} alt=''/>

            <div className='historyProduct_info'>
                <p className='historyProduct_title'>
                    {title}
                </p>
                <p className='historyProduct_price'>
                    <small>개별가격</small>
                    <strong>&nbsp;{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
                    <small>원</small>
                </p>

                <div className='historyProduct_count'>
                <small>상품개수 : {count}</small>
                <p className="payProduct_date">
                    <small>결제 시각 : </small>
                   <small>{date.getMonth()+1}월 </small>
                   <small>{date.getDate()}일 </small>
                   <small>{date.getHours()}시간 </small>
                   <small>{date.getMinutes()}분 </small>
                   <small>{date.getSeconds()}초 </small>
                </p>
                <p className="historyProduct_total">
                    총 결제금액: <strong>{[price*count].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong>
                </p>
            </div>
            </div>
        </div>
    );
}

export default HistoryProduct;