// console.log(document.applets)
// console.log(document.URL)
// document.title = "item lister2"
// console.log(document.title)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.head)
// console.log(document.body)

// Get element By Id

// let header = document.getElementById('header-title');
// console.log(header)
// header.textContent = "Hello";
// header.innerText = "Good bye"
// header.style.borderBottom ='solid 3px black'
// var input = document.getElementById('form-inline')
// console.log(input);


//Get elements by class
var items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].textContent ='Item No 2';
// items[1].style.fontWeight = 'bold'
items[2].style.backgroundColor = 'Green'

for(var i =0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold'
}
