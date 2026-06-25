//Paso 1
import {useState} from "react"

function Saludo(){
    // Paso 2
    const [nombre,setNombre] = useState("")
    const [enviar,setEnviar] = useState(false)

    return(
        <>

        {/* Paso 4 */}
        <input 
        type="text" 
        placeholder="Ingrese su nombre" 
        onChange = {(event)=>setNombre(event.target.value)}
        />
        <button onClick={()=>setEnviar(true)}>Enviar</button>


        {/* Paso 3 */}
        {enviar ? <h1>Hola {nombre}!</h1> : <h1>Hola!</h1>}
        </>
    )
}
export default Saludo;