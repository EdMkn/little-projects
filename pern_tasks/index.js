const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body



//ROUTES//
//post tasks
app.post("/tasks", async(req,res)=>{
    try{
        const {description} = req.body;
        const newTask = await pool.query(
            "INSERT INTO task (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTask.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});

//get all tasks
app.get("/tasks",async(req,res)=>{
    try{
        const allTasks = await pool.query("SELECT * FROM task");
        res.json(allTasks.rows);
    }catch(err){
        console.error(err.message);
    }
})

//get a task
app.get("/tasks/:id",async (req,res)=>{
    try{
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM task WHERE task_id = $1",[
            id
        ]);
        res.json(task.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})

//update a todo
app.put("/tasks/:id",async(req,res)=>{
    try{
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE task SET description = $1 WHERE task_id= $2",
            [description, id]
        );

        res.json("Task was updated!");
    }catch(err){
        console.error(err.message);
    };
});

//delete a todo

app.delete("/tasks/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteTask = await pool.query("DELETE FROM task WHERE task_id= $1",[
            id
        ]);

        res.json("Task was deleted!");
    }catch(err){
        console.error(err.message);
    };
})
app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});