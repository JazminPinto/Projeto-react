import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

export default function Criar() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const novoCadastro = async () => {
    const cadastroPost = {
      nome,
      telefone,
      email,
    };

    //crear cadastro
    await fetch("http://localhost:3004/cadastro", {
      method: "POST",
      body: JSON.stringify(cadastroPost),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    return (
      <div>
        <form>
          <div>
            <span>Nome: </span>
            <label>
              <input
                type="text"
                placeholder="Nome Sobrenome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
          </div>
          <div>
            <span>Telefone: </span>
            <label>
              <input
                type="text"
                placeholder="(xx) xxxxx-xxxx"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </label>
            <div></div>
            <span>E-mail: </span>
            <label>
              <input
                type="text"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </form>
        <Link to="/">
          <Button
            variant="success"
            onClick={novoCadastro}
            className="botao-cadastro"
          >
            Cadastrar
          </Button>
        </Link>
      </div>
    );
  };
}
