let markup;

if (localStorage.getItem('postArray')) {
  //get entry post array from local storage it is stored as a string.
  let postArray = localStorage.getItem('postArray');

  //convert local storage string into array of javascript objects.
  let objectArray = JSON.parse(postArray);

  //loop through the objects to build html for each post.
   markup = `
${objectArray.map(journalEntry => `
<div class="card border-light transparent">
<h5 class="card-header"> ${journalEntry.title}</h5>
<div class="card-body">
<h5 class="card-title">${journalEntry.date}</h5>
<p class="card-text">${journalEntry.entry}</p>
</div>
</div>
`).join('')}
<button type="button" onclick="clearLocalStorage()" class="btn">Clear journal entries</button>`;
}else{
  markup = `
  <div class="card border-light transparent">
<div class="card-body">
<h5 class="card-title">Welcome to Always THEREapy</h5>
<p class="card-text">This page will show your Journal entries. 
Click the "Go to Journal" button to write your first journal entry.</p>
<p class="card-text">Tap the "Read" button to sample the first five pages of "Putting up with Susan". </p>
<p>Head over to "Meditate" to view a meditation video.</p>
</div>
</div>
`
}

//=========================================================================




document.getElementById('journal-ent').innerHTML = markup;