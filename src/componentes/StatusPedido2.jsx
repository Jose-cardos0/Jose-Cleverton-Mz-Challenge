import { useState } from "react";
import "./StatusPedido.css";
import "./StatusPedido2.css";

import IcconSeta from "./assets/icons8.png";
import IcconSeta2 from "./assets/icon9.png";

const StatusPedido2 = () => {
  const [imagem, setImagem] = useState(IcconSeta);
  const [mostrarContainerPedido, setMostrarContainerPedido] = useState(true);

  const alternarImagemEVisibilidade = () => {
    setImagem(imagem === IcconSeta ? IcconSeta2 : IcconSeta);
    setMostrarContainerPedido(!mostrarContainerPedido);
  };

  return (
    <main>
      <div id="pedido-F2">
        <section id="entrega-master">
          <div className="setaccolor" onClick={alternarImagemEVisibilidade}>
            <div className="colorseta">
              <img src={imagem} alt="" />
            </div>
          </div>
          <div id="entrega">
            <div className="responsiveHeight">
              <p className="entregaf1">Entrega F2</p>
              <p>22071559-F2</p>
            </div>
            <div className="responsiveHeight">
              <p className="globalblue">Status da entrega</p>
              <p>
                <span className="bolinha-entregue"></span>Separação
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StatusPedido2;
