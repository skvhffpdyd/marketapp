import React from 'react';
import '../css/Checkout.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import CheckoutSlider from './CheckoutSlider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checokout_left'>
                <img className='checkout_ad'
                    src="https://media.discordapp.net/attachments/1043797541113835561/1045954017135710259/unknown.png?width=444&height=444" alt='' />
                <img className='checkout_ad'
                    src="https://media.discordapp.net/attachments/1043797541113835561/1045954107690721300/unknown.png?width=444&height=444" alt='' />
                    <img className='checkout_ad'
                    src="https://media.discordapp.net/attachments/1043797541113835561/1045954182278021180/unknown.png?width=444&height=444" alt='' />
                    <img className='checkout_ad'
                    src="https://media.discordapp.net/attachments/1043797541113835561/1045953674314252390/unknown.png?width=444&height=444" alt='' />
                    <img className='checkout_ad'
                    src="https://media.discordapp.net/attachments/1043797541113835561/1045953940044390462/unknown.png?width=444&height=444 " alt='' />
                    <div>
                        <h2 className='checkout_title'>장바구니입니다</h2>
                        <div className='checokout_right'>
                            <Subtotal />
                        </div>
                        <div className='checkout_cart'>
                        {basket.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image}
                            price={item.price} rating={item.rating} count={item.count}/>
                        ))}
                        </div>
                        <div className='checkout_bottom_ad'>
                            <CheckoutSlider/>
                        </div>

                    </div>
            </div>
            
        </div>
    );
}

export default Checkout;