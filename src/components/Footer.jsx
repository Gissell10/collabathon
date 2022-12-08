import React from "react";
import { Icon } from '@iconify/react';
import "../App.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                Contact us <br />
            
                Subscribe
            </div> 

            <div className="about">
                About us

                <div className="cup">
                    <Icon icon="icon-park-outline:tea-drink" />
                </div>

            </div>

            

        </div>

        



    )
};

export default Footer;
