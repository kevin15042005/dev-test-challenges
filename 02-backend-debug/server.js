  // server.js
  // BUG #1: missing await in async DB simulation — always returns undefined
  // BUG #2: 200 status returned on error — misleads client
  // BUG #3: no input validation on POST /save
  // BUG #4: memory leak — global array grows without limit
  // BUG #5: no error handling middleware
  // BUG #6: GET /data returns wrong field (undefined)

  const express = require ('express');
  const app = express();
  app.use(express.json());

  // BUG #4: unbounded global array — memory leak under load
  const requestLog = [];

  // Simulated async DB read
  async function getDataFromDB() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id: 1, value: 'hello' }), 100);
    });
  }''


  app.get('/data', async (req, res) => {
    requestLog.push({ ts: Date.now() });   // BUG #4: never trimmed

    //Se hace el recorrido hasta de toda la lista y se eliminara le primero con shift 
    if(requestLog.length >=100){
      requestLog.shift();
    }

    const data = await getDataFromDB();          // BUG #1: missing await

    if (!data) {
      return res.status(404).json({ error: 'No data found' });  // BUG #2: should be 404
      
    }

    res.json({ result: data.value });     // BUG #6: should be data.value
  });

  // POST /save
  // BUG #3: no validation — accepts anything including empty, null, XSS payloads
  // BUG #4: every request logged permanently
  app.post ('/save',async  (req, res) => {
    const { name, value } = req.body;
    //Se hace la tipacion de los datos y se valida que no sean vacios o se valida si son string
    if(!name  || !value || typeof name !== "string" || typeof value  !== "string"){
      return res.status(400).json({error:"Nombre y Valor incompletos"})
    }


 
    // BUG #3: no validation at all
    requestLog.push({ name, value, ts: Date.now() });  // BUG #4
//Se recorre la lista y se elimina el primero con shift para evitar que crezca sin limite
    if(requestLog.length >=100){
      requestLog.shift();
    }
    const data  = await getDataFromDB();
    
    //Condicion el cual verifica si la data pasa null o tiene valores 
    if(!data){
     return  res.status(500).json({error:"Base de datos no funciona"})
    }
    return res.status(200).json({ saved: true, name, value });

  });

  // BUG #5: no error handling middleware — unhandled errors crash or leak stack traces
  // Missing: app.use((err, req, res, next) => { ... })

  //Se adiciona los middleware error para veitar los errores 
  app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).json({error:"Algo salio mal en el server"})
  })

  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });

  module.exports = app;