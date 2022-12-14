import React from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct  from './CheckoutProduct';
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}]= useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
        <img className='checkout__ad' 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />


        { basket?.length === 0?(
            <div>

                 <h2>Your Shoping Basket is Empty</h2> 

           </div>
        ) :(
            <div>
               <h2 className='checkout__title'>Your Shoping basket</h2> 
               {/* List out All of the checkout product */}
                 {basket.map((item) => {

                    console.log(item);
                    return(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                 )})}
            </div>
        )}
        </div>
        {basket.length> 0  && (
            <div className='checkout__right'>
                 {/* <h1>Subtotal</h1> */}
                <Subtotal />
            </div>
        )}
    </div>
  );
}

// react -currency format
export default Checkout;