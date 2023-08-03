import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navred from "./Pages/Navred";
import Navblack from "./Pages/Navblack";
import Navgreen from "./Pages/Navgreen";
import { Route, Routes } from "react-router-dom";
import Formsubmit from "./components/formsubmit/Formsubmit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navblack />} />
        <Route path="/about" element={<Navred />} />
        <Route path="/work" element={<Navgreen />} />
      </Routes>
      <Formsubmit />
    </div>
  );
}

export default App;
