// api.js

async function fetchUser(id) {
  //Se adiciona un excepcion para manejar errores en caso de que el usuario no exista o haya un error en la solicitud
  try {
    //Se adiciona await para el llamado asinconico de fecth
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    //Se añade una condicional 
    if(!response.ok){
      throw new Error ('Usuario no encontrado')
    }
    //Se adiciona await para el llamado asinconico de json
    const data = await response.json();
    return data;
  } catch (error) {
    throw  Error("Falla en la entrada de datos ", error);
  }
}
