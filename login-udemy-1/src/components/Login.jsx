import React from 'react';
import {auth} from '../firebase';

const Login = () => {
    //👇Estableciendo los estados para poder consultar los valores que se ingresan en el input
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    //👇"error" nos dirá qué está fallando en la validación de la función procesarDatos.
    const [error, setError] = React.useState(null);
    //👇Validamos si el formulario es de login o de registro
    const [esRegistro, setEsRegistro] = React.useState(true);

    //Valida si el email está vacío, si la contraseña está vacía o si la longitud es menor a 6
    const procesarDatos = (e) => {

        //e.preventDefault evita el comportamiento get por defecto del formulario.
        e.preventDefault()
        if(!email.trim()){
            //Envía a "error" el mensaje de lo que está fallando
            setError('Ingrese Email')
            return
        }
        if(!pass.trim()){
            //console.log('Ingrese Password');
            setError('Ingrese Password');
            return
        }
        if(pass.length < 6){
            //console.log('Password debe ser mayor a 6 Caracteres');
            setError('Password debe ser mayor a 6 Caracteres');
            return
        }
        setError(null)
        console.log('Pasando todas las validaciones')

        if(esRegistro){
            registrar()
        }
    }

    const registrar = React.useCallback(async () => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError("Formato de correo inválido")
            }
            else if(error.code === 'auth/email-already-in-use'){
                setError("Este usuario ya está registrado")
            }
        }

    }, [email, pass]) //Pasamos los states dentro de los corchetes para que los pueda leer

    return (
    <div className="mt-5">
        <h3 className="text-center">{
        esRegistro ? 'Registro de Usuarios' : 'Login de Acceso'
        }</h3>
        <hr />
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form onSubmit={procesarDatos}>
                    {
                        error ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ) : null
                    }

                    <input onChange={ e => setEmail(e.target.value)} value={email} type="email" className="form-control mb-2" placeholder="Ingrese un Email"/>
                    <input onChange={ e => setPass(e.target.value)} value={pass} type="password" className="form-control mb-2" placeholder="Ingrese su Password"/>
                    <button className="btn btn-dark btn-lg btn-block mb-2" type='submit'>{esRegistro ? 'Registrarse' : 'Acceder'}</button>
                    <button onClick={() => setEsRegistro(!esRegistro)} type='button' className="btn btn-info btn-sm btn-block">{esRegistro ? '¿Ya tienes Cuenta?' : '¿No tienes cuenta?'}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login