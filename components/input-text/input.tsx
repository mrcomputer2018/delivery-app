import React from "react";
import { InputIcon } from "../Input-Icon/inputIcon";
import Styles from "./style.module.css";

type Props = {
    label: string;
    placeholder : string;
    type: string
}

export function InputText ({ ...props }: Props) {
    return(
        <>  
            <div className={ Styles.container }>
                <div className={ Styles.icon }>
                    <InputIcon size={24} color="#503E9D" title=""/>
                </div>
                <div className="grow">
                    {/* tracking-wider - espacamento entre letras */}
                    <label 
                    className={ Styles.label } 
                    htmlFor="">
                        {props.label}
                    </label>
                    {/* border-b - borda em baixo */}
                    <input 
                    className={ Styles.input }
                    type={props.type} 
                    value="" 
                    placeholder={props.placeholder}/>
                </div>
            </div>
        </>
    )
}