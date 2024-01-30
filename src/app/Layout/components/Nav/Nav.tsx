import React, { useContext, useState } from 'react';
import {
  CarryOutOutlined,
  SmileOutlined,
  ShopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { TodoCountContecst } from '../../../contecst/TodoCountContecst';
import './Nav.css'

export const Nav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const context  = useContext(TodoCountContecst);
  const count = context!.countTodo;
  const loading = context?.isLoading;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        
        items={[
          {label:<NavLink to="/">Главная</NavLink>, key: 'home', icon: <HomeOutlined />},
          {label:<NavLink to="/post">Блог</NavLink>, key: 'post', icon: <SmileOutlined />},
          {label:<NavLink to="/catalog">Каталог</NavLink>, key: 'catalog', icon: <ShopOutlined />,
            children: [
              {label:'какая-то категория', key: 'category1', icon: <SmileOutlined />},
              {label:'какая-то категория', key: 'category2', icon: <SmileOutlined />}
            ]
          },
          {label:<NavLink to="/todo">Список задач {!loading && <sup className="nav__item__count">{count}</sup>}</NavLink>, key: 'todo', icon: <CarryOutOutlined />},
        ]}
      />
    </div>
  );
};
