import { useStateValue } from './StateProvider';
import '../css/DetailProduct.css'
import React, {useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function DetailProduct({id, title, image, price, rating, category}){
    const [{detail, user, rate}, dispatch]= useStateValue();
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
 
    const navigateToPurchase = () => {
      navigate("/checkout");
    };
    const addToBasket = () =>{
        if(!user){
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-center',
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
  
              Toast.fire({
                  icon: 'error',
                  title: '로그인이 필요합니다'
              })
        }
        else{
            dispatch({
                type:'ADD_TO_BASKET',
                id:id,
                count:count,
                item: {
                    id, title, image, price, rating, count
                },
            });
            Swal.fire({
                title: '장바구니에 담기 성공!',
                text: '장바구니로 이동하시겠습니까?',
                width:'400px',
                imageUrl: `${image}`,
                imageWidth: image.imageWidth,
                imageHeight: image.imageHeight,
                imageAlt: 'Custom image',
                showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
                cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                confirmButtonText: 'Yes', // confirm 버튼 텍스트 지정
                cancelButtonText: 'No', // cancel 버튼 텍스트 지정
              }).then(result => {
                // 만약 Promise리턴을 받으면,
                if (result.isConfirmed) {
                    navigateToPurchase();
                }
             });
        }
    };
    const addCount = () =>{
        setCount(count+1);
    }
    const minusCount = () =>{
        if(count>1){
            setCount(count-1);
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
        
        <div className="detailProduct">
            <img className="detailProduct_image" src={image} alt=""/>
            <div className="detailProduct_info"> 
            <p className="detailProduct_title">
                {title}
            </p>
            <p className='detailProduct_category'>
                    카테고리 : {category}
            </p>
            <p className="detailProduct_price">
                <small>₩</small>
                <string>{[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</string>
                <small>원</small>
            </p>
            <div className="detailProduct_rating">
                {
                    Array(isUpdate()).fill().map(()=>(<p><img className='star' src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/star_2b50.png" /></p>
                    ))
                }
            </div>
            <div className='detailProduct_count'>
            <button className='pmbutton' onClick={addCount}><img className='pm' src="https://cdn-icons-png.flaticon.com/512/32/32563.png" /></button>
                <small>&nbsp;&nbsp;{count}&nbsp;&nbsp;</small>
                <button className='pmbutton' onClick={minusCount}><img className='pm' src="https://cdn-icons-png.flaticon.com/512/7263/7263344.png" /></button>

            </div>
            <button className ="detailProduct_button" onClick={addToBasket}>장바구니에 담기</button>
            </div>
            </div>
            )
}
export default DetailProduct;