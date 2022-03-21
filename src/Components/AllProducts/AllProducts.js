import React, { useEffect, useState } from 'react';
import SIngleProduct from '../SIngleProduct/SIngleProduct';
import './AllProducts.css'
const AllProducts = (props) => {
    const { setCartCount } = props;
const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
// console.log(products);
    return (
        <div>
          <h1>All Products </h1>
         <div className='row container mx-auto'>
         {
              products.map((pd) =>  <SIngleProduct
              setCartCount={setCartCount}
               key={pd.id} 
               productatiq ={pd}>

               </SIngleProduct>)
          }
         
         </div>
            
        </div>
    );
};

export default AllProducts;