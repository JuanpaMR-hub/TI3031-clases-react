// Paso 1. Importar useState
import {useState} from "react"

function Contador() {
  // Paso 2. Inicializar la constante del estado
  // const [variable, setVariable] = useState(valor_por_defecto)
  const [contador,setContador] = useState(0)

  return (
    <>
    {/* Paso 3. Utilizar */}  
    <h1>{contador}</h1>

    {/* Paso 4. Modificar el estado contador */}
    {/* setVariable(dato) */}
    <button onClick={()=>setContador(contador+1)} >Aumentar</button>

    </>
  )
}

export default Contador;
