import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {blue} from "@material-ui/core/colors";


import classDiv from './ConfiguracoesGerais.css';

const useStyles = makeStyles({
  card: {
    minWidth: '200',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginRight: 20,
  },
});

const ConfiguracoesGerais = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return(
    <div className={classDiv.ConfiguracoesGerais}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Configurações Gerais
        </Typography>
        <div className={classDiv.CardBotao} >
          <Card className={classes.card} style={{backgroundColor: blue[500]}} onClick={props.addRestaurante}>
            <CardActionArea style={{alignContent:'center', textAlign: 'center', color: 'white',}}>
              <CardContent>
              <AddBoxIcon fontSize="large" />
              <Typography variant="button" display="block" gutterBottom>
                Novo Restaurante
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </CardContent>
    </Card>
    </div>
  )
};

export default ConfiguracoesGerais;