import React, { useState, useEffect } from 'react';
import Tasks from '../../components/tasks'

export function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(()=>{
    setAllTasks(JSON.parse(JSON.stringify(tasks)))
  }, []);

  const addTask = (task) => {
    if (tasks.some((t) => t.text === task.text)) {
      alert("Ya existe una tarea con ese nombre");
      return;
    }
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setAllTasks(JSON.parse(JSON.stringify(tasks)))
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
    setAllTasks(JSON.parse(JSON.stringify(tasks)))
  };

  const filterTasks = (filter) => {
    if (filter === 'all') {
      setTasks(allTasks);
    } else if (filter === 'completed') {
      setTasks(allTasks.filter((task) => task.isCompleted));
    } else if (filter === 'pending') {
      setTasks(allTasks.filter((task) => !task.isCompleted));
    }
  };

  const editTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = prompt('Enter the new task text');
    setTasks(newTasks);
    setAllTasks(JSON.parse(JSON.stringify(tasks)))
  };

  return (
    <Tasks 
      title={'Tareas'}
      list={tasks}
      handleEdit={editTask}
      handleCreate={addTask}
      handleRemove={removeTask}
      handleCompleted={completeTask}
      handleFilter={filterTasks}
    ></Tasks>
  );

};

