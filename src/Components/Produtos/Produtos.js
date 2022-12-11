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
          <p>Nome do produto: {produto.nome}</p>
          <p>Descricao: {produto.descricao}</p>
          <p>Preco: {produto.preco}</p>
          <p>Categoria: {produto.categoria}</p>
          <p>Empreendedor: {produto.empreendedor}</p>
          <p>Contato: {produto.contato}</p>
        </div>
      )
    }

    )}

    </div>
  );
}
