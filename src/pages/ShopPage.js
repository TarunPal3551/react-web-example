import React, {useState} from "react";
import FloatingActionButtons from "../components/Fab";
import LOGO from "../assets/logo_temp.png"
import LocationIcon from "../assets/MapPinLine.svg"
import StarIcon from "../assets/star.svg";
import Button from '@mui/material/Button';
import Banner1 from "../assets/1.svg"
import Banner2 from "../assets/2.png"
import FoodItem from "../assets/food_item.svg"
import SearchIcon from "../assets/search.svg";
import MenuCategoryTabs from "../components/CategoryVerticalMenu"
import CartView from "../components/CartView"

import "../styles/Shoppage.css"


function ShopPage(){



    return (<div>

        <div className="body">
        
        <div className="topbar">
    <img src={LOGO} alt="description" className="logo" />
    <div className="detailView">
    <div className="container">
    <div className="storeRightView">
       <div className="starLay">
        <img src={StarIcon} className="starIcon"/>
        <img src={StarIcon} className="starIcon"/>
        <img src={StarIcon} className="starIcon"/>
        <img src={StarIcon} className="starIcon"/>
        <img src={StarIcon} className="starIcon"/>
        </div>
        <div className="storeStatus">
        We're Open
        </div>
       </div>
        <div className="textStoreName">
        Pro Chef 
        </div>
        <div className="categoryNames">
        Chinese, Mexican
        </div>
        <div className="textStoreTime">
        03:00 PM - 10:00 PM
        </div>
        <div className="textStoreOrderType">
        Delivery, Takeaway, Dine-In
        </div>
        <div className="addressView">
            <div className="locationIcon">
                <img src={LocationIcon}></img>
            </div>
            <div className="storeAddress">
                Selatan, Jakarta
            </div>
            <div>
            </div>
        </div>
        <div className="distanceText">3 Km</div>
      
        </div>
  <div className="offerView">
<div className="offerTextView">
OFFERS
</div>
<div className="offerBanner">
<img src={Banner1}>
    
</img>
<img src={Banner2}>
    
</img>

</div>
  </div>
 </div>
    </div>
    <div className="searchContainer">
    <input placeholder="Search Menu" className="searchField"/>
    <img src={SearchIcon} ></img>
    </div>

    <div className="menuListView">
<div className="itemView">
<img src={FoodItem} ></img>

<div className="itemDetailView">

<div className="textViewFoodName">Product placeholder
Long Name  </div>
<div className="textViewPrice">Rp 10.000.000  </div>

</div>
<Button variant="contained"  className="addButton">ADD</Button>
</div>
<div className="itemView">
<img src={FoodItem} ></img>

<div className="itemDetailView">

<div className="textViewFoodName">Product placeholder
Long Name  </div>
<div className="textViewPrice">Rp 10.000.000  </div>

</div>
<Button variant="contained"  className="addButton">ADD</Button>
</div>

<div className="itemView">
<img src={FoodItem} ></img>

<div className="itemDetailView">

<div className="textViewFoodName">Product placeholder
Long Name  </div>
<div className="textViewPrice">Rp 10.000.000  </div>

</div>
<Button variant="contained"  className="addButton">ADD</Button>
</div>
</div>
<MenuCategoryTabs/>
<CartView/>
<FloatingActionButtons/>

</div>

  </div>);
}
export default ShopPage;