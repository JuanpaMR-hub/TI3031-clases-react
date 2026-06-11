function Saludo(datos){
    return(
        <>
        <h1>Hola {datos.nombre}!</h1>
        <p>Este es un saludo</p>
        <p>Tienes {datos.edad} años</p>
        </>
    )
}

export default Saludo;