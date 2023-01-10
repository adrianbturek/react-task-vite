import { useState, useContext } from "react"
import { TaskContext } from "../context/Taskcontext"

function Taskform() {
    const [title, setTitle] = useState("")
    const [descrip, setDescrip] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, descrip })
        setTitle('')
        setDescrip('')
    }

    return (
        <div className=' max-w-md mx-auto'>
            <form className=' bg-slate-800 p-10 mb-4'
                onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input className=' bg-slate-300 p-3 w-full mb-2'
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus />

                <textarea className=' bg-slate-300 p-3 w-full mb-2'
                    placeholder="Escribe la descripcion de la tarea"
                    onChange={(e) => setDescrip(e.target.value)}
                    value={descrip}>
                </textarea>

                <button
                    className=' bg-indigo-600 px-3 py-1 text-white over: hover:bg-indigo-500'
                >Guardar
                </button>
            </form>
        </div>

    )
}

export default Taskform