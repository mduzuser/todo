import { LuListTodo } from "react-icons/lu";
import "./App.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Complete from "./components/Complete";

function App() {
  const [newTasks, setNewTasks] = useState([]);

  const addTask = (taskName) => {
    const newItem = { taskName, checked: false };
    setNewTasks([...newTasks, newItem]);
  };

  function deleteTask(deleteTaskName) {
    setNewTasks(newTasks.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setNewTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="todo__box">
            <div className="header">
              <LuListTodo className="todo__icon" />
              <p className="title">Kundalik</p>
            </div>

            <div className="in__box">
              <div className="up__box"></div>

              <div className="down__box">
                <Complete newTasks={newTasks} />
              </div>

              <TaskForm addTask={addTask} />

              <div className="todos__scroll">
                <div className="todos__box">
                  {newTasks.map((task, key) => (
                    <NewTodo
                      task={task}
                      key={key}
                      deleteTask={deleteTask}
                      toggleCheck={toggleCheck}
                    />
                  ))}
                </div>
              </div>

              {newTasks.length === 0 ? (
                <p className="empty">Ajoyib bygungi vazifalar tugadi 😊</p>
              ) : null}
            </div>
          </div>
        </div>

        <a href="https://t.me/mrmarcusedev">
        <p className="copy">© 2024 My Website. All rights reserved.</p>
        </a>
      </div>
    </>
  );
}

export default App;
