import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";
import { TestPage } from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
