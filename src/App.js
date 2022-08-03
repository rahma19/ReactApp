import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import List from "./components/List";


export default function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data.result[0]);
  //   });
  // }, []);

  // if (!post) return null;

  // return (
  //   <div className="App">
  //     <h1>{post.id}</h1>
  //     <p>{post.value}</p>
  //   </div>
  // );

  return (
    <div className='App'>
      <Navbar />
      <List />

        <Home />
     <Footer />
    </div>
  );
}