import React from "react";
import "../style/footer.css";

import logo from '../assets/assets_Homework_Front-End_01/bitmap_2.png';
import arrow from '../assets/assets_Homework_Front-End_01/path-copy-3.png';

export default function Footer() {
    return (
        <div className="sectionFoot footerr elem">
            <img src={logo} className="coll span_f_2" alt="img" />
            <p className="second-txt">GOT JOKES? GET PAID <br /> FOR SUBMITTING!
                <span>
                    <br /> <br /> SUBMIT JOKE <img src={arrow} alt="arrow" />
                </span>
            </p>
        </div>
    );
}