function Card({ data }) {
  return (
    <div>Card

{/*Se crea una card el cual muestra la información del usuario se llama la data con el item adicional*/}
    <h3>{data.name}</h3>
      <p> {data.email}</p>
      <p>{data.company?.name}</p>
      <p> {data.address?.city}</p>
    </div>
  )
}

export default Card;