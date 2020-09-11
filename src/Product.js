import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating}) {
   const [{basket},dispatch] = useStateValue();
    
   console.log("this is the basket",basket);

    const addtoBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
              <p>{/*The Subtle Art of Not Giving a F*ck*/title}</p>
            <p className="product_price">
               <small>$</small>
               <strong>{price}</strong>
               </p>
            <div className="product_rating">
                {Array(rating).fill().map((_, i) => {return(<p>⭐</p>)})}
                </div>  
            </div>
            <img src={image} alt=""/>
            <button onClick={addtoBasket}>Add to bag</button>
        </div>
    )
}

export default Product
