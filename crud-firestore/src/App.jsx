import React from 'react';
import {firebase} from './firebase'
function App() {
  const [tareas, setTareas] = React.useState([]);
  const [tarea, setTarea] = React.useState("");
  const [modoEdicion, setModoEdicion] = React.useState(false)
  

  React.useEffect(()=> {


    const obtenerDatos = async () => {
      try{
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setTareas(arrayData)
        
      }catch (error){
        console.log(error)
      }

    }
    obtenerDatos()

  },[])

  const agregar = async (e) => {
    e.preventDefault();
    if(!tarea.trim()){
      console.log('Elemento vacío')
      return
    }
    try {
      const db = firebase.firestore()
      const nuevaTarea = {
          name: tarea,
          fecha: Date.now()
      }
      const data = await db.collection('tareas').add({
          name: tarea,
          fecha: Date.now()
      })
      setTareas([
          ...tareas,
          {id: data.id, ...nuevaTarea }
      ])
      setTarea('')
  } catch (error) {
      console.log(error)
  }

    console.log(tarea)
  }

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection('tareas').doc(id).delete();

      const arrayFiltrado = tareas.filter(item => item.id !== id);
      setTareas(arrayFiltrado)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  {item.name}
                  <button className="btn btn-danger btn-sm float-right" onClick={() => eliminar(item.id)}>Eliminar</button>
                  <button className="btn btn-warning btn-sm float-right ">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <h3>
            {modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'}
            </h3>
          <form onSubmit={agregar}>
            <input type="text" placeholder="Ingrese Tarea" className="form-control mb-2" value={tarea} onChange={e => setTarea(e.target.value)} />
            <button className={
              modoEdicion ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
            } type="submit">
              {
                modoEdicion ? 'Editar' : 'Agregar'
              }
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
