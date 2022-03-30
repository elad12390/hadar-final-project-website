import React, {FunctionComponent} from "react";
import './CircleCrop.css'

export const CircleCrop: FunctionComponent<{size: number}> = (props) => {
    return (
        <span className="CircleDropShadow">
            <div className="CircleCrop" style={{height: props.size, width: props.size}}>
                {props.children}
            </div>
        </span>
    )
}
