import React from 'react';
import { useState } from 'react';
import '../css/Product.css';
import { useStateValue } from './StateProvider';
import { Link} from "react-router-dom";
import Detail from './Detail';

function Product({id, title, image, price, rating, category, count}) {

    const [{basket, rate}, dispatch] = useStateValue();
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };


    const detail = () => {
        dispatch({
            type:"DETAIL",
            item: {
                id, title, image, price, rating, category, count
            },
        })
    }
    // const addToBasket = () => {
    //     dispatch({
    //         type:"ADD_TO_BASKET",
    //         item: {
    //             id, title, image, price, rating, category, count
    //         },
    //     })
    // }
    const checkId = rate?.filter(i => i.id === id).length
    const isUpdate = () => {
        count = checkId;
        if(count == 0){
            return rating;
        }
        else{
            const newArray = rate?.filter(i => i.id === id)
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
        <div className='product'>
                <div className='product_category'>
                    카테고리 : {category}
                </div>
            <img onClick={() => {detail(); showModal();}} src={image} alt="" className='img'/>
            {modalOpen && <Detail setModalOpen={setModalOpen} />}
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>가격 </small>
                    <strong>{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
                    <small>원</small>
                </p>
                <div className='product_rating'>
                    <p className='product_rating2'> 평점 : </p>
                    {
                        Array(isUpdate()).fill().map(() => (
                            <p><img className='star' src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/star_2b50.png" /></p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;