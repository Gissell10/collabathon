import React from "react";
import { Icon } from '@iconify/react';
import "../App.css";


const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                GIVE ME <br />
            
                THE TEA
            </div> 

           

            <ul className="icon-section">
                <li>Home<div className="icon"><Icon icon="ic:baseline-tiktok" /></div></li>
                <li>About us<div className="icon"><Icon icon="mingcute:ins-fill" /> </div></li>
                <li>Help & support<div className="icon"><Icon icon="typcn:rss" /></div></li>
            </ul>




           

            

            

        </div>

        



    )
};

export default Footer;
