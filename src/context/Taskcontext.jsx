import { createContext, useState, useEffect } from "react";
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskcontextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            descrip: task.descrip
        }])
    }

    function deleteTask(taskid) {
        //Por cada tarea recorre el array se fija cual es el id a borrar
        setTasks(tasks.filter(task => task.id !== taskid))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>

    )
}
