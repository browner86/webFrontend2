// let postArray = localStorage.getItem('postArray');
// postArray= postArray.split('},')
// let obj = JSON.parse(postArray[0]);
// console.log(postArray);
// console.log(postArray[0]);
// console.log(obj);
// let date = ` <p> Date: ${obj.date} </p>`;
// let title = ` <p> Title: ${obj.title} </p>`;
// let entry = ` <p> Entry: ${obj.entry} </p>`;
// let html = `
// <h5 class="card-header"><img class="avatar-image" src="images/jake-nackos-IF9TK5Uy-KI-unsplash small.jpg" alt="avatar"> ${obj.title}</h5>
// <div class="card-body">
//   <h5 class="card-title">${obj.date}</h5>
//   <p class="card-text">${obj.entry}</p>
// </div>
// `


// document.getElementById('journal-ent').innerHTML = html;

let postArray = localStorage.getItem('postArray');

let obj = JSON.parse(postArray);
console.log(postArray);
console.log(postArray[0]);
console.log(obj);
let date = ` <p> Date: ${obj[0].date} </p>`;
let title = ` <p> Title: ${obj[0].title} </p>`;
let entry = ` <p> Entry: ${obj[0].entry} </p>`;
let html = `
<h5 class="card-header"><img class="avatar-image" src="images/jake-nackos-IF9TK5Uy-KI-unsplash small.jpg" alt="avatar"> ${obj[0].title}</h5>
<div class="card-body">
  <h5 class="card-title">${obj[0].date}</h5>
  <p class="card-text">${obj[0].entry}</p>
</div>
`


document.getElementById('journal-ent').innerHTML = html;