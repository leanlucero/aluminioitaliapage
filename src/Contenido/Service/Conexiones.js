import axios from 'axios'; 

const URL = `https://apirestaluminioitalia.onrender.com`

 export const logearse = async (usuario , pass) =>{
  let aux
  const user = {
    'username' : usuario ,
    'password' : pass
  }
    await axios.post(URL + '/logear/', user
    )
        .then(response => {
          if ( response.data){
          alert('Se ha logeado con exito')
          }
            else {
              alert('Nombre de usuario incorrecto')
              
            }
            aux = response.data
        })
        .catch(error => {
            console.error('Algo malo paso!!', error)            
            
        });
        return aux
}

 export const getCategorias = async () =>{
    let categorias
    await axios.get(URL + '/categoria')
    .then(res => {
      categorias = res.data;
    })   
    return categorias ;
 };

 export const getTrabajos = async () =>{
  let jobs 
  await axios.get(URL + '/trabajo')
   .then(res => {
     jobs = res.data;
   })
   return jobs ;
}

 export const enviarCategoria = async (categoria, nombre , detalle, user)=>{
  let ids = 0
  if (categoria.id) ids= categoria.id
  const cat= {
      'id' : ids ,
      'nombre' : nombre ,
      'detalle' : detalle
  };

  const config = {
      headers: { Authorization: user }
  };  
  
  var catAux= await axios.post('http://localhost:8080/categoria/admin/add', cat , config)
 return catAux.data
  ;
}

export const eliminarCat = async (id, user) => {
  let trab 
  await axios.delete('http://localhost:8080/categoria/admin/delete/' + id, {
      headers: {
        Authorization: user
      }})
      .then(response => {
          alert('Categoria elimada ! ');
          trab=response.data
      })
      .catch(error => {
          console.error('Algo malo paso!!', error)
      });
      return trab
}

export const deleteTrabajo = async (id, user) =>  {  
 return await axios.delete('http://localhost:8080/trabajo/admin/delete/' + id , {
    headers: {
      Authorization: user
    }})
      .then(response => {
          return response.data
      })
      .catch(error => {
          console.error('Algo malo paso!!', error)
          return null
      });
}

export const enviarTrabajo = async (imageData, user) => {
  const config = {
      headers: { Authorization: user,
          "Content-Type": undefined }
  };
  return await axios.post('http://localhost:8080/trabajo/admin/add', imageData,config
)
      .then(response => {
          alert('Trabajo creada con exito: ' + response.data.nombre);
          return response.data
      })
      .catch(error => {
          console.error('Algo malo paso!!', error)
      });
}

 export default {getCategorias , deleteTrabajo , getTrabajos, logearse, enviarCategoria, enviarTrabajo, eliminarCat};
 