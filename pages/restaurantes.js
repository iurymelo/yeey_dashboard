import React, {Component} from 'react';
import Router from 'next/router'
import {connect} from 'react-redux'
import ConfiguracoesGerais from "../components/ConfiguracoesGerais/ConfiguracoesGerais";
import ListaRestaurantes from "../components/ListaRestaurantes/ListaRestaurantes";
import {columns, createData} from '../components/Lista/Constants'
import * as actions from '../redux/actions';


class Restaurantes extends Component {

  componentDidMount() {
    this.props.onFetchLojas();
  }

  addRestauranteHandler = () => {
    Router.push('/restaurantes/novo')
  };


  render() {
    let rows = [];
    this.props.lojas.map(obj => {
      rows.push(createData(obj.nome, obj.id, 'tester'))
    });
    return (
      <div>
        <ConfiguracoesGerais addRestaurante={this.addRestauranteHandler}/>
        <ListaRestaurantes columns={columns} rows={rows}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLojas: () => dispatch(actions.fetchLojas())
  }
};

const mapStateToProps = state => {
  return{
    lojas: state.loja.lojas,
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurantes);