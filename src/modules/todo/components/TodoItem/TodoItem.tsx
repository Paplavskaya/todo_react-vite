import { Task } from "../../models/Task"

type TodoItemProps = {
    todo: Task,
    onDelete: (id: string) => void,
    handelChangeTodo: (id: string, isDone: boolean) => void
}

export const TodoItem = ({todo, onDelete, handelChangeTodo}: TodoItemProps) => {
    const {id, title, completed} = todo;
    
    const hendleDeleteClick = () =>{
        onDelete(id)
    }

    const hendleChange = (value: any) => {
        handelChangeTodo(id, value.target.checked)
    }

    return <li className="todo__item">
                <input type="checkbox" defaultChecked={completed} onChange={(value) => {hendleChange(value)}}/>
                <span className="item__title">{title}</span>  
                <button onClick={hendleDeleteClick} className="delete__btn btn">Удалить</button> 
            </li>
}