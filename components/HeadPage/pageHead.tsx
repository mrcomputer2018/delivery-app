import React from "react";
import Head from "next/head";

type Props = {
    title: string;
    description: string;
    keywords: string;
}

export function PageHead ({ ...props }: Props) {
    return(
        <Head>
            <title>{ props.title } - DeliveryApp</title>
            <meta name="description" content={ props.description } />
            <meta name="keywoordss" content={ props.keywords } />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}