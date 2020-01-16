import React from 'react'
import classes from './ItemListText.css'

const ItemListText = (props) => {
  let output = null;

  if(props.selecionado){
    output = (<div className={classes.selecionado}>
      {props.text}
    </div>)
  } else {
    output = (<div>
      {props.text}
    </div>)
  }
  return(
    <div className={classes.ItemListText}>
      {output}
    </div>
  )

}

export default ItemListText;
