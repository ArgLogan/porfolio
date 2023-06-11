import "./Header.css"
import BotonRed from "../BotonRed"

const Header = ()=>{
    return <div className="header">
        <div className="navbar">
            <ul className="menu">
                <li><BotonRed nombre = 'sec 1'></BotonRed></li>
                <li><BotonRed nombre = 'sec 2'></BotonRed></li>
                <li><BotonRed nombre = 'sec 3'></BotonRed></li>
                <li><BotonRed nombre = 'sec 4'></BotonRed></li>
                <li><BotonRed nombre = 'sec 5'></BotonRed></li>
            </ul>
        </div>


    </div>

}
export default Header