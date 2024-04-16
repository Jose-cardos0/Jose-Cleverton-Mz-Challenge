import "./App.css";
import DadosClientes1 from "./componentes/DadosClientes1";
import DadosDoPedido from "./componentes/DadosDoPedido";

import NavBar from "./componentes/NavBar";
import Status from "./componentes/Status";
import StatusPedido from "./componentes/StatusPedido";
import StatusPedido2 from "./componentes/StatusPedido2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Status />
      <DadosClientes1 />
      <DadosDoPedido />
      <StatusPedido />
      <StatusPedido2 />
    </div>
  );
}

export default App;
