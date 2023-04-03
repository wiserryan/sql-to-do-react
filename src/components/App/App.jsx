import {useState, useEffect} from 'react';
//import axios from 'axios';


function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
    </div>
  );

}
//    !CRUD//////
//   - Create.Read.Update.Delete 
//   - Post - GET - PUT - DELETE

//POST
// const submitForm = (e) = > {
//   e.preventDefault();
//   Axios.post('/ToDoList', {
//     //using values from our variables in state 
//     name: creatureName
//     origin: creatureOrigin,
//   }).then((response) => {
//     setCreatureName('');
//     setCreatireOrigin('');
//    // Update our list of creatures
//    fetchCreatureList();
//   }).catch((error) => {
//     console.log(`Error in POST ${error});
//     alert('Something went wrong.');
//   });
// }

//GET
//GET EXAMPLE
// function CreatureList() {
//     const [creatureName, setCreatureName] = useState('')
//     const [creatureOrigin, setCreatueOrigin] = useState('')
//     const [listOfCreatures, setListofCreatures] = useState([])
   // All Components return what you want them to display
     //GET
//     const fetchCreatureList = () => {
//         axios.get('/creature').then((response) => {
//             setListofCreatures(response.data)
//         }).catch((error) => {
//             console.log(`Error in GET ${error}`)
//             alert('Something Went Wrong')
//         })
//     }
//     useEffect(() => {
         // At this point, React is Ready!
//         fetchCreatureList()
//     }, []) //!Remember the empty array


export default App
