import React from 'react';

import classes from './Box.module.css';

const box = (props) => {
  let style;
  if(props.width && props.height) {
    style = {
      width: props.width,
      height: props.height
    }
  } else {
    style = {
      width: "40%",
      height: "400px"
    }
  }
  if(props.textAlign) {
    style.textAlign = props.textAlign;
  }
  return <div style={style} className={classes.Container} >{props.children}</div>
}

export default box;