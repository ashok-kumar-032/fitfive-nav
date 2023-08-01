import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navred from "./components/Navred";
import Navblack from "./components/Navblack";
import Navgreen from "./components/Navgreen";
import { Route, Routes } from "react-router-dom";
import Fitfive from "./components/Fitfive";
function App() {
  return (
    <div className="App">
      {/* <Navblack />
      <Navred />
      <Navgreen /> */}
      <Routes>
        <Route path="/" element={<Navblack />} />
        <Route path="/about" element={<Navred />} />
        <Route path="/work" element={<Navgreen />} />
      </Routes>
      {/* <Fitfive /> */}
    </div>
  );
}

export default App;
