import { Task, TaskDto } from "../models/Task";

export const todoDataMapper = (serverData: TaskDto[]): Task[] => 
    serverData.map(({id, userId, ...param})=>({
        id: id.toString(),
        userId: userId.toString(),
        ...param
        })
    )
