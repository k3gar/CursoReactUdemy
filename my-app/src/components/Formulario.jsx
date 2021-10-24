import React, { useState } from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState('')
    const [descriptio, setDescription] = useState('')
    const [lista, setLista] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if (!fruta.trim()){
            console.log('Fruta está vacío')
            
        }
        if (!descriptio.trim()){
            console.log('Description está vacío')
            return
        }
        console.log('Procesando datos ...')
        setLista([
            ...lista,
            {fruta: fruta, descriptio: descriptio}
        ])
        e.target.reset()
    }

  

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input type="text" 
                placeholder="Ingrese Fruta"
                className="form-control mb-2"
                onChange={ e => setFruta(e.target.value)}
                />
                <input type="text" 
                placeholder="Ingrese Descripción"
                className="form-control mb-2"
                onChange={e => setDescription(e.target.value)}
                />
                <button type='submit' className="btn btn-primary btn-block">Agregar</button>
            </form>
            <ul>
                {
                    lista.map( (item, index) => (
                        <li key={index}>{item.fruta} - {item.descriptio}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
