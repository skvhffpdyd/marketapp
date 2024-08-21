import React, { useState, useEffect } from 'react';
import '../css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating, count}) {
    const [count2, setCount] = useState(count);
    const [{basket, rate}, dispatch] = useStateValue();

    const removeFromBasket =() => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    useEffect(()=>{
        updateBasket();
    },[count2])

    const updateBasket = () =>{
        dispatch({
            type:'UPDATE_BASKET',
            id:id,
            count:count2,
        })
    }
    const addCount = () =>{
        setCount(count2+1);
    }
    const minusCount = () =>{
        if(count2>1){
            setCount(count2-1);
        }    
    }
    const checkId = rate?.filter(i => i.id === id).length
    const isUpdate = () => {
        if(checkId == 0){
            return rating;
        }
        else{
            const newArray = rate?.filter(i => i.id === id);
            var count2 = 0;
            for(var i=0; i<newArray.length; i++){
                count2 += newArray[i].rating;
            }
            count2 /= newArray.length;
            const roundNum = Math.floor(count2);
            return roundNum;
        }
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt=''/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>가격</small>
                    <strong>&nbsp;{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
                    <small>원</small>
                </p>

                <div className='checkoutProduct_rating'>
                    {
                        Array(isUpdate()).fill().map(() => (
                            <p><img className='star' src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/star_2b50.png" /></p>
                        ))
                    }
                </div>
                <div className='checkoutProduct_count'>
                <button className='pmbutton' onClick={addCount}><img className='pm' src="https://cdn-icons-png.flaticon.com/512/32/32563.png" /></button>
                <small>&nbsp;&nbsp;{count2}&nbsp;&nbsp;</small>
                <button className='pmbutton' onClick={minusCount}><img className='pm' src="https://cdn-icons-png.flaticon.com/512/7263/7263344.png" /></button>
            </div>
                <button className='checkoutProduct_button' onClick={removeFromBasket}>제거하기</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;