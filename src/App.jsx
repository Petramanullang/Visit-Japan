import Navbar from "./Navbar/Navbar";
import Heroes from "./Heroes/Heroes";
import Content from "./Content/Content";
import Content2 from "./Content/Content-2";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Heroes />
      <Content />
      <Content2 />
      
    </div>
  );
}

export default App;
