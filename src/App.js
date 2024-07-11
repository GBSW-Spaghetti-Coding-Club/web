import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages";
import Create from "./pages/create";
import NotFoundPage from "./pages/404";
import Information from "./pages/information";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/info" element={<Information />}></Route>
        <Route path="/image-generate" element={<Create />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
