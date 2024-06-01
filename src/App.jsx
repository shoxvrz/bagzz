import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return <>
    <div className="app">
        <Navbar/>
        <Main/>
        <Navigation/>
    </div>
  </>;
}

export default App;
