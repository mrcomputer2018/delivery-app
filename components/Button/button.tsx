import React from "react";

type Props = {
    children: React.ReactNode;
    className: string;
}

export function Button ({ ...props }: Props) {
    return(
        <>  
            <button className={`${ props.className } font-bold rounded-xl hover:opacity-75`}>
                { props.children }
            </button>
        </>
    )
}