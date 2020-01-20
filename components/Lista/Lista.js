import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import {blue} from "@material-ui/core/colors";
import axios from '../../axios-config';
import {columns, rows} from './Constants';
import Router from 'next/router';


const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const {count, page, rowsPerPage, onChangePage} = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const useStyles2 = makeStyles({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 500,
    width: '100%',
  },
});


const Lista = (props) => {

  let listaRestaurantes = [];

  //Pega dados do servidor
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const excluiLojaHandler = (id) => {
    const param = '/lojas/' + id + '.json';
    axios.patch(param, {inactive: true, deleted: true})
      .then(res => {
          console.log(res);
          alert('Restaurante excluido com sucesso!')
          Router.reload();
        }
      )
      .catch(err => {
        console.log(err)
      });

  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {props.colunas.map(column => (
              <TableCell key={column.id}
                         align={column.align}
                         style={{minWidth: column.minWidth}}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
              ? props.linhas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : props.linhas
          ).map(restaurante => (
            <TableRow key={restaurante.id}>
              <TableCell component="th" scope="row">
                {restaurante.nome}
              </TableCell>
              <TableCell align="right">{restaurante.id}</TableCell>
              <TableCell align="right">{'Tester'}</TableCell>
              <TableCell align="right"><Button style={{color: blue[500]}}>ALTERAR</Button></TableCell>
              <TableCell align="right"><Button style={{color: '#F33A21'}} onClick={(id) => excluiLojaHandler(restaurante.id)}>EXCLUIR</Button></TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{height: 53 * emptyRows}}>
              <TableCell colSpan={6}/>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, {label: 'Tudo', value: -1}]}
              labelRowsPerPage='Itens por página'
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelDisplayedRows={({from, to, count}) => `${from}-${to} de ${count}`}
              SelectProps={{
                inputProps: {'aria-label': 'rows per page'},
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );

};
const mapDispatchToProps = {

};
export default Lista;