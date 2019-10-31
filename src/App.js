import React from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';

//
// Pending API_KEY

function App() {
  return (
    <CategoriasProvider>
      <Header />
    </CategoriasProvider>
  );
}

export default App;
