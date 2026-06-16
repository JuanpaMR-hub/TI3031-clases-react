/*

 Crear un componente con un saludo dinamico
 Es decir, que el usuario ingrese en un input su nombre
 En el texto aparesca el nombre del usuario con un saludo
 Este componente ha de ser llamado en App.jsx

*/
import {useState} from "react"


function Saludar(){
    const [nombre, setNombre] = useState("")

    return(
        <>
        {
            nombre != "" ? 
            <h2>Hola {nombre} !</h2> : 
            <h2>Hola! Ingrese su nombre</h2>
        }
        <input type="text" onChange={(e)=>setNombre(e.target.value)} />
        </>
    )
}

export default Saludar;