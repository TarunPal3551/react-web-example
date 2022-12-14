import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import ForkKnife from "../assets/ForkKnife.svg"
import LOGO from "../assets/logo_temp.png"
import LocationIcon from "../assets/MapPinLine.svg"
import StarIcon from "../assets/star.svg"
import Banner1 from "../assets/1.svg"
import Banner2 from "../assets/2.png"
import { green } from "@mui/material/colors";
import "../styles/Shoppage.css"
const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};
  
const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green,
    '&:hover': {
      bgcolor: green,
    },
};

function ShopPage(){
    return (<div >
        <div className="body">
        <div className="topbar">
    <img src={LOGO} alt="description" className="logo" />
    <div className="detailView">
    <div className="container">
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
<div className="fab">
    <Fab color="primary" aria-label="add" style={{
        width: 64,  
        height: 64,   
        borderRadius: 40,            
        backgroundColor: '#D6001B',                                    
        position: 'absolute',                                          
        bottom: 50,                                                    
        right: 30
    }}>
<img src={ForkKnife} alt="description" />
</Fab>
    </div>
</div>
        
        

    
  </div>);
}
export default ShopPage;