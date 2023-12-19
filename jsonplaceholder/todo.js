"use strict";

//get html elements
const toDoIdTextbox = document.querySelector("#toDoIdTextbox");
const displayButton = document.querySelector("#displayButton");

//functions
function displayToDo(){
    fetch("https://jsonplavceholder,.typicode.com/todos/2")
    .then((response))
    .then()

    let todo ={
        userID: 1,
        id: 2,
        title: "Take out the Trash",
        completed: false
    };
    messageDiv.innnerText=
    Title: ${todo.title}
    completed:$ {todo.completyed}
    `;`
}

//wire-up
displayButton.oneclick=displayTodo;