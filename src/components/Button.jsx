import React from "react";
import classNames from "classnames";

const Button=(props)=> {
    console.log(this)
    return(
        <div>
            <button className={classNames('button', {
                'button--outline': props.outline
            })}>{props.children}</button>
        </div>
    )
}

export default Button