import Saludo from "./Saludo"

function Article(){
    return(
        <>
        <h1>Article</h1>
        <Saludo nombre = "Pablo Picasso" edad={20}/>
        <Saludo nombre="Pedro Picapiedra"/>
        <Saludo/>
        </>
    )
}

export default Article;