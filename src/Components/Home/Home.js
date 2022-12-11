import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <main>
    <h1>Pagina principal</h1>
    <Link to="/cadastrar">
        <Button variant="primary">Anunciantes</Button>
      </Link>
      <Link to="/produtos">
        <Button variant="primary">Site</Button>
      </Link>
    </main>
  );
}
