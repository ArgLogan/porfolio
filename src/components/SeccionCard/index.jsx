import "./SeccionCard.css"

const SeccionCard = (props)=>{
    const index = props.index
    console.log(index)
    const {datos} = props
    console.log(props)
    return <div className="card">
        <h3>{datos[Number(index)].titulo}</h3>
        <div>
           <img src={datos[Number(index)].foto} alt={datos.titulo} />
           <p>{datos[Number(index)].descripcion}</p>

        </div>
        <button>ver más</button>
       
    </div>
}
export default SeccionCard