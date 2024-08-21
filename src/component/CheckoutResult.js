import '../css/CheckoutResult.css';
import Subtotal from './Subtotal';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider'
import PayProduct from './PayProduct';
function CheckoutResult() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkoutresult'>
        <div className='checkoutresult_left'>
            <div className='checkoutresult_basket'>
                <h2 className='checkoutresult_title'>
                    결제가 완료되었습니다!
                </h2>
                <div className='checkoutresult_cart'>
                {basket.map(item => (
                    <PayProduct id={item.id} title={item.title} image = {item.image}
                    price = {item.price} rating = {item.rating} count = {item.count}/>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default CheckoutResult;