import React from "react";
import "../style/navbar.css";
import logo from '../assets/assets_Homework_Front-End_01/bitmap.png';
import '../App.css';

export default function Navbar() {
    return (
        <div className="section col group container">
            <ul >
                <div class="dispNav">
                    <li><a href="#home">SO FUNKTIONIERT'S</a></li>
                    <li><a href="#news">SONDERANGEBOTE</a></li>
                    <li class="active" ><a href="#about"> <select>
                        <option><span className="joke">MEIN BEREICH</span></option>
                        <option>My published jokes</option>
                        <option>My saved jokes</option>
                        <option>Account information</option>
                        <option>Publish new joke</option>
                    </select></a></li>
                </div>
            </ul>
            <div class="section joke-bible-container">
                <img src={logo} className="col span_f_2" alt="img" />
                <div class="joke-bible-container joke-bible-text">
                    <p className="The-Joke-Bible">The Joke Bible</p>
                </div>
                <p className="daily-laughs">Daily Laughs for you and yours</p>
                <input className="span_1_of_2 search"></input>
            </div>

        </div>
    );
}