import React from 'react';
import Search from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}]= useStateValue();

    return (
        <div className="header">
        <Link to="/">  
        <img 
              className = "header_logo" 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
              alt="amazon logo"/>
        </Link> 
            <div className="header_search">
             <input className="header_searchInput" type="text" />
               <Search  className="header_searchIcon"/>
            </div>
            <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineone">
                 hello guest
                </span>
                <span className="header_optionLinetwo">
                 sign in
                </span>
            </div>
            <div className="header_option">
              <span className="header_optionLineone">
               returns
              </span>
              <span className="header_optionLinetwo">
               orders
              </span>
            </div>
            <div className="header_option">
                <span className="header_optionLineone">
                your
                </span>
                <span className="header_optionLinetwo">
                prime
                </span>
            </div>
            <Link to ="/checkout">
            <div className="header_basket">
            <ShoppingBasket />
               <span className="header_optionlinetwo header_basketcount">
               {basket?.length}
               </span>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Header
