const inquirer = require("inquirer")
const mysql = require("mysql2")
const express = require("express")
const cTable = require("console.table")
const fs = require('fs')

//const PORT = process.env.PORT || 3001
//const app = express()

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'TAmysql!',
      database: 'employee_db'
    },
    console.log(`Connected to the database.`)
  );

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

  const initialPrompt = () =>{
    inquirer
    .prompt ([
       {
        type: 'checkbox',
        message: 'Please choose a task for Employee Tracker',
        name: 'task',
        choices: ['View departments',
         'View roles',
         'View employees',
         'Add department',
         'Add role',
         'Add employee',
         'Update employee role',
         'Exit'
        ],
       } 
    ])
    .then((selectedTask) => {
        let {task} = selectedTask;
        if (task == "View departments"){
            return viewDept();
        }
        if (task == "View roles"){
            return viewRole();
        }
        if (task == "View employees"){
            return viewEmp();
        }
        if (task == "Add department"){
            return addDept();
        }
        if (task == "Add role"){
            return addRole(); 
        }
        if (task == "Add employee"){
            return addEmp(); 
        }
        if (task == "Update employee role"){
            return UpdateRole(); 
        }         
        else {
            console.log('Something has gone wrong')
        }
        
    });
}

function viewDept(){
    db.query("SELECT * FROM department", function (error, results){
        if (error) throw error;
        console.table(results);
        initialPrompt();
    });
};

function viewRole(){
    db.query("SELECT * FROM role", function (error, results){
        if (error) throw error;
        console.table(results);
        initialPrompt();
    });
};

function viewEmp(){
    db.query("SELECT * FROM employee", function (error, results){
        if (error) throw error;
        console.table(results);
        initialPrompt();
    });
};

function addDept() {
    inquirer
    .prompt ([
        {
        
        type: "input",
        message : "What is the name of the new department?",
        name: "dept"
        }   
    ]) .then (function(res) {
        db.query( "INSERT INTO department SET ?",
        {
            name_: res.dept
        },
        function(err) {
            if (err) throw err
            console.table(res);
            initialPrompt();
        }
        )

        })
}

function addRole() {
    inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the title of the new role ?",
            name: "title"
          },
              {
            type: "input",
            message: "Enter department-id for new role ?",
            name: "dept"
          },
              {
            type: "input",
            message: "What is the salary for the new role ?",
            name: "salary"
          }
    ]) .then (function(res) {
        db.query( "INSERT INTO role SET ?",
        {
            title: res.title,
            salary: res.salary,
            department_id: res.dept,
        },
        function(err) {
            if (err) throw err
            console.table(res);
            initialPrompt();
        }
        )

        })
}




initialPrompt()