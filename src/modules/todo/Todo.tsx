import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from "react"
import { TodoHeader } from "./components/TodoHeader"
import { Task, TaskDto } from "./models/Task"
import { TodoItem } from "./components/TodoItem";
import { todoDataMapper } from './utils/mapper';
import { TodoCountContecst } from '../../app/contecst/TodoCountContecst';
import { getTaskInProgres } from './utils/helper';
import './Todo.css'

export const Todo = () => {
    const [data, setData] = useState<Task[]>([]);

    const context = useContext(TodoCountContecst);
    const hendleCountChange = context!.onChangeCountTodo;
    const hendleChangeLoading = context!.onChangeLoading;
    const loading = context?.isLoading;


    const handleAddTodo = (inputVaiue: string) => {
        setData([...data, {
            userId: uuidv4(),
            id: uuidv4(),
            title: inputVaiue,
            completed: false, 
        }])
    }

    const handelDelete = (idTodo: string) => {
        const filterData = data.filter(({id})=> id !== idTodo);
        setData(filterData);
    }

    const handelChangeTodo = (id: string, isDone: boolean) => {
        const mapData = data.map((todo) => {
            if(todo.id === id) {
                todo.completed = isDone
            }
            return todo
        })
        setData(mapData)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').
        then(response => response.json()).
        then((serverData: TaskDto[]) => {
            const currentData = todoDataMapper(serverData)
            setData(currentData)
        })
    }, [])

    useEffect(() => {
        if(data.length !== 0 && loading) {
            hendleChangeLoading(false)
        }
        }, [data, loading])
        
        useEffect(() => {
            hendleCountChange(getTaskInProgres(data))
        }, [data])
            
        if(loading) {
        return <h2>Loading...</h2>
    }

    return <div className='conteiner'>
        <TodoHeader onAddTodo={handleAddTodo}/> 
        {data.length !== 0 ?
            <ul className='todo__items'>
                {data.map((todo) => <TodoItem 
                                        key={todo.id}
                                        todo={todo}
                                        onDelete={handelDelete}
                                        handelChangeTodo={handelChangeTodo}
                                    />)}
            </ul>:
            <h2>Список дел пуст</h2>
        }        
    </div>
}