const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


let toDoArray = [];

//    !CRUD//////
//   - Create.Read.Update.Delete 
//   - Post - GET - PUT - DELETE

// GET
// Setup a GET route to get all the guest from the database
router.get('/', (req, res) => {
    console.log(`GET requestfor /todoList`);
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    let queryText = `SELECT * FROM "todoList" ORDER BY id ASC;`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query , ${error}`);
            res.sendStatus(500); // Good server always responds
        })
})

// POST
// Setup a POST route to add a new guest to the database
router.post('/', (req, res) => {
    const task = req.body;
    console.log(req.body);
    let queryText = `INSERT INTO "todoList ("taskname", "date", "currentstatus") VALUES ($1, $2, $3);`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    let values =[task.taskname, task.date, task.currentstatus]
    pool.query(queryText, values)
        .then((result) => {
            console.log(`Added todoList the database`, toDoArray);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT

 router.put('/:id', (req, res) => {
    console.log('PUT Request');
    let taskToEdit = req.params.body;
    let taskId = req.params.id; 
    let queryText = 'UPDATE "todoList" SET "taskname" = $1, "date" = $2, "currentstatus = $3';
    pool.query(queryText, [taskToEdit.taskname, taskToEdit.date, taskToEdit.currentstatus]).then((result) => {
       res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in PUT: ${error}`);
        res.sendStatus(500);
    })
 });



// DELETE

// Delete by id
router.delete('/:id', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const deleteIndex = Number(req.params.id);
    let queryText = `DELETE FROM "todoList" WHERE "id" = $1;`;
    pool.query(queryText, [deleteIndex])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in Delete ${error}`);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;

