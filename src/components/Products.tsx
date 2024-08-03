import React, {useEffect, useState} from 'react'
import { ProductsApi } from '../types/ProductsType'

export const Product: React.FC = ()=>{

    const [products, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        const apiFetch = async ()=>{
            try {
                const answer = await fetch('https://fakestoreapi.com/products');
                const data = await answer.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
            
        }
        apiFetch();
    })

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="row m-9">
            <div className="col-12 mx-auto"> 
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-center">CATALOGO DE PRODUCTOS</h3>
                        </div>
                        <div className="card-body">

                            <input className="form-control me-2" type="search" placeholder="buscar producto" aria-label="Search"/>
                            <SearchButton/>

                            <table className="table text-center text-uppercase table-bordered ">
                                    <thead className="" >
                                        <tr>
                                            <th scope="col">Titulo</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Imagen</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product: ProductsApi)=>{
                                           return(
                                            <tr>
                                                <td>{ product.title}</td>
                                                <td>{ product.price}</td>
                                                <td>{ product.category}</td>
                                                <td>{ product.description}</td>
                                                <td><img src="" alt={product.title} width="150px" height="200px"  />{product.image}</td>
                                            </tr>
                                           )
                                        })}
                                    </tbody>
                            </table>
                        </div> 
                    </div>        
                </div>
        </div>
    )
}

function SearchButton() {

    return (
        <>
            <button type="button">Buscar</button>
            
        </>
    );
}