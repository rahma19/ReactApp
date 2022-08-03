import React from "react";
import "../style/card.css";

export default function List() {

    const categories = [
        { id: 1, value: 'Ford', color: '#ff5b5b' },
        { id: 2, value: 'BMW', color: '#ff915b' },
        { id: 2, value: 'BMW', color: '#ffbe5b' },
        { id: 2, value: 'BMW', color: '#ffdf5b' },
        { id: 2, value: 'BMW', color: '#8fe360' },
        { id: 2, value: 'BMW', color: '#57e690' },
        { id: 2, value: 'BMW', color: '#57dbe6' },
        { id: 3, value: 'Audi', color: 'none' }
    ];

    return (
        <div className=" sec group">
            {categories.map((categ) => (
                <div style={{ backgroundColor: categ.color }} className="cards col span_1_of_3" key={categ.id}>
                    <div >{categ.value}</div>
                </div>
            ))}
        </div>
    );
}