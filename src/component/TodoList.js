import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import '../App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const totalTasks = tasks.length;
  const completedTasks = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);

  return (
    <div>
    <Navbar/>
    <div className="todo-list-wrapper">
      <div className="App">
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            id='inputtask'
            onChange={handleInputChange}
            placeholder="Enter a new task..."
          />
          <button onClick={addTask} className='addbutton'>Add Task</button>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="task-stats">
          <p>Total Tasks: {totalTasks}</p>
          <p>Completed Tasks: {completedTasks}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TodoList;
