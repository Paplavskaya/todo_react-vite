import { NavLink, Outlet } from "react-router-dom"
import {
    CarryOutOutlined,
    SmileOutlined,
    ShopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
import { Layout as AntdLayout, Menu, Button, Row, Col } from 'antd';
import { useContext, useState} from "react";
import { TodoCountContecst } from "../contecst/TodoCountContecst";
import "./Layout.css"

const { Header, Sider, Content } = AntdLayout;

export const Layout = () => {

    const [collapsed, setCollapsed] = useState(false);
    
    const context  = useContext(TodoCountContecst);
    const count = context!.countTodo;
    const loading = context?.isLoading; 
    const categories = context!.categories; 
    
    const newCategories = categories.map((category)=>{
        return {
            label:`${category}`,
            key: `${category}`,
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
                            {label:<NavLink to="/catalog">Каталог</NavLink>, key: 'catalog', icon: <ShopOutlined />,
                                children: newCategories
                            },
                            {label:<NavLink to="/todo">Список задач {!loading && <sup className="nav__item__count">{count}</sup>}</NavLink>, key: 'todo', icon: <CarryOutOutlined />},
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
}