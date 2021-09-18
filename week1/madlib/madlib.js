
// if (localStorage.wordlist !== "null") {
    
//     let wordlist = localStorage.wordlist;
//     console.log(wordlist);
//     let noun1 =wordlist[0];
//     document.getElementById("noun1").val = noun1;
//     document.getElementById("adjective1").innerHTML= wordlist[1];
//     document.getElementById("adjective2").innerHTML= wordlist[2];
//     document.getElementById("pastTenseVerb1").innerHTML= wordlist[3];
//     document.getElementById("presentTenseVerb1").innerHTML= wordlist[4];
//     document.getElementById("noun2").innerHTML= wordlist[5];
//     document.getElementById("pastTenseVerb2").innerHTML= wordlist[6];
//     document.getElementById("presentTenseVerb2").innerHTML= wordlist[7];
//     document.getElementById("pastTenseVerb3").innerHTML= wordlist[8];

// }


function loadStory(){
let noun1 = document.getElementById("noun1").value;

let adjective1 = document.getElementById("adjective1").value;
let adjective2 = document.getElementById("adjective2").value;
let pastTenseVerb1 = document.getElementById("pastTenseVerb1").value;
let presentTenseVerb1 = document.getElementById("presentTenseVerb1").value;
let noun2 = document.getElementById("noun2").value;
let pastTenseVerb2 = document.getElementById("pastTenseVerb2").value;
let presentTenseVerb2 = document.getElementById("presentTenseVerb2").value;
let pastTenseVerb3 = document.getElementById("pastTenseVerb3").value;
let wordlist = [  noun1
                , adjective1
                , adjective2
                , pastTenseVerb1
                , presentTenseVerb1
                , noun2
                , pastTenseVerb2
                , presentTenseVerb2
                , pastTenseVerb3];
localStorage.setItem("wordlist", wordlist);
console.log(localStorage.wordlist);

// return localStorage;
let story = `<p>one day a ${wordlist[0]} wanted to cross a bridge over a pond.
     under that bridge lived a ${wordlist[1]} and ${wordlist[2]} troll. 
     Stomp stomp stomp.
     He ${wordlist[3]} over the bridge.
     "Who stomps on my bridge?" Yelled the troll.
     "stop or I will ${wordlist[4]} you.
     but he had already crossed the bridge.
     On the next day a sleepy ${wordlist[5]} wanted to cross the bridge. 
     Stomp Stomp Stomp. He ${wordlist[6]} over the bridge.
     "Who stomps over my bridge?" Yelled the troll. 
     "stop or I will ${wordlist[7]} you!
     Oh never mind. Nobody listens to me anyways
     and with that the troll ${wordlist[8]} away.</p>`;

document.getElementById("newStory").innerHTML = story;
}

function populateInputs(){
    wordlist = localStorage.wordlist;
    document.getElementById("noun1").innerHTML= wordlist[0]
}

