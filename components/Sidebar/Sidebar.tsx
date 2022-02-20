import React from "react";
import Link from "next/link";
import Styles from "./styles.module.css";

type Props = {
    
}

export function Sidebar ({ ...props }: Props) {
    return(
        <div className={ Styles.sidebar }>
            <div className={ Styles.header }>
                <p>
                    <span>Icon</span>
                    Delivery App
                </p>
            </div>

            <ul className={ Styles.menu }>
                <li>
                    <Link href="/">
                        <a>
                            <span>Icon</span>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/explorar">
                        <a>
                            <span>Icon</span>
                            Explorar
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/favoritos">
                        <a>
                            <span>Icon</span>
                            Favoritos
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/pedidos">
                        <a>
                            <span>Icon</span>
                            Pedidos
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mensagens">
                        <a>
                            <span>Icon</span>
                            Mensagens
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/configuracoes">
                        <a>
                            <span>Icon</span>
                            configurações
                        </a>
                    </Link>
                </li>
            </ul>

            <div>Footer</div>  
        </div>
    )
}