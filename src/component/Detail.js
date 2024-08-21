import React from 'react';
import '../css/Detail.css'
import { useStateValue } from './StateProvider';
import DetailProduct from './DetailProduct'
function Detail({setModalOpen}){
    const [{detail}, dispatch]= useStateValue();
    const closeModal = () => {
        setModalOpen(false);
    };

    return(
    <div className={setModalOpen ? 'openModal modal' : 'modal'}>
    <section>
        <header> 상품 정보
            <button className={'close'} onClick={closeModal}>
                X
            </button>
        </header>

        {detail.map(item=>(
        <DetailProduct 
            id={item.id} 
            title={item.title} 
            image={item.image} 
            price={item.price} 
            rating={item.rating} 
            category={item.category}
            />))}
    </section>
    </div>
    )
}
export default Detail;