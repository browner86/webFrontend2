/*
Generates html for index links variable will be updated weekly to
create a new link to that weeks project.
*/

//create links array. each iterator is object
//key value pairs with label and url
const links = [
   { label: "Week1 notes", url: "week1/index.html"}
  ,{ label: "Week2 notes", url: "week2/index.html"}
  ,{ label: "Week3 notes", url: "week3/index.html"}
  ,{ label: "Week4 notes", url: "week4/index.html"}
  ,{ label: "Week5 notes", url: "week5/index.html"}
  ,{ label: "Week6 notes", url: "week6/index.html"}
  ,{ label: "Week7 notes", url: "week7/index.html"}
  ,{ label: "Week8 notes", url: "week8/index.html"}
  ,{ label: "Week9 notes", url: "week9/index.html"}
  ,{ label: "Week10 notes", url: "week10/index.html"}
  ,{ label: "Week11 notes", url: "week11/index.html"}
  ,{ label: "Week12 notes", url: "week12/index.html"}
  ,{ label: "Week13 notes", url: "week13/index.html"}
  ,{ label: "Project", url: "thereapy/home.html"}

];

// declare variable and begin ordered list
var linksHtml = "<ul>";


//loop through links array
for (var i = 0; i < links.length; i++) {
    //assign values to variables coorelated with key.
    var i;
    var label = links[i]['label'];
    var url   = links[i]['url']  ;
    // create list Item for each item in links array
    // create anchor tag with label and url
    linksHtml += `<li><a class="btn btn-dark"  href="${url}">${label}</a></li><br>`;
    }

//close ordered list
linksHtml += "</ul>";

// insert html into the linksHtml div in index
document.getElementById('linksHtml').innerHTML = linksHtml;
