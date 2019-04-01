import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let style;
    if(props.width && props.height) {
        style = {
            width: props.width,
            height: props.height,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
        }
    } else {
        style = {
            width: "100%",
            height: "50px"
        }
    }
    return (
        <div className={classes.Button}>
            <button
                style={style}
                disabled={props.disabled}
                className={classes.Button}
                onClick={props.clicked}>{props.children}</button>
        </div>
    );
}

export default button;