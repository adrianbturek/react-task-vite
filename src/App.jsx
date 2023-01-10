import Tasklist from './components/Tasklist'
import Taskform from './components/Taskform'
import { useState, useEffect } from 'react';

function App() {

    return (
        <main className=' bg-zinc-900 h-screen'>
            <div className='container mx-auto p-10'>
                <Tasklist />
                <Taskform />
            </div>
        </main>
    )
}

export default App