import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateTable from "./components/CreateTable";
import EditTable from "./components/EditTable";
import Menu from "./components/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/create" element={<CreateTable />} />
      <Route path="/edit" element={<EditTable />} />
    </Routes>
  );
}

export default App;
