console.log("ToDo App In JavaScript Using All Previous Concepts \n\n");
console.log("list - to show all todos");
console.log("add - to add a todo");
console.log("delete - to delete a task");
console.log("quit - to exit the todo");
console.log("\n\n");

let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------------------------");
    } else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    } else if(req == "delete"){
        let idx = prompt("Please enter task index that you want to delete");
        todo.splice(idx, 1);
        console.log(idx, "Task Deleted");
    } else {
        console.log("You entered the wrong request !!!");
    }

    req = prompt("Please enter your request");
}