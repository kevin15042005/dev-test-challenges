import { useState } from "react";
import SearchInpu from "./Components/SearchInpu";
import Card from "./Components/Card";
import Historias from "./Components/Historial";

function App() {
  {/*Se crean estados para visulizar y renderizar el historial y el resultado*/}
  const [resultado, setResultado] = useState(null);
  const [histroial, setHistorial] = useState([]);

  const obtenerDatos = async (nombreABuscar) => {
    if (!nombreABuscar) return;
    {/*Se obtiene el  api desde  un .env el cual asegura los datos*/}
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${nombreABuscar}`);

      if (res.ok) {
        const data = await res.json();

        setResultado(data);
        setHistorial((prevHistorial) => [nombreABuscar, ...prevHistorial]);
      }
    } catch (error) {
      throw new Error("Error al obtener los datos", error);
    }
  };

  return (
    <>
    {/*Se tran con import los componentes  con el fin de renderizar cada uno de ellos*/}
      <div>
        <h2>Pagina Padre</h2>

        <SearchInpu onBuscar={obtenerDatos}/>

        {resultado && <Card data={resultado} />}
        
        <Historias lista={histroial} />
        
      </div>
    </>
  );
}

export default App;
