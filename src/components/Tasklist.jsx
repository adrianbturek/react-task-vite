import Taskcard from './Taskcard'
import { useContext } from 'react';
import { TaskContext } from '../context/Taskcontext'

function Tasklist() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center '>No hay tareas aun</h1>
    }

    return (
        <div className=' grid grid-cols-4 gap-2 '>
            {tasks.map((task) => (
                <Taskcard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default Tasklist