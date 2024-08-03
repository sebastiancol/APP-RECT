//import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { CategoryApi } from '../types/CategoriesType'

export const Category: React.FC = ()=>{

    const [category, setPosts] = useState([]);

    /*const axios = Axios.create({
        baseURL : 'https://fakestoreapi.com/products/category'
    }); */

    useEffect(()=>{

        const apiFetch= async ()=>{
            try {
                const answer = await fetch('https://fakestoreapi.com/products/categories');
                const data = await answer.json();
               // console.log(data)
                setPosts(data);  
                
            } catch (error) {
                console.log(error);
            }
        }
        apiFetch();
    }, []);

    return(
        <div>
            {category.map((categories: CategoryApi)=>{
                return(
                    <h1 key={categories.category}></h1>
                )
            })}
        </div>
      
      
    )
}