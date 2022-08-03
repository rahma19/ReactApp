import React from "react";
import "../style/navbar.css";
import '../App.css';
import { useParams } from "react-router-dom";

export default function DetailJoke() {
     const { name } = useParams();

    return (
        <div className="section col group container">
            
        </div>
    );
}