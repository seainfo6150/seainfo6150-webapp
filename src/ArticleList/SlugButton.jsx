import React from 'react';
import './SlugButton.module.css';

const SlugButton = (props) => {
    return(
        <button onClick = {() => (alert(props.slug))}>{props.buttonText}</button> 
    )
}

export default SlugButton;