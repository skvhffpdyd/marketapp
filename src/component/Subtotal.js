import React, {useEffect, useState} from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { Link } from 'react-router-dom';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [ check, setCheck ] = useState(false);

    const toggleTextbox = checked => {
        setCheck(!check);
    }
    

    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    총액 ( {basket?.length} items ) : <strong> {value} 원 </strong>
                </p>
                    <small className='subtotal_gift'>
                        <input type = "checkbox" onChange={e => {toggleTextbox(e.target.checked)}} /> 결제에 동의하겠습니까?
                    </small>
                </>

            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />

            <Link to = "/checkout/checkoutresult">{
                check ? <button class="payment"><span>결제하기</span></button> :
                <button class="payment disabled" disabled>결제하기</button>}</Link>
        </div>
    );
}

export default Subtotal;