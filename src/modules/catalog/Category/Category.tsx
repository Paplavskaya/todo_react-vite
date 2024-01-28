import { Link } from "react-router-dom"


export const Category = () => {
    
    return <div className='conteiner'>
                <div className='navigation'>
                    <Link to={'/'}>Главная / </Link>
                    <Link to={'/catalog'}>Каталог</Link>
                </div>

            </div>
}