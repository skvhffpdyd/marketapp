import React, { useEffect, useState } from 'react';
import Product from './component/Product';
import './css/Home.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import productData from "./data/productlist.json";
import { motion } from "framer-motion";
import SimpleSlider from './component/SimpleSlider';
import ScrollToTop from './ScrollTop';

const Home = () => {
    let [pdData, setData] = useState(productData);
    const [ category, setCategory ] = useState();
  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();

  const [setScrollY] = useState(0);

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }


  useEffect( () => {
    if (!category) return;
    navigate(`/?category=${category}`);
  }, [category]);

  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredData = searchParams.toString() == "" ? pdData : pdData.filter( data => data.category == searchParams.get('category') );
  const handleRadio = e => setCategory(e.target.value);
    return (
      <motion.div
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0}}
      >
        <ScrollToTop />
        <div className='home'>
            <div className='home-container'>
                <img className='home_image' src="https://img.cafe24.com/img/simplexi/service/img_echosting_visual_m.jpg" alt=''/>
                <SimpleSlider/>
                <div className='home_category'>
            
                    <label className='home_label'><input type="radio" name="category" value="문구" onChange={handleRadio} />
                    <span> 문구</span></label>
                    <label className='home_label'><input type="radio" name="category" value="책" onChange={handleRadio} />
                    <span> 책</span></label>
                    <label className='home_label'><input type="radio" name="category" value="전자기기" onChange={handleRadio} />
                    <span> 전자기기</span></label>
                    <label className='home_label'><input type="radio" name="category" value="과일" onChange={handleRadio} />
                    <span> 과일</span></label>

                    <div className='home_sort'>
                        <button onClick={() => {
                            let player1 = productData;
                            setData(player1);
                        }} className='home_button'>추천순</button>
                        <button onClick={() => {
                            let player1 = [...pdData]
                            player1.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
                            setData(player1);
                        }} className='home_button'>가나다순</button>
                        <button onClick={() => {
                            let player1 = [...pdData]
                            player1.sort((a, b) => a.price < b.price ? -1 : 1);
                            setData(player1);
                        }} className='home_button'>가격낮은순</button>
                        <button onClick={() => {
                            let player1 = [...pdData]
                            player1.sort((a, b) => a.price > b.price ? -1 : 1);
                            setData(player1);
                        }} className='home_button'>가격높은순</button>
                        <button onClick={() => {
                            let player1 = [...pdData]
                            player1.sort((a, b) => a.rating > b.rating ? -1 : 1);
                            setData(player1);
                        }} className='home_button'>평점순</button>
                    </div>

                </div>
                <motion.ul variants={list} initial="hidden" animate="visible">
                {
                    filteredData.map( (list, i) => (
                        <div className='home_row'>
                        <motion.li className='home_li' variants={item}>
                        <Product key={i} {...list}/>
                        </motion.li>
                        </div>
                     ))
                }
                </motion.ul>
                <div>
                    <button className="topBtn active" onClick={handleTop}>TOP</button>
                </div>    
            </div>            
        </div>
        </motion.div>
    );
}

export default Home;