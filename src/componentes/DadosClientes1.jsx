import "./DadosClientes.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/customer"; //dados cliente
const url1 = "http://localhost:3000/billingAddress"; //endereços de cobrança
const url2 = "http://localhost:3000/payments"; //pagamento
const url3 = "http://localhost:3000/totals"; //valores do pedido

//conexão com Dados do Cliente
const DadosClientes1 = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();

      setDados(data);
    }
    getData();
  }, []);

  //conexão com endereço de cobrança
  const [dados1, setDados1] = useState([]);
  useEffect(() => {
    async function getDados() {
      const res1 = await fetch(url1);
      const data1 = await res1.json();

      setDados1(data1);
    }
    getDados();
  }, []);

  //conexão com payments
  const [dados2, setDados2] = useState([]);
  useEffect(() => {
    async function getDados2() {
      const res2 = await fetch(url2);
      const data2 = await res2.json();

      setDados2(data2);
    }
    getDados2();
  }, []);

  //conexão com totals
  const [dados3, setDados3] = useState([]);
  useEffect(() => {
    async function getDados3() {
      const res3 = await fetch(url3);
      const data3 = await res3.json();

      setDados3(data3);
    }
    getDados3();
  }, []);

  return (
    <main>
      <div id="container">
        <section className="container-aparence containermaior">
          <div id="container-text1">
            <div>
              <h2>Dados do Cliente</h2>
            </div>
            <div>
              <p className="globalgrey">{dados.name}</p> {/*nome do comprador*/}
              <p>434.654.123-90</p> {/*CPF do comprador*/}
            </div>
            <div>
              <p className="globalgrey">{dados.email}</p>{" "}
              {/*email do comprador*/}
              <p>{dados?.telephone?.number}</p> {/*celular do comprador*/}
            </div>
            <div>
              <p className="globalblue">Endereço de Cobrança</p>
              <p>
                {dados1.address1}, {dados1.number} {dados1.city} -{" "}
                {dados1.state} - {dados1.zip}
              </p>{" "}
              {/*endereço de cobrança*/}
            </div>
            <div>
              <p className="globalblue">Endereço de Entrega</p>
              <p>
                {dados1.address1}, {dados1.number} {dados1.city} -{" "}
                {dados1.state} - {dados1.zip}
              </p>{" "}
              {/*endereço de entrega*/}
            </div>
          </div>
        </section>
        <section className="container-aparence containermenor">
          <div id="container-text2">
            <div>
              <h2>Dados do pagamento</h2>
            </div>
            <div className="alinhando spaceentrelinhas">
              <p>Subtotal</p> {/*valor total*/}
              <p>R${dados3?.subtotal?.toFixed(2)}</p>
            </div>
            <div className="alinhando spaceentrelinhas">
              <p>Frete</p> {/*valor frete*/}
              <p>R${dados3?.freightCosts?.toFixed(2)}</p> {/*<--------HERE*/}
            </div>
            <div className="alinhando spaceentrelinhas">
              <p>Desconto</p> {/*valor desconto*/}
              <p style={{ color: dados3.discount > 0 ? "red" : "inherit" }}>
                -R${dados3?.discount?.toFixed(2)}
              </p>
            </div>
            <div className="valortotal alinhando">
              <p>Valor total</p> {/*valor total subtraido o desconto*/}
              <p style={{ color: dados3.total > 0 ? "green" : "inherit" }}>
                -R${dados3?.total?.toFixed(2)}
              </p>
            </div>
            <div className="formpgt">
              <p className="globalblue">Método de Pagamento</p>{" "}
              {/*informações do cartao*/}
              <div className="pgt spaceentrelinhas">
                {dados2.map((pagamento) => (
                  <p key={pagamento.id}>
                    {pagamento.brand} {pagamento.number} Epx.{" "}
                    {pagamento.expiresAt}
                  </p>
                ))}
                {dados2.map((pagamento) => (
                  <p key={pagamento.id}>
                    {pagamento.installments}x de R$
                    {dados3?.total?.toFixed(2)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DadosClientes1;
