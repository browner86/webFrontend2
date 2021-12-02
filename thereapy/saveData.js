

function sendToLocalStorage(){
    let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let postDate = `${month}/${day}/${year}.`;
let storage;
let postEntry = document.getElementById('entry').value;
let postTitle = document.getElementById('title').value;
let obj = { date    :   postDate
          , title   :   postTitle
          , entry   :   postEntry };
let postObj = JSON.stringify(obj);
console.log(postObj);
if(localStorage.getItem('postArray')) {
    // console.log("there is a postarray");
    
    storage = [localStorage.getItem('postArray')];
    storage.push(postObj);
    localStorage.setItem('postArray', storage);
} else{
    // console.log("there is no postArray");
    storage = new Array;
    storage.push(postObj);
    localStorage.setItem('postArray', storage);
}
}

