import React, {Component} from 'react';
import Router from 'next/router'

import ConfiguracoesGerais from "../components/ConfiguracoesGerais/ConfiguracoesGerais";
import ListaRestaurantes from "../components/ListaRestaurantes/ListaRestaurantes";
import axios from "../axios-config";
import {columns, rows, createData} from '../components/Lista/Constants'

class Restaurantes extends Component {
  state = {
    lojas: [],
    dadosLista: [],
  };

  componentDidMount() {
    axios.get('/lojas.json')
      .then(res => {
          const fetchedLojas = [];
          for (let key in res.data) {
            fetchedLojas.push({
              ...res.data[key],
              id: key
            });
          }
          this.setState({lojas: fetchedLojas})
          let dadosLista = [];
          fetchedLojas.map(obj => {
            dadosLista.push(createData(obj.nome, obj.id, 'Tester'))
          });

          this.setState({dadosLista: dadosLista})
        }
      )
      .catch(err => {
        console.log(err)
      });


  }
  
  addRestauranteHandler = () => {
    Router.push('/restaurantes/novo')
  };


  render() {
    return (
      <div>
        <ConfiguracoesGerais addRestaurante={this.addRestauranteHandler}/>
        <ListaRestaurantes columns={columns} rows={this.state.dadosLista}/>

      </div>
    )
  }
}


export default Restaurantes;