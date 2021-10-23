const list = document.getElementById('taskList');
const form = document.getElementById('form');
const newTask = document.getElementById('newTask');
const addButton = document.getElementById('add-btn');
const activeButton = document.getElementById('active-btn');
const allButton = document.getElementById('all-btn');
const completedButton = document.getElementById('completed-btn');
const taskStatus = document.getElementById('status');
const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
let tasks = localStorage.getItem("tasks") !== null ? localStorageTasks : [];


addButton.addEventListener("click", addTask);
allButton.addEventListener("click", showAll)
activeButton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);

function addListItemHTML(task) {
    const taskListItem = document.createElement("li");
    taskListItem.innerHTML = `<input type="checkbox" id="status" ${task.completed === true ? "checked" : ""
        } onclick="updateTask(${task.id})"/>
      <label class="label-for-check" for="idinput">${task.content
        }</label> <button class="delete-btn" onclick="removeTask(${task.id
        })">x</button>`
    list.appendChild(taskListItem)
}

function init() {
    list.innerHTML = "";
    tasks.forEach(addListItemHTML);
    countTasksLeft()
}
function localStorageSave() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage);
    countTasksLeft(addListItemHTML);
}


function showActive() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === false);
    filteredTasks.forEach(addListItemHTML);
}

function showAll() {
    init();
}

function showCompleted() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === true);
    filteredTasks.forEach();

}

function updateTask(id) {
    const tasksIndex = tasks.map((transaction) => transaction.id);
    const index = tasksIndex.indexOf(id);
    tasks[index].completed = !tasks[index].completed;
    localStorageSave();
    init();
}

function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    localStorageSave();
    init();
}

function addTask(event) {
    event.preventDefault();
    const task = {
        id: Date.now(),
        content: newTask.value,
        completed: false,
    };
    tasks.push(task);
    console.log(`tasks variable is ${tasks}`);
    newTask.value = "";
    console.log(`task variable is ${task}`);
    addListItemHTML(task);
    localStorageSave();
    countTasksLeft();
}
function countTasksLeft() {
    document.getElementById("tasks-left").innerText = tasks.filter((task) => task.completed === false).length;

}
function crossoutCompleted(){
    
}
init()