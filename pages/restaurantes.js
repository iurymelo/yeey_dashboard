import React, {Component} from 'react';
import Router from 'next/router'

import ConfiguracoesGerais from "../components/ConfiguracoesGerais/ConfiguracoesGerais";
import ListaRestaurantes from "../components/ListaRestaurantes/ListaRestaurantes";

class Restaurantes extends Component {
  addRestauranteHandler = () => {
    Router.push('/restaurantes/novo')
  };

  render() {
    return (
      <div>
        <ConfiguracoesGerais addRestaurante={this.addRestauranteHandler}/>
        <ListaRestaurantes/>

      </div>
    )
  }
}

export default Restaurantes;