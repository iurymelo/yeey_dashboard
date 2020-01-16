import React from 'react'
import classes from './ItemListText.css'

const ItemListText = (props) => {
  let output = (<div>
    {props.text}
  </div>)
  if(props.selecionado){
    output = (<div className={classes.selecionado}>
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
