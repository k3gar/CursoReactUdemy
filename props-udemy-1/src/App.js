import React from 'react';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo';


function App() {
  return (
    <div className="conainer mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Juan' />
      <Saludo persona='Ana' />
      <Saludo persona='Pedro' />
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario 
      urlImagen='https://picsum.photos/64/' 
      persona='Maria'
      texto='gggggggggggggggggggggggggggg'
      />
      <Comentario
      urlImagen='https://picsum.photos/64/' 
      persona='Pedro'
      texto='ttttttttttttttttttttttttttt'
       />
      <Comentario
      urlImagen='https://picsum.photos/64/' 
      persona='Carlos'
      texto='kkkkkkkkkkkkkkkkkkkkkkkkkk'
       />
    </div>
  );
}

export default App;
