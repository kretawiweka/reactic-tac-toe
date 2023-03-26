import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
