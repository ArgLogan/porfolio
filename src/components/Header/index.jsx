import "./Header.css"
import BotonRed from "../BotonRed"

const Header = ()=>{
    return <div className="header">
        <div className="navbar">
            <ul className="menu">
                <li><BotonRed nombre = 'Idiomas'></BotonRed></li>
                <li><BotonRed nombre = 'Experiencias'></BotonRed></li>
                <li><BotonRed nombre = 'Proyectos'></BotonRed></li>
                <li><BotonRed nombre = 'Estudios'></BotonRed></li>
                <li><BotonRed nombre = 'Haabilides'></BotonRed></li>
            </ul>
        </div>


    </div>

}
export default Header