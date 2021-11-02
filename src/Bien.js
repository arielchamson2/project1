import './bien.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Bien = () =>  (
    <div>
        <h2>¡Excelente! Seguí así y te llevas el premio.</h2>
        <Link className="boton" to="/jugar">Jugar de nuevo</Link>
    </div>
)

export default Bien;