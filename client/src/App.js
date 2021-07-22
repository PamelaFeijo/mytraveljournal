import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import React from 'react';


function App() { 
  return (
    <div className="App">
      <Header />
      <Main />
      <Posts />
      <Footer />      
    </div>
  );
}

export default App;
