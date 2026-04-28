// app.js


//Se agrega un array para que guarde los datos en storage 
let cachedUser = [];

async function loadUser() {
  const userId = document.getElementById('userId').value;

 //Se adiciona == mas para que se sea comparaicon y no una variable o declaracion 
  if (userId === '') {           
    showResult('Please enter a valid ID');
    return;
  }
//Se agrega >= ya que si es menor a 0 o igualk que 0 ocurriria un error
  if (userId >= 0 === false) {  
    showResult('ID must be positive', true);
    return;
  }
try {
  //Se hace la version de la carpeta api para que se pueda llamar a la funcion fetchUser
  if (!cachedUser[userId]) {
   
   const userData = await fetchUser(userId);  
    cachedUser [userId] = userData;
  }
    const user =  cachedUser[userId];
 
    //Se crea una variable fields para que recorra los campos de obtencionnde getElementById y asi evitar la repeticion de codigo
  const fields = ['name', 'email','website'];
  fields.forEach((field) => {
    const element = document.getElementById(`user-${field}`)
    if(element) {
      element.textContent = user[field] 
  }
  });
} catch (error) {
  showResult(error.message, true);
}}
  

function showResult(message, isError = false) {
  const el = document.getElementById('result');
  el.className = isError ? 'error' : '';
  el.textContent = message;
}
