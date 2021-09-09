const inquirer = require("inquirer")
const mysql = require("mysql2")
const express = require("express")
const cTable = require("console.table")

const PORT = process.env.PORT || 3001
const app = express()

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'TAmysql!',
      database: 'employee.db'
    },
    console.log(`Connected to the database.`)
  );

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });