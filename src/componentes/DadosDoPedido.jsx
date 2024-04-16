import { useState, useEffect } from "react";
import "./DadosDoPedido.css";

const DadosDoPedido = () => {
  const [dataCompra, setDataCompra] = useState([]);
  const [tipoDeCompra, setTipoDeCompra] = useState([]);

  const url = "http://localhost:3000/updatedAt";
  const url5 = "http://localhost:3000/pointOfSale";

  const convertDate = (originalDate) => {
    const date = new Date(originalDate);

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const ano = date.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    async function getData() {
      const res1 = await fetch(url);
      const data1 = await res1.text();
      setDataCompra(convertDate(data1));

      const res2 = await fetch(url5);
      const data2 = await res2.text();
      setTipoDeCompra(data2);
    }

    getData();
  }, []);

  return (
    <main>
      <section className="container">
        <div className="subcontainer">
          <div>
            <h2>Dados do Pedido</h2>
          </div>
          <div id="container-divs">
            <div>
              <p className="globalblue responsiveGrid">Comprado em</p>
              <p>{dataCompra}</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Ponto de Venda</p>
              <p>{tipoDeCompra}</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Modalidade de Entrega</p>
              <p>F1 Envio pela loja, F2 Retira em Loja</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DadosDoPedido;
