import { useRef } from "react"
type TodoHeaderProps = {
    onAddTodo: (value: string) => void,
}

export const TodoHeader = ({onAddTodo}: TodoHeaderProps) => {
    
    const inputRef = useRef<HTMLInputElement>(null)

    const handleAddTodo = () => {
       const input = inputRef.current
       onAddTodo(input!.value)
       input!.value = ''
    }

    return <div className="todo__header">
        <h2 className="todo__header__title">Список задач</h2>
        <input className="todo__header__input" ref={inputRef} type="text" name="todo"/>
        <button onClick={handleAddTodo} className="add__btn btn">Добавить в список</button>        
    </div>
}