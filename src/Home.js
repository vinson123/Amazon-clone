import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home_image"/>
            <div className="home_row">
             <Product title="The lean Startup"
             price={30.99}
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU"
             rating={4}
             id={123}
             />
             <Product title="The lean Startup"
             price={30.99}
             image="https://i01.appmifile.com/webfile/globalimg/PC-_14.jpg?width=612&height=612"
             rating={3}
             id={124}
             />
            </div>
            <div className="home_row">
            <Product title="The lean Startup"
             price={30.99}
             image="https://static.lenovo.com/ww/img/new-homepage/default/lenovo-phones-hover.jpg"
             rating={2}
             id={125}
             />
             <Product title="The lean Startup"
             price={30.99}
             image="https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/2020/shop/desktop-dropdown-featured-product.jpg?t=meghan1"
             rating={3}
             id={126}
             />
             <Product title="The lean Startup"
             price={30.99}
             image="https://www.skinceuticals.com/on/demandware.static/-/Sites-skinc-us-Library/default/dw00ba382c/homepage/Tripeptide-Neck-Repair-Mobile-SkinCeuticals.jpg"
             rating={3}
             id={127}
             />
            </div>
            <div className="home_row">
            <Product title="Urban Color"
             price={30.99}
             image="https://www.modicare.com/preLoginImage/mobileCommon/newproduct-20190911.jpeg"
             rating={3}
             id={128}
             />
            </div>
            </div>
        </div>
    )
}

export default Home
