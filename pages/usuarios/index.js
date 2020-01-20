import React, {Component} from 'react';
import Router from 'next/router'
import ConfiguracoesGerais from "../../components/usuarios/ConfiguracoesGerais/ConfiguracoesGerais";
import ListaUsuários from "../../components/Usuarios/ListaUsuarios/ListaUsuarios";
import {connect} from 'react-redux'

import {columns, createData} from '../../components/Usuarios/ListaUsuarios/Constants'
import * as actions from "../../redux/actions";


class Usuarios extends Component {

  componentDidMount() {
    this.props.onFetchUsuarios();

  }

  addUsuarioHandler = () => {
    Router.push('/usuarios/novo')
  };


  render() {
    let rows = [];
    this.props.usuarios.map(obj => {
      rows.push(createData(obj.DadosCadastrais.nome, obj.id, obj.InformacoesConta.tipo))
    });
    console.log(rows)
    return (
      <div>
        <ConfiguracoesGerais addUsuario={this.addUsuarioHandler}/>
        <ListaUsuários columns={columns} rows={rows}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onFetchUsuarios: () => dispatch(actions.fetchUsuarios())
  }
};

const mapStateToProps = state => {
  return {
    usuarios: state.usuario.usuarios,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);