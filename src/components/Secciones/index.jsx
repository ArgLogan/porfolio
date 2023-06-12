import "./Secciones.css"
import SeccionCard from "../SeccionCard"

const Secciones = ()=>{
    const datos =[ {
            titulo: "Idiomas",
            foto:"../imgs/rana-libro.jpg",
            descripcion:"Inglés avanzado C2"
        },
        {
            titulo: "Experiencias",
            foto:"../imgs/rana.jpg",
            descripcion:"Desarrollador web fullstack freelance"
        },
        {
            titulo: "Estudios",
            foto:"../imgs/rana-book.jpg",
            descripcion:"Dev web Fullstack"
        },
        {
            titulo: "Proyectos",
            foto:"../imgs/rana-reloj.jpg",
            descripcion:"Back End AP"
        }

    ]
    return <div className="contiene">
         <h1>SECCIONES</h1>
         <div className="cards">
            <SeccionCard datos = {datos} index ="0" ></SeccionCard>
            <SeccionCard datos = {datos} index ="1" ></SeccionCard>
            <SeccionCard datos = {datos} index ="2" ></SeccionCard>
            <SeccionCard datos = {datos} index ="3" ></SeccionCard>


         </div>
    </div>
}

export default Secciones