import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}]= useStateValue();

    const basketTotal = (basket) => {
          return basket.reduce((price,item) =>{return item.price + price},0);
    };
        return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket?.length} items): <strong>{basketTotal(basket)}</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox" />this order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>proceed to checkout</button>
        </div>
    );
}

export default Subtotal
