let postArray = localStorage.getItem('postArray');
postArray= postArray.split('},')
let obj = JSON.parse(postArray[0]);
console.log(postArray);
console.log(postArray[1]);
console.log(obj);
let date = ` <p> Date: ${obj.date} </p>`;
let title = ` <p> Title: ${obj.title} </p>`;
let entry = ` <p> Entry: ${obj.entry} </p>`;
let html = `
<h5 class="card-header">${obj.title}</h5>
<div class="card-body">
  <h5 class="card-title">${obj.date}</h5>
  <p class="card-text">${obj.entry}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
`


document.getElementById('journal-ent').innerHTML = html;