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
// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent ='Item No 2';
// // items[1].style.fontWeight = 'bold'
// items[2].style.backgroundColor = 'Green'

// for(var i =0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold'
// }



// Get Element by Tag name
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);
// li[1].textContent ='Item No 2';
// // items[1].style.fontWeight = 'bold'
// li[2].style.backgroundColor = 'Green'

// for(var i =0; i<li.length; i++)
// {
//     li[i].style.fontWeight = 'bold'
// }


// QuerySelector

// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 3px #ccc'

// var input = document.querySelector('input');
// input.value = 'Tejas Sawadh';

// var submit = document.querySelector('input[type=submit ]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color ='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ='blue';

// var lastItem = document.querySelector('.list-group-item:nth-child(1)');
// lastItem.style.color ='green';


// QuerySelectorALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent ='Item Fister';

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i =0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor ='#f4f4f4'
//     even[i].style.backgroundColor ='#ccc'
// }

// Traversing the DOM

var itemList = document.querySelector('#items');
//parent node

// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

//Parent Element
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

//Children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow'

// First Child
// console.log(itemList.firstChild);

// First element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='Hello';


// First Child
// console.log(itemList.lastChild);

// Last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='Hello';

//next sibling
// console.log(itemList.nextSibling);
// next Elment sibling
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// // previous Element sibling
// console.log(itemList.previousElementSibling); 
itemList.previousElementSibling.style.color = 'green'




//create element
var newDiv = document.createElement('div');
// add class
newDiv.className='hello';
// add ID
newDiv.id ='hello1';
// add Attribut
newDiv.setAttribute('title', 'hello div');
// create text node
var newText = document.createTextNode('Hello ');
// add text to div
newDiv.appendChild(newText);
console.log(newDiv);

var container = document.querySelector( 'header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize ='30px';




