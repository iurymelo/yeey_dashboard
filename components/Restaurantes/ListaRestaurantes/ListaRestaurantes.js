import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {columns, rows} from "../../Lista/Constants";

import Lista from "../../Lista/Lista";


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



const ListaRestaurantes = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return(
    <div style={{
      width: '96%',
      height: '100%',
      paddingBottom: '40px'
    }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Lista de Restaurantes
          </Typography>
        </CardContent>
        <CardContent>
          <Lista colunas={props.columns} linhas={props.rows}/>
        </CardContent>
      </Card>
    </div>
  )
};

export default ListaRestaurantes;