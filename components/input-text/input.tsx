import React from "react";

type Props = {
    label: string;
    placeholder : string;
    type: string
}

export function InputText ({ ...props }: Props) {
    return(
        <>  
            <div className="flex mb-14">
                <div className="w-16 mr-7 flex items-center">
                    <span className="bg-indigo-700 w-7 h-7 flex">icon</span>
                </div>
                <div className="w-full">
                    {/* tracking-wider - espacamento entre letras */}
                    <label 
                    className='text-xs font-bold uppercase tracking-wider text-gray-700' 
                    htmlFor="">
                        {props.label}
                    </label>
                    {/* border-b - borda em baixo */}
                    <input 
                    className='w-full py-3 border-b' 
                    type={props.type} 
                    value="" 
                    placeholder={props.placeholder}/>
                </div>
            </div>
        </>
    )
}