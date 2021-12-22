import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import AddTask from "./components/AddTask";
import Tasks from './components/Tasks'
import Headder from './components/Headder';
import TaskDetails from "./components/TaskDetails";

const App = () => {
  // let massage = 'hellow world';
  const [tasks, setTask] = useState([
    {
      id:'1',
      title:'estudar',
      completed: false,
    },
    {
      id:'2',
      title:'ler',
      completed: true,
    },

  ]);

  const handleTaskClick = (taskId) =>{
    const newTask = tasks.map((task) =>{
      if (task.id === taskId) return{...task, completed:!task.completed}
      
      return task;
    });

    setTask(newTask);
  };

  const handleTaskDeletion= (taskId) =>{
    const newTasks = tasks.filter(task =>task.id !==taskId)
    setTask(newTasks)
  }

  const handleTaskAddition = (taskTitle) =>{
    const newTask =[...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];
    setTask(newTask);
  }

  return(
    <Router>
    
      <div className="container">
      <Headder/>
      <Route path={"/"}
      exact
      render={() =>(
        <>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks = {tasks} 
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion} /> 
        </>
      )}/>

      <Route path="/:taskTitle" exact component={TaskDetails}/>

      </div>
      
    </Router>
  );
};

export default App;