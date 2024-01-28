import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { TodoCountContecst } from "../contecst/TodoCountContecst";
import { Conteiner } from "./components/Conteiner/Conteiner";

export const Layout = () => {
    
    const context  = useContext(TodoCountContecst);
    const count = context!.countTodo;
    const loading = context?.isLoading;
    const categories = context!.categories;
    const navigeteCategory = useNavigate();

    return <> 
            <header className="header">
                <Conteiner>
                    <nav className="nav">
                        <ul className="nav__items">
                            <li className="nav__item"><NavLink to="/">Главная</NavLink></li>
                            <li className="nav__item"><NavLink to="/post">Блог</NavLink></li>
                            <li className="nav__item"><NavLink to="/catalog">Каталог</NavLink>
                                <ul className="submenu__items">
                                    {categories.length !== 0 && categories.map((category) => {
                                        const hendleCategoryClick = () => {
                                            navigeteCategory(`/catalog/category/${category}`)
                                        }
                                       
                                        return <li className="submenu__item" key={category}>
                                                    <div className="submenu__item__category"
                                                        onClick={hendleCategoryClick}>
                                                            {category}
                                                    </div>
                                                </li>
                                    })}
                                </ul>
                            </li>
                            <li className="nav__item"><NavLink to="/todo">Список задач {!loading && <sup className="nav__item__count">{count}</sup>}</NavLink></li>
                        </ul>
                    </nav>
                </Conteiner>
            </header>

            <main className="main">
                <Conteiner customClass="conteiner__main">
                    <Outlet />
                </Conteiner>
            </main>
            
            <footer><Conteiner customClass="conteiner__main">2024</Conteiner></footer>
        </>
}