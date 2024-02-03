import { Route, Routes } from 'react-router-dom'
import { Main } from '../modules/main'
import { Post } from '../modules/post'
import { Catalog } from '../modules/catalog'
import './App.css'
import { Layout } from './Layout'
import { Todo } from '../modules/todo'
import { useState } from 'react'
import { TodoCountContecst } from './contecst/TodoCountContecst'
import { Cart } from '../modules/cart'

export const App = () => {
    const [countTodo, setCountTodo] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const onChangeCountTodo = (newCount: number) => {
        setCountTodo(newCount)
    }

    const onChangeLoading = (loading: boolean) => {
        setIsLoading(loading)
    }
          
    return (
        <TodoCountContecst.Provider 
            value={{countTodo,
                    onChangeCountTodo,
                    isLoading,
                    onChangeLoading}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/post/*" element={<Post />}/>
                    <Route path="/catalog/*" element={<Catalog />}/>
                    <Route path="/todo" element={<Todo />}/>
                    <Route path='/cart' element={<Cart />}/>
                </Route>
            </Routes>
        </TodoCountContecst.Provider>
    )
}

