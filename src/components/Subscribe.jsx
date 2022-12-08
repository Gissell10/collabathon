import React from "react";
import { Icon } from '@iconify/react';
import "../App.css";


const Subscribe = () => {

    return (
        <div className="sub">
            <div className="subscribeword">
                Do you want more juicy tea?<br />
            
                You can subscribe for more!
            </div> 

            <button className="subscrib">
                Subscrib
            </button>

            <div className="cup">
                <Icon icon="icon-park-outline:tea-drink" />
            </div>

            

            

        </div>
    )
};

export default Subscribe;
