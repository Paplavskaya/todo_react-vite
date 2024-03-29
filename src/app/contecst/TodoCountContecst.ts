import { createContext } from "react";
import { CategoriesType } from "../models/CategoriesType";

type TodoCountContecstType = {
    countTodo: number, 
    onChangeCountTodo: (newCount: number) => void,
    isLoading: boolean,
    onChangeLoading: (loading: boolean) => void,
}

export const TodoCountContecst = createContext<TodoCountContecstType | null>(null);