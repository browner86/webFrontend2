/*
Generates html for index links variable will be updated weekly to
create a new link to that weeks project.
*/

//create links array. each iterator is object
//key value pairs with label and url
const links = [
  { label: "Week1 notes",
    url: "week1/index.html"
  }];

// declare variable and begin ordered list
var linksHtml = "<ol>";


//loop through links array
for (var i = 0; i < links.length; i++) {
    //assign values to variables coorelated with key.
    var i;
    var label = links[i]['label'];
    var url   = links[i]['url']  ;
    // create list Item for each item in links array
    // create anchor tag with label and url
    linksHtml += `<li><a href="${url}">${label}</a></li>`;
    }

//close ordered list
linksHtml += "</ol>";

// insert html into the linksHtml div in index
document.getElementById('linksHtml').innerHTML = linksHtml;
