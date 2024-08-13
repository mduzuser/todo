import { FaTrash } from "react-icons/fa";

function NewTodo({task, deleteTask,  toggleCheck}) {
  return (
    <div className="todos">
      <div className="checkbox">
        <input type="checkbox" 
               className="unchecked" 
               checked={task.checked}
               onChange={()=>  toggleCheck(task.taskName)}
        />
      </div>

      <div className="todos__item">
        <p
          className={task.checked ? "isChecked" : ''}
        >{task.taskName}</p>
      </div>

      <div className="edit">
        <FaTrash className="trash" 
                onClick={()=>deleteTask(task.taskName)}
        />
      </div>
    </div>
  );
}

export default NewTodo;
