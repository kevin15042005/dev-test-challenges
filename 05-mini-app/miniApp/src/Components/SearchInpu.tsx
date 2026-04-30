    import React, { useState } from 'react'
{/*Se crea el prop con el fin de que se genere una propiedad a la hora de buscar*/}
    function SearchInpu({onBuscar}:any) {
{/*Se crea el estado con el fin de hacer una busaqueda*/}
        const [buscar, setBuscar] = useState('')
        return (
            <>
                <div>
                    {/*Se crea un input para ingresar el id y un botn con el fin de realizar la busqueda*/}
                    <h2>Captura de Entrada del usuario</h2>
                    <p>Ingreso el ID para aparezca el listado del nombre</p>
                    <input type='text' placeholder='Ingrese para listar ' onChange={(e) => setBuscar(e.target.value)} value={buscar} />
                    <button onClick={()=>onBuscar(buscar)}>Buscar</button>
                </div>

            </>
        )
    }

    export default SearchInpu