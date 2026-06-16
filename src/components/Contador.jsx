import {useState} from "react"

function Contador(){
  // ESTADO
  // Un estado es un dato que está en constante revisión
  
  // Hook -> Diversas funcionalidades de React
  // useState
  
  // const [variable, setVariable] = useState(dato default)
  const [contador, setContador] = useState(0)


  function aumentar(){
    // setVariable(cambio a realizar)
    setContador(contador+1)
    // contador = contador + 1
  }

  return (
    <>
    <h1>Hola Mundo!</h1>
    <p>{contador}</p>
    <button onClick={aumentar}>Haga click aqui!</button>
    </>
  )
}

export default Contador;