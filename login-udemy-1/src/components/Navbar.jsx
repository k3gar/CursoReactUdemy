import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {

  const cerrarSesion = () =>{
    auth.signOut()
    .then(() => {
      props.history.push('/login')
    })
  }

  return (
    <div className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Auth</Link>
        <div>
            <div className="d-flex">
                {
                  props.firebaseUser !== null ? (<p>{props.firebaseUser.email}</p>) : (null)
                }
                <NavLink className="btn btn-dark mr-2" to="/" exact> Inicio</NavLink>
                {
                  props.firebaseUser !== null ? (<NavLink className="btn btn-dark mr-2" to="/admin"> Admin</NavLink>) : (<div></div>)
                }
                
                {
                  props.firebaseUser !== null ? (
                    <NavLink className="btn btn-dark mr-2" to="/login" onClick={() => cerrarSesion()}> Cerrar Sesión</NavLink>
                  ):(
                  <NavLink className="btn btn-dark mr-2" to="/login" exact> Login</NavLink>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default withRouter(Navbar)