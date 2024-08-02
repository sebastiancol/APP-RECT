import React, {useEffect, useState} from 'react'
import { Products } from '../types/ProductsType'

export const Product: React.FC = ()=>{

    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        const apiFetch = async ()=>{
            try {
                const answer = await fetch('https://fakestoreapi.com/products');
                const data = await answer.json();
                setPosts(data);
                //console.log(data)
            } catch (error) {
                console.log(error);
            }
            
        }
        apiFetch();
    })

    return (
        <div className="posts-container">
        {posts.map((post: Products) => {
           return (
              <div className="post-card" key={post.id}>
                 <h2 className="post-title">{post.title}</h2>
                 <p className="post-body">{post.description}</p>
                 <h2 className="post-body">{post.category}</h2>
                 <h2 className="post-body">{post.price}</h2>
                 <p className="post-body">{post.image}</p>
                 <div className="button">
                 
                 </div>
              </div>
           );
        })}
     </div>
    )

}