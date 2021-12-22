import React from 'react';
import { useParams,  useHistory  } from 'react-router-dom';

import Button from './Button';
import "./TaskDetails.css";

const TaskDetails = () => {

    const params = useParams();
    const hitory = useHistory();

    const handleBackButtonClick = ()=>{
        hitory.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}> Voltar </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste sit maiores est. Dolorum dolore autem quidem qui facere. Sint repudiandae laborum voluptatibus, numquam odio reiciendis harum odit debitis praesentium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit asperiores atque provident eaque quaerat autem fugiat veritatis reiciendis maxime magnam, est natus itaque dolores voluptatem expedita quia ratione. Natus, nulla.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;