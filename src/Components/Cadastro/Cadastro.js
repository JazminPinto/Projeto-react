import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "bootstrap";

//atualizar, apagar cadastro

export default function Cadastro() {
  const [cadastro, setCadastro] = useState([]);
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const fecharModal = () => setShow(false);
  const mostrarModal = (key) => {
    setId(key);
    setShow(true);
  };

  useEffect(() => {
    atualizarCadastro();
  }, []);

  const atualizarCadastro = () => {
    fetch("http://localhost:3004/cadastro")
      .then((response) => response.json())
      .then((data) => setCadastro(data));
  };

  //apagar cadastro
  const apagarCadastro = async () => {
    await fetch(`http://localhost:3004/cadastro/${id}`, {
      method: "DELETE",
    });
    atualizarCadastro();
    fecharModal();
  };

  return (
    <div>
      <h1>Contatos Cadastrados</h1>

      {cadastro.map((contato) => {
        return (
          <div key={contato.id}>
            <ul>
              <li>{contato.nome}</li>
              <li>{contato.email}</li>
              <li>{contato.telefone}</li>
            </ul>
            <div>
              <Link to={`/editar/${contato.id}`}>
                <Button
                  variant="outline-success"
                  size="sm"
                  className="botoes-lista"
                >Editar {" "}
                </Button>
              </Link>
              <br />
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => mostrarModal(contato.id)}
                className="botoes-lista"
              >Apagar 
              </Button>
            </div>
          </div>
        );
      })}

      
<Modal show={show} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apagar cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza?<br/> Esta informação não poderá ser recuperada.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={apagarCadastro}>Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
