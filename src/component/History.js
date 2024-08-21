import React from 'react';
import '../css/History.css'
import { useStateValue } from './StateProvider';
import HistoryProduct from './HistoryProduct';

function History(props) {
    const [{ history, id }, dispatch] = useStateValue();
    return (
        <div className='history'>
            <div className='history_left'>
                <h2 className='history_title'>주문내역입니다</h2>
                <div className='history_right'>
                    {id}님께서 구매한 상품 {history.length}개
                </div>
                <div className='history_cart'>
                    {history.map(item => (
                        <HistoryProduct id={item.id} title={item.title} image={item.image}
                            price={item.price} rating={item.rating}
                            count={item.count} date={item.date} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default History;