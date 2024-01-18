import { Task } from "../models/Task";

export const getTaskInProgres = (data: Task[]): number => {
    let count = 0;
    data.forEach(({completed})=>{
        if(!completed) {
            count +=1;
        }
    })
    return count
}
