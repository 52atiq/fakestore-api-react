import React, { useState } from 'react';

const Test = ({property}) => {
    // console.log(props)
    // const {count} = props;
    // console.log(property);
    // console.log(props.count);
    const [count ,setCount ] = useState('atiq');
    setCount('habib')
    console.log(count);


    return (
        <div>
          
            <div className='count mt-5'>
                <button  className='ms-3 p-3'>+</button>
                <button className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;