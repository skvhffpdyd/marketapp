import React, { useState } from "react";
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './component/StateProvider';


function Header() {
    const [{basket, user, id}, dispatch]= useStateValue();
    const [title, settitle] = useState("");
    function login () {
        let str;
        user ? str='/logout' : str='/login'; 
        return str;
    }
    return (
        <div className='header'>
            <Link to="/*">
            <img className='header_logo' src="https://media.discordapp.net/attachments/1043797541113835561/1045953157127225364/BugiStore_-_MarkMaker_Logo.png?width=444&height=444" />
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' onChange={e=>settitle(e.target.value)} type="text" />
                <Link to = {`/search/${title}`}>
                    <SearchIcon className='header_searchIcon'/>
                </Link>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'> 안녕하세요 !</span>
                    <Link to={login()} className="homelogin">
                    <span>{user ? '로그아웃' : '로그인 하기'}</span>
                    </Link>


                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne1'>{user ? `${id}님` : '비회원' }</span>
                    <Link to='/history' className="homelogin">
                    <span>주문내역</span>
                    </Link>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'> 반갑습니다 !</span>
                    <span className='header_optionLineTwo'> 부기마켓입니다</span>
                </div>
                <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwoheader_basketCount'>
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;