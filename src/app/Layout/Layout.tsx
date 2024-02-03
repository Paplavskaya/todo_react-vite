import { NavLink, Outlet } from "react-router-dom"
import {
    CarryOutOutlined,
    SmileOutlined,
    ShopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';
import { Layout as AntdLayout, Menu, Button, Row, Col, Badge } from 'antd';
import { useContext, useState} from "react";
import { TodoCountContecst } from "../contecst/TodoCountContecst";
import "./Layout.css"
import productsStore from "../../common/stores/ProductsStore";
import cartStore from "../../common/stores/CartStore";
import { observer } from "mobx-react-lite";

const { Header, Sider, Content } = AntdLayout;

export const Layout = observer(() => {

    const [collapsed, setCollapsed] = useState(false);
    
    const context  = useContext(TodoCountContecst);
    const count = context!.countTodo;
    const loading = context?.isLoading; 

    const {loadProducts, allCategoriesLayout} = productsStore;
    const {cartCounts} = cartStore;

    const hendleCategoryClick = (selectedCategory: string) => {
        loadProducts(selectedCategory)
    }

    const newCategories = allCategoriesLayout?.map((category: string)=>{
        return {
            label: <NavLink to="/catalog" onClick={()=>{hendleCategoryClick(category)}}>{category}</NavLink>,
            key: `${category}`
        }
    })
   
    return (<AntdLayout style={{ height: '100vh' }}>
                <Sider  style={{ overflow: 'auto', height: '100vh'}}
                    trigger={null}
                    collapsible
                    breakpoint="sm"
                    onBreakpoint={(broken) => {
                        setCollapsed(broken);
                        }}
                    collapsed={collapsed}>

                    <Menu
                        theme="dark"
                        mode="inline"
                        items={[
                            {label:<NavLink to="/">Главная</NavLink>, key: 'home', icon: <HomeOutlined />},
                            {label:<NavLink to="/post">Блог</NavLink>, key: 'post', icon: <SmileOutlined />},
                            {label:<NavLink to="/todo">Список задач {!loading && <sup className="nav__item__count">{count}</sup>}</NavLink>, key: 'todo', icon: <CarryOutOutlined />},
                            {label:<NavLink to="/catalog">Каталог</NavLink>, key: 'all', icon: <ShopOutlined />,
                                children: newCategories
                            }, 
                            {label:<NavLink to="/cart"><Badge count={cartCounts} className="cart">Корзина</Badge></NavLink>, key: 'cart', icon: <ShoppingCartOutlined />},
                        ]}
                    />
                </Sider>
                <AntdLayout>
                    <Header style={{ padding: 0, }}>
                        <Row>
                            <Col flex={1}>
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ padding: '20px', overflow: 'auto' }}>                        
                        <Outlet /> 
                    </Content>

                </AntdLayout>

            </AntdLayout>)
})