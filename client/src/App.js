import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Posts from "./components/Posts"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
