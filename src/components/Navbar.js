import React from "react";
import "../style/navbar.css";
import logo from '../assets/assets_Homework_Front-End_01/bitmap.png';
import search from '../assets/assets_Homework_Front-End_01/search-copy.png';
import '../App.css';

export default function Navbar() {
    return (
        <div className="section col group container">
            <ul >
                <div class="dispNav">
                    <li><a href="#home">SO FUNKTIONIERT'S</a></li>
                    <li><a href="#news">SONDERANGEBOTE</a></li>
                    <li class="active" ><a href="#about"> <select>
                        <option value={1}><span className="joke">MEIN BEREICH</span></option>
                        <option value={2}>My published jokes</option>
                        <option value={3}>My saved jokes</option>
                        <option value={4}>Account information</option>
                        <option value={5}>Publish new joke</option>
                    </select></a></li>
                </div>
            </ul>
            <div class="section joke-bible-container">
                <img src={logo} className="col span_f_2" alt="img" />
                <div class="joke-bible-container joke-bible-text">
                    <p className="The-Joke-Bible">The Joke Bible</p>
                </div>
                <p className="daily-laughs">Daily Laughs for you and yours</p>
                <input className="span_1_of_2 search"></input>  <img src={search} className='searchh' alt="img" />
            </div>

        </div>
    );
}