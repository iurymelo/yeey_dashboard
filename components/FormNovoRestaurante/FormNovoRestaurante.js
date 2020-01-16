import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {Button, Container} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import axios from '../../axios-config'

import {required, cepValidate, passValidate,
  minLength, cnpjValidate, emailValidate, phoneValidate} from "../Validators/Validators";
import {renderInput, renderSelectField} from "../FormComponents/FormComponents";


const onSubmit = values => {
  const Loja = {
    id: values.cnpj.replace(/[^\d]+/g, ''),
    nome: values.nomeFantasia,
    DadosCadastrais: {
      razaoSocial: values.razaoSocial,
      cnpj: values.cnpj,
      inscricaoEstadual: values.inscricaoEstadual,
      nomeFantasia: values.nomeFantasia,
      endereco: {
        endereco: values.endereco,
        bairro: values.bairro,
        cidade: values.cidade,
        estado: values.estado,
        cep: values.cep,
        telefonePrimario: values.telefonePrimario,
        telefoneSecundario: values.telefoneSecundario,
        email: values.email,
      },
    }
  };
  axios.post('/lojas.json', Loja)
    .then(response => {
      console.log(response);
    })
    .catch(error=> {
      console.log(error)
    })
};

const FormNovoRestaurante = ({handleSubmit, valid}) => {
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
                  validate={[cnpjValidate, required]}
                  defaultValue = '89.025.696/0001-14'
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
          <div style={{paddingTop: '20px'}}>
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
                  name='telefoneprimario'
                  label='Telefone para Contato'
                  component={renderInput}
                  validate={[phoneValidate]}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name='celular'
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
          <FormControl>
            <Button disabled={!valid} type='submit'>Submit</Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
};

export default reduxForm({
  form: 'novo-restaurantes',
  onSubmit,
})(FormNovoRestaurante);