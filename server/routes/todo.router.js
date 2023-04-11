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
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const queryText = `SELECT * FROM guests ORDER BY name ASC;`;
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
    const queryText = `INSERT INTO "todoList ("taskname", "date", "currentstatus")
                     VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    let values =[task.taskname, task.date, task.currentstatus]
    pool.query(queryText, values)
        .then((result) => {
            console.log(`Added creature to the database`, guest);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})




// PUT




// DELETE




module.exports = router;


// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool.js');

// // Setup a GET route to get all the guest from the database
// router.get('/', (req, res) => {
//     // When you fetch all things in these GET routes, strongly encourage ORDER BY
//     // so that things always come back in a consistent order 
//     const sqlText = `SELECT * FROM guests ORDER BY name ASC;`;
//     pool.query(sqlText)
//         .then((result) => {
//             console.log(`Got stuff back from the database`, result);
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// })


// // Setup a POST route to add a new guest to the database
// router.post('/', (req, res) => {
//     const guest = req.body;
//     const sqlText = `INSERT INTO guests ("name", "kidsMeal")
//                      VALUES ($1, $2)`;
//     // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
//     // the $1, $2, etc get substituted with the values from the array below
//     pool.query(sqlText, [guest.name, guest.kidsMeal])
//         .then((result) => {
//             console.log(`Added creature to the database`, guest);
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// })


// module.exports = router;
