import "./App.css";
import DefaultLayout from "./components/DefaultLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailLayout from "./components/DetailLayout/DetailLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/detail" element={<DetailLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
