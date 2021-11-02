import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bien from './Bien.js';


const App = () =>(
    <Router>
        <nav>
            <div className="navLeft">TriviaBox</div>
            <div className="navRight"><Link className="boton" to="/">Login</Link></div>
        </nav>
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/jugar">
                <Jugar/>
            </Route>
            <Route path="/mal">
                <Mal/>
            </Route>
            <Route path="/bien">
                <Bien/>
            </Route>
        </Switch>
        <footer>
            Copyright 2021 - TriviaBox 
        </footer>
    </Router>
)

const Login = () =>  (
    <div className="body">
        <form>
        <h1 className="titulo">Trivia Box</h1>
        <h4 className="subtitulo">Nickname</h4>
        <input type="text" className="input" name="name"/><br/>
        <Link className="boton" to="/jugar">Jugar</Link>
        </form>
    </div>
)

const Jugar = () => {
    return(
        <>
            <h2>¿Cuál es la causa de la inflación?</h2>
            <Link className="boton" to="/mal">
                <input type="checkbox"/>La ambición de los empresarios.
            </Link>
            <br/>
            <Link className="boton" to="/mal">
                <input type="checkbox"/>Los grandes monopolios.
            </Link>
            <br/>
            <Link className="boton" to="/bien">
                <input type="checkbox"/>La emisión monetaria descontrolada.
            </Link>
            <br/>
            <Link className="boton" to="/mal">
                <input type="checkbox"/>Es multicausal.
            </Link>
        </>
    )
}

const Mal = () =>  (
    <div>
        <h2>Lo siento, pero tu respuesta es INCORRECTA.</h2>
        <Link className="boton" to="/jugar">Jugar de nuevo</Link>
    </div>
)



ReactDOM.render( 
    <App/>, document.getElementById("root")
);