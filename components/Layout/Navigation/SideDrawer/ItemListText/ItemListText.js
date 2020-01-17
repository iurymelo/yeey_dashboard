import React from 'react'

const ItemListText = (props) => {
  let output = null;

  if(!props.selecionado){
    output = (<div style={{
      fontFamily: 'Roboto',
      fontSize: '1em',
      fontWeight: '500',
      color: 'rgba(0, 0, 0, 0.83)',
      left: 0}}>
      {props.text}
    </div>)
  } else {
    output = (<div style={{
      fontFamily: 'Roboto',
      fontSize: '1em',
      fontWeight: '500',
      color: '#2196F3',
      left: 0}}>
      {props.text}
    </div>)
  }
  return(
    <div>
      {output}
    </div>
  )

}

export default ItemListText;
