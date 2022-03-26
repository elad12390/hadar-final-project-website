import React, {FunctionComponent} from "react";
import './CircleCrop.css'

export const CircleCrop: FunctionComponent<{size: number}> = (props) => {
    return (
        <div className="CircleCrop" style={{height: props.size, width: props.size}}>
            {props.children}
        </div>
    )
}
