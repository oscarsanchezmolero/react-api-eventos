import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';

//
// Pending API_KEY

function App() {
  return (
    <>
      <Header />
      <EventosProvider>
        <div className='uk-container'>
          <CategoriasProvider>
            <Formulario />
            <ListaEventos />
          </CategoriasProvider>
        </div>
      </EventosProvider>
    </>
  );
}

export default App;
