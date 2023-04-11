import { useState, useEffect } from 'react'
import axios from 'axios'
//import taskList from './TaskList.css'

function TaskList() {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);
    const fetchTaskList = () => {
    
//    !CRUD//////
//   - Create.Read.Update.Delete 
//   - Post - GET - PUT - DELETE

//GET request
    axios.get('/todo').then((response) => {
            setListOfTasks(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something Went Wrong');
        })
    }

 useEffect(() => {
    fetchTaskList ();    
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
        fetchTaskList();
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        alert('Something went wrong.');
    });
};

// return (
// <>
// /* <div>
//     <ul>
//         {
//             listOfTasks.map((task) => (
//                // <TaskList</TaskList>
//                 key={task.id}
//                 task={task}
//                 fetchTaskList={fetchTaskList}
//                 />
//             ))
//         }
//     </ul>
// </div> */








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



// export default CreatureForm
// All components must export

}
export default TaskList;