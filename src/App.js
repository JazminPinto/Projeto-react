import React, { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastrar from "./Components/Cadastro/Cadastrar";
import Home from "./Components/Home/Home";
import Editar from "./Components/Cadastro/Editar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Produtos from "./Components/Produtos/Produtos";
import Clientes from "./Components/Clientes/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
