import React, { useCallback, useEffect, useState } from 'react';
import Product from './Product';
import '../css/Search.css';
import productData from "../data/productlist.json";
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

function Search({match}) {
    let [pdData, setData] = useState(productData);
    const { title } = useParams();
	const regex = new RegExp(`${title}`, 'gi');

    var searchData = pdData.filter(function(data){
        return data.title.match(regex)
    })
    


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

    return(
        <div className='search'>
            <h2 className='searchText'>"{title}" 의 검색 결과 {searchData.length}건</h2>
            {console.log(pdData)}
            <motion.ul variants={list} initial="hidden" animate="visible">
                    {
                        searchData.map( (list, i) => (
                            <div className='home_row'>
                                <motion.li className='home_li' variants={item}>
                                    <Product key={i} {...list}/>
                                </motion.li>
                            </div>
                        ))
                    }
            </motion.ul>
        </div>
    )

}

export default Search;