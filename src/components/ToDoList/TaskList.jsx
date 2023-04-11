import { useState, useEffect } from 'react'
import axios from 'axios'
import 'TaskList.css'

function TaskList( {
    const [taskName, setTaskName] = useState('');
    const [date, setdate] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);
    const fetchTaskList = () => {
    
    //GET request
    axios.get('/todo').then((response) => {
            setListOfTasks(response.data);
        }).catch((erro) => {
            console.log(`Error in GET ${error}`);
            alert('Something Went Wrong');
        })
    }

 useEffect(() => {
    fetchTaskList ();    
 }, []);

 const submitForm = (e) => {
    e.preventDefault();
    axios.post('/todolist', {
        // Using values from our variables in state
        taskname: taskName,
        date: date,
        currentstatus: fasle,
    }).then((response) => {
        // Clear our input fields
        setTaskName('');
        setDate('');
        setCurrentStatus('');
        // Update our list of tasks
        fetchTaskList();
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        alert('Something went wrong.');
    });
};



//POST EXAMPLE
 //import props from CreatureList Here
// function CreatureForm({creatureName,setCreatureName,
//                         creatureOrigin,setCreatueOrigin,
//                         fetchCreatureList}) {

//     const submitForm = (event) => {
//         event.preventDefault();
//         axios.post('/creature', {
             //Using values from our var in state
//             name: creatureName,
//             origin: creatureOrigin,
//         }).then((response)=>{
             //clear out input fields
//             setCreatureName('')
//             setCreatueOrigin('')
             // react version of get() after function
//             fetchCreatureList()
//         }).catch((error)=>{
//             console.log(`Error in POST ${error}`)
//             alert('Something Went Wrong')
//         })
//     }

//     return (
//         <>
//         <form onSubmit={submitForm}>
//             Name: 
//             <input type="text" value={creatureName}
//             onChange={(event)=> setCreatureName(event.target.value)}> 
//             </input>
//             <br />
//             Origin: 
//             <input type="text" value={creatureOrigin}
//             onChange={(event)=>setCreatueOrigin(event.target.value)}>     
//             </input>
//             <input type="submit"></input>
//         </form>
        
//         </>
//     )
// } 

// export default CreatureForm
// All components must export


export default ToDoList