import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {Button, Container} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

import {required, cepValidate, passValidate, cpfValidate,
  minLength, cnpjValidate, emailValidate, phoneValidate} from "../Validators/Validators";
import {renderInput, renderSelectField} from "../FormComponents/FormComponents";
import {blue} from "@material-ui/core/colors";
import axios from "../../axios-config";

const onSubmit = values => {

  const Loja = {
    deleted: false,
    inactive: false,
    creation_date: new Date().getTime(),
    modification_time: new Date().getTime(),
    nome: values.nomeFantasia,
    DadosCadastrais: {
      razaoSocial: values.razaoSocial,
      cnpj: values.cnpj,
      inscricaoEstadual: values.inscricaoEstadual,
      nomeFantasia: values.nomeFantasia,
      telefonePrimario: values.telefonePrimario,
      telefoneSecundario: values.telefoneSecundario,
      email: values.email,
      Endereco: {
        endereco: values.endereco,
        bairro: values.bairro,
        cidade: values.cidade,
        estado: values.estado,
        cep: values.cep,
      },
    },
    Responsavel: {
      username: values.user,
      userId: '',
      nome: values.nomeCompleto,
      cpf: values.cpf,
    }
  };

  axios.post('/lojas.json', Loja)
    .then(response => {
      alert('Cadastro Criado com Sucesso!');
      Router.push('/restaurantes')
    })
    .catch(error=> {
      alert(error)
    })
};

const FormNovoRestaurante = ({handleSubmit, valid }) => {

  return (
    <div>
      <Typography style={{fontSize: 18, paddingBottom: '10px'}}>
        Cadatrar Novo Restaurante
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
          </Grid>
          </div>
          <Typography style={{fontSize: 14, padding: '10px'}}>
            Dados Cadastrais
          </Typography>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Field
                  name='razaoSocial'
                  label='Razão Social'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='cnpj'
                  label='CNPJ'
                  component={renderInput}
                  validate={[cnpjValidate]}
                />
                {/*CNPJ VALIDO: 89.025.696/0001-14*/}
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='inscricaoEstadual'
                  label='Inscrição Estadual'
                  component={renderInput}
                  validate={[]}
                />
                {/*CNPJ VALIDO: 89.025.696/0001-14*/}
              </Grid>
              <Grid item xs={8}>
                <Field
                  name='nomeFantasia'
                  label='Nome Fantasia'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
            </Grid>
          </div>
          <div style={{paddingTop: '10px'}}>
            <Typography style={{fontSize: 14, padding: '10px'}}>
              Informações de Contato e Endereço
            </Typography>
            <Grid container spacing={3}>
              <br/>
              <Grid item xs={8}>
                <Field
                  name='endereco'
                  label='Endereço'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='bairro'
                  label='Bairro'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='cidade'
                  label='Cidade'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='estado'
                  label='Estado'
                  component={renderSelectField}
                  validate={required}
                  id='estado-native-sel'
                >
                  <option value=""/>
                  <option value={'sc'}>SC</option>
                  <option value={'rs'}>RS</option>
                  <option value={'pr'}>PR</option>
                </Field>
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='cep'
                  label='CEP'
                  component={renderInput}
                  validate={[required, cepValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='telefonePrimario'
                  label='Telefone para Contato'
                  component={renderInput}
                  validate={[phoneValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='telefoneSecundario'
                  label='Telefone Celular'
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
          <div>
            <Typography style={{fontSize: 14, padding: '10px'}}>
              Informações do Responsável
            </Typography>
            <Grid container spacing={3}>
              <br/>
              <Grid item xs={8}>
                <Field
                  name='nomeCompleto'
                  label='Nome Completo'
                  component={renderInput}
                  validate={[required, minLength]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='cpf'
                  label='CPF'
                  defaultValue='92125198061'
                  component={renderInput}
                  validate={[required]}
                />
              </Grid>
            </Grid>
          </div>

            <div style={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'right', paddingTop: '20px'}}>
              <FormControl>
              <Button size='large' style={{color: '#F33A21'}} onClick={() => Router.push('/restaurantes')}>CANCELAR</Button>
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
  form: 'novo-restaurantes',
  onSubmit,
})(FormNovoRestaurante);