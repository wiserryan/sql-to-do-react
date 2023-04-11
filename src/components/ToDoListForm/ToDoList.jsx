import { useState, useEffect } from 'react'
import axios from 'axios'
import ToDoItem from './ToDoItem';
import react from 'react';

function ToDoList() {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [listToDo, setListToDo] = useState([]);
    
    const fetchToDoList = () => {
    
//GET request
    axios.get('/todoList').then((response) => {
            setListToDo(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something Went Wrong');
        });
    }

 useEffect(() => {
    fetchToDoList ();    
 }, []);

 // POST request
 const submitForm = (e) => {
    e.preventDefault();
    axios.post('/todolist', {
        // Using values from our variables in state
        taskname: taskName,
        date: date,
        currentstatus: true,
    }).then((response) => {
        // Clear our input fields
        setTaskName('');
        setDate('');
        setCurrentStatus('');
        // Update our list of tasks
        fetchToDoList();
    }).catch((error) => {
        console.log(`Error in ToDoList POST ${error}`);
        alert('Something is wrong in POST ToDoList.');
    });
};

return (
    <>

<div id="list">
    <h1>My Fabulous To Do List</h1>
    <form onSubmit={submitForm}>
        <div className='formContainer'>
            <div className='formItems'>
                
    <h2></h2>            
                <div>
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
            />

            <h2>Creature List</h2>
            {/* Used for testing */}
            {/* { JSON.stringify(listOfCreatures) } */}
            
        </div>
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
            c

            <h2>Creature List</h2>
            {/* Used for testing */}
            {/* { JSON.stringify(listOfCreatures) } */}
            



<div>
    <ul>
        {
            listToDo.map((task) => (
                <ToDoItem
                key={task.id}
                task={task}
                fetchToDoList={fetchToDoList}
                />
            ))
        }
    </ul>
</div> 

);
}

export default ToDoList;