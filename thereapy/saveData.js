

function sendToLocalStorage(){
    let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let postDate = `${month}/${day}/${year}`;
let storage;
let postEntry = document.getElementById('entry').value;
let postTitle = document.getElementById('title').value;
let obj = { date    :   postDate
          , title   :   postTitle
          , entry   :   postEntry };
// let postObj = JSON.stringify(obj);

if(localStorage.getItem('postArray')) {
    // console.log("there is a postarray");
    storage = localStorage.getItem('postArray');
    let parsed = JSON.parse(storage);
   
    parsed.push(obj);
    let postArrayString = JSON.stringify(parsed);
    localStorage.setItem('postArray', postArrayString);
} else{
    // console.log("there is no postArray");
    storage = new Array;
    storage.push(obj);
    storage = JSON.stringify(storage);
    localStorage.setItem('postArray', storage);
}
}

function clearLocalStorage(){
    let confirmClear = confirm("Are you sure you want to delete all Journal entries?")
    if(confirmClear){
        localStorage.removeItem('postArray');
        location.reload();
    }
    
}