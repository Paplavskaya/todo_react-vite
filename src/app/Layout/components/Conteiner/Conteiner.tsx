import { ReactNode } from 'react'
import './Conteiner.css'

type ConteinerProps = {
    children: ReactNode;
    customClass?: string;
}

export const Conteiner = ({children, customClass}: ConteinerProps) => {
    return <div className={customClass ? `conteiner ${customClass}` : "conteiner"}>
                {children}
            </div>
}
