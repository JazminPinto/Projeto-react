import React, { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastro from "./Components/Cadastro/Cadastro";
import Criar from "./Components/Cadastro/Criar";
import Home from "./Components/Home/Home";
import Editar from './Components/Cadastro/Editar'
import 'bootstrap';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Editar />
      <Home />
      <Criar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/negocios" element={<Cadastro />} />
        <Route path="/editar/id" element={<Home />} />
        <Route path="/cadastro" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
