import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
