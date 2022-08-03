import React from "react";
import "../style/home.css";
import axios from "axios";
import '../App.css';
import logo from '../assets/assets_Homework_Front-End_01/path-copy-3.png';

export default function Home() {
  const baseURL = "https://api.chucknorris.io/jokes/search?query=all";
  const [stateOptions, setStateValues] = React.useState([]);
  const [visible, setVisible] = React.useState(9);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setStateValues(response.data.result);
    });
  }, []);

  const showMoreItems = () => {
    setVisible((previousValue) => previousValue + 9);
  }

  return (
    <div className="container">
      <div className="sec group">
        <hr></hr>

        {stateOptions.slice(0, visible).map((localState, index) => (
          <div className="card col span_1_of_3" key={localState.id}>
            <p className="Lawyer-Joke">{
              localState.categories[0] ? localState.categories[0] : 'Uncategorized'}</p>
            <div className="a-lawyer-dies-and-go">{localState.value}</div>
            <div className="card_buttom"> SEE STATS <img src={logo} alt="arrow" /> </div>
          </div>
        ))}
      </div>
      <div className="sectionFoot footerr elem">
        <button className="butt coll span_f_2" onClick={showMoreItems}>View more</button>
      </div>
    </div>
  );
}