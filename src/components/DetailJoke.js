import React from "react";
import "../style/jokeDetail.css";
import '../App.css';
import { useLocation } from 'react-router-dom'

import { useParams } from "react-router-dom";

export default function DetailJoke() {
    const { id } = useParams();
    const location = useLocation();
    const { from } = location.state;

    return (
        <div className="container">
            <div className="sec group">
                <div class="cldet sp1 card1">
                    <p className="the-granny-joke">The Granny Joke </p>
                    <div className="divStyle">
                    {from.value}
                    </div>
                </div>

                <div class="cldet sp1 card2 ">
                    <h2>THE TOP 10 JOKES THIS WEEK</h2>
                    <ul className="ulDet">
                        <li className="categ">Smoking Joke</li>
                        <li className="categ">My Boss Joke</li>
                        <li className="categ">Dirty Millionaire Joke</li>
                        <li className="categ">The annoying neibghour</li>
                        <li className="categ">Knock Knock</li>
                        <li className="categ">Why Tyson lips</li>
                        <li className="categ">The drunk Police officer</li>
                        <li className="categ">My hip dad (Dad joke)</li>
                        <li className="categ">What not to say in an elevator</li>
                    </ul>
                </div>

                <div>
                    like
                </div>
            </div>
        </div>
    );
}