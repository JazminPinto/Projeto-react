import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Cabecalho() {
  return (
    <header>
      <Link to="/">
        <h2>Guia do emprendedor</h2>
      </Link>
      <Link to="/produtos">
        <Button variant="primary">Produtos</Button>
      </Link>
      <Link to="/cadastrar">
        <Button variant="primary">Cadastro</Button>
      </Link>
      <Link to="/clientes">
        <Button variant="primary">Clientes</Button>
      </Link>
    </header>
  );
}
