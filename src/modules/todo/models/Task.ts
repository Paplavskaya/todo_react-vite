export type Task = {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}

export type TaskDto = Omit<Task, 'userId' | 'id'> & {userId: number, id: number};