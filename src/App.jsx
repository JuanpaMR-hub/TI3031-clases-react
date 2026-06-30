import {useState} from "react"

function App(){

  const [nombre,setNombre] = useState( 
    //Operacion ternaria = un if con un else
    // Existe usuario en localStorage?
    localStorage.getItem("usuario") ? 
    // En caso de que si exista el valor sea este: 
    JSON.parse(localStorage.getItem("usuario")).username 
    // Si no (else)
    :
    //que el valor sea este 
    ""
)

  const guardarNombre =()=>{
    let usuario={
      username:nombre,
      edad:18
    }
    localStorage.setItem("usuario",JSON.stringify(usuario))
  }

  return(
    <>
    <h1>{nombre}</h1>
    <hr />
    <div className="container">
      <input type="text" placeholder="Ingrese su nombre:" onChange={(e)=>setNombre(e.target.value)} />
      {/* Las funciones no las debemos dejar con parentesis, sino, se ejecuta sin hacer un click */}
      <button onClick={guardarNombre}>Guardar</button>
      <button onClick={()=>localStorage.removeItem("usuario")}>Borrar Usuario</button>

    </div>
    </>
  )
}

export default App;