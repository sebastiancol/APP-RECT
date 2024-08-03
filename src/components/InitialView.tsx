import React from 'react';
//import Axios from 'axios';
import {} from 'bootstrap'


export const Main: React.FC = () =>{

    /*Axios.create({
        baseURL : '/api/v1/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'},
        responseEncoding: 'utf8',
        responseType: 'json',
        data: {data:'catalogo'}
    }); 

    
    useEffect(() => {
    
        const data = async () =>{
            
            try {
                const api = await Axios.get('https://fakestoreapi.com/products')
                return console.log(api)
                                
            } catch (error) {
                console.log(error)
            }
        }
        data();

    }, []);*/


    return(

       
        <div className="jumbotron text-center" >
            <h1 className="display-3">INGRESO AL CATALOGO</h1>
            <a href="" className="btn btn-success">IR</a>
            <p>
                <blockquote>
                Un catalogo de productos donde se implementara una api y react/bootstrap para hacer las vistas
                </blockquote>
            </p>
        </div>
       
    )
}