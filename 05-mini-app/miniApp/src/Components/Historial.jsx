
//Se crea el historial para visualizar que tantas veces se ha buscado el cual dfunciona y se agrega un prop
function Historias({ lista }) {

  lista = true

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Historial de búsquedas</h3>

      {/*Se recorre la lista hasta los id que tenga y si es igual a 0 no mostrara nada*/}
      {lista.length === 0 ? (
        <p>No has buscado a nadie todavía.</p>
      ) : (
        <ul>
          {/*Recorre con map con el index y se muestra el id y el nombre para el historia*/}
          {lista.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Historias;