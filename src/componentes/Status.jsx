import { useState, useEffect } from "react";
import "./Status.css";

//importando dados
const url = "http://localhost:3000/id";

//getter e setter dos dados
const Status = () => {
  const [idCar, setidCar] = useState([]);

  //uso de uma função assincrona
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();

      setidCar(data);
    }

    getData();
  }, []);

  const scrollParaColorseta = () => {
    const colorsetaDiv = document.getElementById("colorseta");
    colorsetaDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="containermaster">
        <div className="navbar2">
          <p className="dadopedido1 globalblue">Pedido</p>
          <p className="dadopedido respondiveGriStatus">{idCar}</p>
        </div>

        <div className="navbar2">
          <p className="dadopedido1 globalblue">Status do pedido</p>
          <p className="dadopedido respondiveGriStatus pendenteStatus">
            <span className="bolinha-pendente"></span>
            Pendente
          </p>
        </div>

        <div className="navbar2 ">
          <p className="dadopedido1 globalblue">Entregas relacionadas</p>
          <div className=" respondiveButtons">
            <button
              onClick={scrollParaColorseta}
              className="botaoCompra dadopedido"
            >
              F1
            </button>
            <button className="botaoCompra dadopedido">F2</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
