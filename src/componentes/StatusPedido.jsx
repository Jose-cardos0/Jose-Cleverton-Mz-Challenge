import { useState, useEffect } from "react";
import "./StatusPedido.css";

import IcconSeta from "./assets/icons8.png";
import IcconSeta2 from "./assets/icon9.png";
import loreto1 from "./assets/lorreto.png";

const convertDate = (originalDate) => {
  const date = new Date(originalDate);

  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

const StatusPedido = () => {
  const [imagem, setImagem] = useState(IcconSeta);
  const [mostrarContainerPedido, setMostrarContainerPedido] = useState(true);
  const [idSET, setID] = useState([]);
  const [idDadosDaEntrega, setDados] = useState({});

  const url6 = "http://localhost:3000/id";
  const url7 = "http://localhost:3000/fulfillments";

  const alternarImagemEVisibilidade = () => {
    setImagem(imagem === IcconSeta ? IcconSeta2 : IcconSeta);
    setMostrarContainerPedido(!mostrarContainerPedido);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(url6);
      const data = await res.text();
      setID(data);

      const res2 = await fetch(url7);
      const data2 = await res2.json();
      setDados(data2["F1"]);
    }

    getData();
  }, []);

  return (
    <main>
      <section id="entrega-master">
        <div className="setaccolor" onClick={alternarImagemEVisibilidade}>
          <div className="colorseta">
            <img src={imagem} alt="" />
          </div>
        </div>
        <div id="entrega">
          <div className="responsiveHeight">
            <p className="entregaf1">Entrega F1</p>
            <p>{idSET}-F1</p>
          </div>
          <div className="responsiveHeight">
            <p className="globalblue">Status da entrega</p>
            <p>
              <span className="bolinha-verde"></span>Entregue
            </p>
          </div>
        </div>
      </section>
      {mostrarContainerPedido && (
        <section id="containerpedido">
          <div id="dados">
            <div>
              <h2>Dados da Entrega</h2>
            </div>
          </div>
          <div id="dados2">
            <div>
              <p className="globalblue">Retirado por</p>
              <p>Alexandre de Oliveira Martins</p>
              <p>845.983.233-90</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Modalidade</p>
              <p>Envio pela loja</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Previsão de Entrega</p>
              <p>{convertDate(idDadosDaEntrega.createdAt) || "00/00/0000"}</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Endereço de Entrega</p>
              <p>
                {idDadosDaEntrega?.shipment?.address1} ,{" "}
                {idDadosDaEntrega?.shipment?.number}{" "}
                {idDadosDaEntrega?.shipment?.city} -{" "}
                {idDadosDaEntrega?.shipment?.state}{" "}
                {idDadosDaEntrega?.shipment?.zip}
              </p>{" "}
            </div>
          </div>
          <div id="frete">
            <div>
              <p className="globalblue">Transportadora</p>
              <p>SISTEMAS S.A</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Tipo</p>
              <p>{idDadosDaEntrega.type}</p>
            </div>
            <div>
              <p className="globalblue responsiveGrid">Preço do frete</p>
              <p>
                R$
                {idDadosDaEntrega.freightCosts
                  ? idDadosDaEntrega.freightCosts.totalPrice.toFixed(2)
                  : ""}
              </p>{" "}
            </div>
            <div>
              <p className="globalblue responsiveGrid">
                Previsão de entrega Transportadora
              </p>
              <p>{convertDate(idDadosDaEntrega.updatedAt)}</p>{" "}
            </div>
          </div>

          <section id="DetalheDaEntrega">
            <div id="carrinho">
              <h2>Detalhes da Entrega</h2>
            </div>
            <div id="subDivGeral">
              <div id="detalheGeral">
                <div id="categorias">
                  <div className="div1">
                    <p className="globalblue categoryProduct">PRODUTO</p>
                  </div>
                  <div className="div2">
                    <p className="globalblue ">SKU</p>
                  </div>
                  <div className="div3">
                    <p className="globalblue">QTD.</p>
                  </div>
                  <div className="div4">
                    <p className="globalblue alinhado">PREÇO</p>
                  </div>
                </div>
                <div>
                  <div className="itensCarrinho">
                    <div className="divItem">
                      <img src={loreto1} alt="tenis" /> {/*imagem do tenis */}
                      <div className="subDivItem">
                        <p>{idDadosDaEntrega?.items?.AR384675?.name}</p>{" "}
                        {/*descrição do tipo do tenis */}
                        <p>
                          {idDadosDaEntrega?.items?.AR384675?.color},{" "}
                          {idDadosDaEntrega?.items?.AR384675?.size}{" "}
                        </p>{" "}
                        {/*cor do tenis e tamanho */}
                      </div>
                    </div>
                    <div className="sku">
                      <p>{idDadosDaEntrega?.items?.AR384675?.sku}</p>{" "}
                      {/*SKRU */}
                    </div>
                    <div className="qtd">
                      <p>{idDadosDaEntrega?.items?.AR384675?.quantity}</p>{" "}
                      {/*QTD */}
                    </div>
                    <div id="pgPedidoMaster">
                      <div className="pgmtPedido">
                        <div className="pmgstatus pmgstatus1">
                          <p>Subtotal</p>
                          <p>
                            R$
                            {idDadosDaEntrega?.items?.AR384675?.price.toFixed(
                              2
                            )}
                          </p>{" "}
                        </div>
                        <div className="pmgstatus pmgstatus2">
                          <p>Frete</p>
                          <p>R$5.00</p>
                        </div>
                        <div className="pmgstatus">
                          <p>Valor total</p>
                          <p>
                            R$
                            {(
                              idDadosDaEntrega?.items?.AR384675?.price *
                                idDadosDaEntrega?.items?.AR384675?.quantity +
                              5
                            ).toFixed(2)}
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itensCarrinho carrinhoGray">
                    <div className="divItem">
                      <img src={loreto1} alt="tenis" /> {/*imagem do tenis */}
                      <div className="subDivItem">
                        <p>{idDadosDaEntrega?.items?.AR384677?.name}</p>{" "}
                        {/*descrição do tipo do tenis */}
                        <p>
                          {idDadosDaEntrega?.items?.AR384677?.color},{" "}
                          {idDadosDaEntrega?.items?.AR384677?.size}{" "}
                        </p>{" "}
                        {/*cor do tenis e tamanho */}
                      </div>
                    </div>
                    <div className="sku">
                      <p>{idDadosDaEntrega?.items?.AR384677?.sku}</p>{" "}
                    </div>
                    <div className="qtd">
                      <p>{idDadosDaEntrega?.items?.AR384677?.quantity}</p>{" "}
                      {/*QTD */}
                    </div>
                    <div className="pgmtPedido">
                      <div className="pmgstatus pmgstatus1">
                        <p>Subtotal</p>
                        <p>
                          R$
                          {idDadosDaEntrega?.items?.AR384677?.price.toFixed(2)}
                        </p>{" "}
                      </div>
                      <div className="pmgstatus pmgstatus2">
                        <p>Frete</p>
                        <p>R$5,00</p>
                      </div>
                      <div className="pmgstatus">
                        <p>Valor total</p>
                        <p>
                          R$
                          {(
                            idDadosDaEntrega?.items?.AR384677?.price *
                              idDadosDaEntrega?.items?.AR384677?.quantity +
                            5
                          ).toFixed(2)}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div id="pushfinally">
                    <div id="valorTotalCarrinho">
                      <div className="TotalFlex pSpace">
                        <p className="responsiveMarginTop">
                          0
                          {idDadosDaEntrega?.items?.AR384675?.quantity +
                            idDadosDaEntrega?.items?.AR384677?.quantity}{" "}
                          unidades de 02 itens
                        </p>{" "}
                        {/*QTD de itens */}
                      </div>
                      <div className="TotalFlex pSpace">
                        <p>Subtotal</p>
                        <p>
                          R$
                          {(
                            idDadosDaEntrega?.items?.AR384677?.price *
                              idDadosDaEntrega?.items?.AR384677?.quantity +
                            idDadosDaEntrega?.items?.AR384675?.price *
                              idDadosDaEntrega?.items?.AR384675?.quantity
                          ).toFixed(2)}
                        </p>{" "}
                      </div>
                      <div className="TotalFlex pSpace">
                        <p>Frete Total</p>
                        <p>R$10.00</p>
                      </div>
                      <div className="TotalFlex divSeparation">
                        <p>Valor total</p>
                        <p>
                          R$
                          {(
                            idDadosDaEntrega?.items?.AR384677?.price *
                              idDadosDaEntrega?.items?.AR384677?.quantity +
                            idDadosDaEntrega?.items?.AR384675?.price *
                              idDadosDaEntrega?.items?.AR384675?.quantity +
                            10
                          ).toFixed(2)}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </main>
  );
};

export default StatusPedido;
