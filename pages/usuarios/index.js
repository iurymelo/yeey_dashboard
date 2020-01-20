import React, {Component} from 'react';
import Router from 'next/router'
import ConfiguracoesGerais from "../../components/usuarios/ConfiguracoesGerais/ConfiguracoesGerais";
import {columns, createData} from '../../components/Lista/Constants'


class Usuarios extends Component {

  addUsuarioHandler = () => {
    Router.push('/usuarios/novo')
  };


  render() {
    let rows = [];
    columns.map(obj => {
      rows.push(createData(obj.nome, obj.id, 'tester'))
    });
    return (
      <div>
        <ConfiguracoesGerais addRestaurante={this.addUsuarioHandler}/>
      </div>
    )
  }
}

export default Usuarios;