import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <Cabecalho />
      <h1>Produtos</h1>

    {produtos.map((produto)=>{
      return(
        <div key={produto.id}>
          <ul>
          <li>Nome do produto: {produto.nome}</li>
          <li>Descrição: {produto.descricao}</li>
          <li>Preço: {produto.preco}</li>
          <li>Categoria: {produto.categoria}</li>
          <li>Empreendedor: {produto.empreendedor}</li>
          <li>Contato: {produto.contato}</li>
          </ul>
        </div>
      )
    }

    )}

    </div>
  );
}
