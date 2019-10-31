import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

export default class CategoriasProvider extends Component {
  token = 'U2Y3XAQR2MG4UKKS6OGQ';
  state = {
    categorias: []
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_AR`;

    let categorias = await axios.get(url);

    this.setState({
      categorias: categorias.data.categories
    });
  };

  render() {
    return (
      <CategoriasContext.Provider
        value={{
          categorias: this.state.categorias
        }}
      >
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}
