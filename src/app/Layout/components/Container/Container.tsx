import { ReactNode } from 'react'
import './Container.css'

type ContainerProps = {
    children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    return <div className="container">
                {children}
            </div>
}
