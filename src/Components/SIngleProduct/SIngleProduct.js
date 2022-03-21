import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SIngleProduct.css'
const SIngleProduct = (props) => {
    console.log(props.productatiq);
    const {setCartCount} =props;
    return (
        <div 
        data-aos="fade-up"
       
          className='col-md-4'>
            <div className="card p-3 border">
                <img className='w-50 m-auto' src={props.productatiq.image} alt="" />
            <h1>{props.productatiq.title.slice(0,10)}</h1>
           <div className='d-flex justify-content-around'>
           <button onClick={setCartCount} className='btn btn-success'>Add to Cart </button>
            <button className='btn btn-danger'>Delete </button>
            {/* <button className='btn btn-info'>Details</button> */}
            <ReactModal productatiq={props.productatiq}></ReactModal>
           </div>
            </div>
        </div>
    );
};

export default SIngleProduct;