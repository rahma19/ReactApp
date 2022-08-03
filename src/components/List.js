import React from "react";
import "../style/card.css";

export default function List() {

    const categories = [
        { id: 1, value: 'ADULT JOKES', color: '#ff5b5b',textCol:'white' },
        { id: 2, value: 'DAD JOKES', color: '#ff915b',textCol:'white'  },
        { id: 3, value: 'CHRISTMAS JOKES', color: '#ffbe5b',textCol:'white'  },
        { id: 4, value: 'JOB JOKES', color: '#ffdf5b',textCol:'grey'  },
        { id: 5, value: 'BIRTHDAY JOKES', color: '#8fe360',textCol:'white'  },
        { id: 6, value: 'SOCIAL JOKES', color: '#57e690' ,textCol:'white' },
        { id: 7, value: 'PUNS', color: '#57dbe6',textCol:'white'  },
        { id: 8, value: 'VIEW ALL', color: 'none',textCol:'#cfb995'  }
    ];

    return (
        <div className=" sec group">
            {categories.map((categ,index) => (
                
                <div style={{ backgroundColor: categ.color ,color:categ.textCol}} className="cards col span_1_of_3" key={categ.id}>
                    <div >{categ.value} </div>
                </div>
            ))}
        </div>
    );
}