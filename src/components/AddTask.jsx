import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';


const AddTask = ( {handleTaskAddition}) => {
    const [inputData, setInputdata] = useState('')

    const handleInputChange = (e) =>{
        setInputdata(e.target.value);
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData);
        setInputdata("")
    }

    return ( 
        
        <div className='add-task-container'>
            <input
            value ={inputData}
            onChange={handleInputChange} 
            type="text"          
            className='add-task-input' />
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
             
        </div>
     );
}
 
export default AddTask;