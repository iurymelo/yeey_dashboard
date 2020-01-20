import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {Button, Container} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

import {required,  passValidate, cpfValidate,
  minLength, emailValidate, phoneValidate} from '../../Validators/Validators'
import {renderInput, renderSelectField} from "../../FormComponents/FormComponents";
import {blue} from "@material-ui/core/colors";
import axios from "../../../axios-config";

const onSubmit = values => {

  const Usuarios = {
    deleted: false,
    inactive: false,
    creation_date: new Date().getTime(),
    modification_time: new Date().getTime(),
    DadosCadastrais: {
      nome: values.nome,
      username: values.usuario,
      email: values.email,
      cpf: values.cpf,
      telefone: telefonePrimario,
      telefoneSecundario: telefoneSecundario,
    },
    InformacoesConta: {
      tipo: values.tipoConta,
      idRestaurante: '',
    }
  };

  axios.post('/usuarios.json', Usuarios)
    .then(response => {
      alert('Cadastro Criado com Sucesso!');
      Router.push('/usuarios')
    })
    .catch(error=> {
      alert(error)
    })
};

const FormNovoUsuarios = ({handleSubmit, valid }) => {

  return (
    <div>
      <Typography style={{fontSize: 18, paddingBottom: '10px'}}>
        Cadatrar Novo Usuário
      </Typography>
      <Container fixed>
        <form onSubmit={handleSubmit}>
          <Typography style={{fontSize: 14, padding: '10px'}}>
            Informações de Login
          </Typography>
          <div style={{paddingBottom: '10px'}}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Field
                  name='usuario'
                  label='Usuário'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='password'
                  label='Senha'
                  type='password'
                  component={renderInput}
                  validate={[required, passValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='tipoConta'
                  label='Tipo'
                  component={renderSelectField}
                  validate={required}
                  id='estado-native-sel'
                >
                  <option value=""/>
                  <option value={'admin'}>Administrador YEEY</option>
                  <option value={'cliente'}>Administrador Restaurante</option>
                  <option value={'cozinha'}>Cozinha</option>
                  <option value={'caixa'}>Caixa</option>
                  <option value={'garçom'}>Garçom</option>
                  <option value={'consumidor'}>Consumidor</option>
                </Field>
              </Grid>
            </Grid>
          </div>
          <Typography style={{fontSize: 14, padding: '10px'}}>
            Dados Cadastrais
          </Typography>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Field
                  name='nome'
                  label='Nome Completo'
                  component={renderInput}
                  validate={[minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='cpf'
                  label='CPF'
                  component={renderInput}
                  validate={[cpfValidate]}
                />
                {/*CNPJ VALIDO: 89.025.696/0001-14*/}
              </Grid>

              <Grid item xs={4}>
                <Field
                  name='telefonePrimario'
                  label='Telefone'
                  component={renderInput}
                  validate={[phoneValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='telefoneSecundario'
                  label='Telefone Secundário'
                  component={renderInput}
                  validate={[phoneValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='email'
                  label='E-Mail'
                  component={renderInput}
                  validate={[emailValidate]}
                />
              </Grid>
            </Grid>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'right', paddingTop: '20px'}}>
            <FormControl>
              <Button size='large' style={{color: '#F33A21'}} onClick={() => Router.push('/usuarios')}>CANCELAR</Button>
            </FormControl>
            <FormControl>
              <Button size='large' disabled={!valid} style={valid ? {color: blue[500]} : null } type='submit'>CRIAR</Button>
            </FormControl>
          </div>

        </form>
      </Container>
    </div>
  )
};

export default reduxForm({
  form: 'novo-usuario',
  onSubmit,
})(FormNovoUsuarios);