import { Link } from "react-router-dom";
import { Button } from "bootstrap";

export default function Home() {
  return (
    <header>
      <h2>Guia do emprendedor</h2>
      <Link to="/negocios">
        <Button variant="outline=primary" className="botoes-home">Negocios</Button>
      </Link>
      <Link to="/guia">
        <Button variant="outline=primary" className="botoes-home">Guia</Button>
      </Link>
      <Link to="/cadastro">
        <Button variant="outline=primary" className="botoes-home">Cadastro</Button>
      </Link>
    </header>
  );
}
