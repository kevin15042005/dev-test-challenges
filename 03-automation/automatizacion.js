
const express = require('express')
const app = express()
app.use(express.json())

let basedatos =[]
let errorLog =[]


const validacionEmailRegex = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


const guardarIntentos = async (userData,retries = 1)=>{
    try {
        if(Math.random()<0.2) throw new Error ("Error de conexion")
            basedatos.push(userData)
    } catch (error) {
        if(retries>0){
            console.log ("Reintentando guardadno")
            return await guardarIntentos(userData, retires -1)
        }
        throw error;
    }
}

app.post('/webhook', async (req,res)=>{
    const {name,email,source} = req.body
    try {
        //Validamos el formato
         if(!validacionEmailRegex){
        return res.status(400).json({status:"error", message:"Email no valido"})
    }

    //Rechaazamos los duplicados
    const exitencia = basedatos.find(user=>user.email === email)
    if(exitencia){
        return res.status(409).json({status:"duplicados" , message:"EL email no es valido"})
    }
//Realizamos la promesa  para guardar y reintentar
    await guardarIntentos({name,email,source})
//Respuesta exitosa
    return res.status(200).json({status:"success",message:"Datos guardados correctamemente"})


    } catch (error) {
        //Error de log
            errorLog.push({email, reason: error.message , date: new Date()})
            return res.status(500).json({status:"error",message:"Falla tecnica"})
    }
   
})

app.listen(3000,() =>console.log("Servidor correindo"))