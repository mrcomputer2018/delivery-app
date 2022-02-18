import React from "react";
import Styles from "./styles.module.css";

type Props = {
    children: React.ReactNode;
    className: string;
}

export function Button ({ ...props }: Props) {
    return(
        <>  
            <button className={`${ props.className } ${ Styles.button }`}>
                { props.children }
            </button>
        </>
    )
}