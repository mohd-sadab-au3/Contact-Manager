import React from 'react';

function Input(props) {
    const classes = ["form-control form-control-lg"];
    if (props.error) {
        classes.push("is-invalid");
    }
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name}
                className={classes.join(' ')}
                value={props.value} placeholder={props.placeholder}
                onChange={props.inputValue} />
            {props.error ? (<div className="invalid-feedback">{props.error}</div>) : null}
        </div>

    )
}
export default Input;