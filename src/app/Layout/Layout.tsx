import { Outlet } from "react-router-dom"
import { Container } from "./components/Container/Container";
import { Nav } from "./components/Nav";

export const Layout = () => {
    
    // const context  = useContext(TodoCountContecst);
    // const count = context!.countTodo;
    // const loading = context?.isLoading;
    // const categories = context!.categories;
    // const navigeteCategory = useNavigate();

    return <> 
            <header className="header">
                <Container>
                    <Nav/>
                    {/* <nav className="nav">
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
                    </nav> */}
                </Container>
            </header>

            <main className="main">
                <Container>
                    <Outlet />
                </Container>
            </main>
            
            <footer><Container>2024</Container></footer>
        </>
}