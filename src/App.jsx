import Navbar from "./Navbar/Navbar";
import Heroes from "./Heroes/Heroes";
import Content from "./Content/Content";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Heroes />
      <Content />
    </div>
  );
}

export default App;
