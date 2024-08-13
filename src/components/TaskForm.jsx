import { useState } from 'react';
import './todos.css'
function TaskForm({addTask}) {

    const [task, setTask] = useState('')

    // console.log(task)

    function handleSubmit(e) {
        setTask(e.target.value)
    }

    function handleAddTask(e){
        e.preventDefault()

        if(task.length === 0) 
            return alert("Iltimos bugungi vazifani kiriting 🙏🏻")
      

        addTask(task)
        setTask('')

        if(task.length >0)
            return alert("Yangi vazifa qo'shildi 😊")
    }

  return (
    <form className='mainForm'
          onSubmit={handleAddTask}
    >
      <input type="text" 
             placeholder="Bugungi vazifani yozing.." 
             onChange={handleSubmit}
             value={task}
      />

      <button>Add</button>
    </form>
  );
}

export default TaskForm;
