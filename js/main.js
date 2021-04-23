const links = [
  { label: "Week1 notes",
    url: "week1/index.html"
  }
  // ,
  // {
  //   label: "Week2 notes",
  //   url: "week2/index.html"
  // }
]
var linksHtml = "<ol>";


var i;
for (var i = 0; i < links.length; i++) {

  // console.log(links[i]['label']);

  var label = links[i]['label'];
  var url   = links[i]['url']  ;
  // // label = JSON.stringify(label);
  // // url = JSON.stringify(url);
    linksHtml += `<li><a href="${url}">${label}</a></li>`;
  }
  linksHtml += "</ol>";

// console.log(linksHtml);
document.getElementById('hello').innerHTML = linksHtml;

// let linkHtml = document.querySelector(".linkHtml");
// linkHtml.textContent = 'Hello World';
// var x = document.getElementById("myDIV");
// x.querySelector(".links").innerHTML = "Hello World!";
// x.querySelector("#paragraph").innerHTML = "This is a paragraph";

// document.getElementById('hello').innerHTML = "Hello World";
