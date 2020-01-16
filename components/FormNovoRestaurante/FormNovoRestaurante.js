import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form';
import {Button, Container} from "@material-ui/core";
import {TextField} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from '@material-ui/core/InputBase';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const renderInput = ({input, label, type, meta}) => (
  <TextField {...input} type={type}
             variant="outlined" helperText={meta.touched && meta.error}
             error={meta.touched && meta.invalid} fullWidth
             label={label}
  />
);

const renderSelectField = ({
                             input,
                             label,
                             id,
                             meta,
                             children,
                             ...custom
                           }) => {
  const name = label;
  const identificado = id;
  return (

    <FormControl error={meta.touched && meta.error} style={{width: '100%'}}>
      <InputLabel>{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: name,
          id: identificado
        }}
      >
        {children}
      </Select>
    </FormControl>
  )
}

const required = value => {
  if (!value || value.trim() === '') {
    return 'Campo Obrigatório';
  }
  return undefined;
};

const minLength = value => {
  if (value.length < 4) {
    return 'Mínimo 4 caracteres!';
  }
  if (value.length > 80) {
    return 'Nome muito grande!'
  }
  return undefined;
};

const cnpjValidate = value => {
  if (!value) {
    return undefined
  }
  const cnpj = value.replace(/[^\d]+/g, '');
  if (cnpj.length != 14)
    return 'Quantidade de dígitos inválida';

  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999") return 'CNPJ inválido'

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return 'CPNJ inválido';
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return 'CNPJ inválido';

  return undefined;
};

const onSubmit = values => {
  console.log(JSON.stringify(values))
};

const FormNovoRestaurante = ({handleSubmit, valid}) => {
  return (
    <div>
      <Typography style={{fontSize: 18, paddingBottom: '20px'}}>
        Cadatrar Novo Restaurante
      </Typography>
      <Container fixed>
        <form onSubmit={handleSubmit}>
          <Typography style={{fontSize: 14, padding: '10px'}}>
            Dados Cadastrais
          </Typography>
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

          <Grid container spacing={3}>
            <Typography style={{fontSize: 14, paddingTop: '20px'}}>
              Informações de Contato e Endereço
            </Typography>
            <br/>
            <Grid item xs={4}>
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
          </Grid>
          <FormControl>
            <Button disabled={!valid} type='submit'>Submit</Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
};

export default reduxForm({
  form: 'novo-restaurante',
  onSubmit,
})(FormNovoRestaurante);