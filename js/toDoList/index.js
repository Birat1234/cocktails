const addBtns = document.querySelectorAll('.add-btn:not(.save)');
const saveItemBtns = document.querySelectorAll('.save');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const ListColumns = document.querySelectorAll('.work-list');
const backlogList = document.getElementById('backlog');
const progressList = document.getElementById('progress');
const completeList = document.getElementById('complete');
const onHoldList = document.getElementById('on-hold');

let isUpdated = false;

let backlogListArray = [];
let progressListArray = []; 
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray];

function getWorkList() {
    if (localStorage.getItem('backlogItems')) {
        backlogListArray = JSON.parse(localStorage.backlogItems);
        progressListArray = JSON.parse(localStorage.progressItems);
        completeListArray = JSON.parse(localStorage.completeItems);
        onHoldListArray = JSON.parse(localStorage.onholdItems);
    }
    else{
        backlogListArray = ['eating', 'jfirsad'];
        progressListArray = ['work on projects', 'listen music'];
        completeListArray = ['being cool', 'play cricket','listen music'];
        onHoldListArray = ['travel', 'watching movie'];
        
    }
}

function updateList() {
   localStorage.setItem('backlogItems', JSON.stringify(backlogListArray));
   localStorage.setItem('progressItems', JSON.stringify(progressListArray));
   localStorage.setItem('completeItems', JSON.stringify(completeListArray)); 
   localStorage.setItem('onHoldItems', JSON.stringify(onHoldListArray));
}
// function updateWorkList() {
//     colums = ['backlog', 'progress', 'complete', 'onhold'];
//     colums.forEach((item, index)=>{
//         localStorage.setItem(`${item}Items`, JSON.stringify(listArrays[index]));
//     })
// }
console.log(backlogListArray);
getWorkList();
updateList();
console.log(backlogListArray);



function createItemEl(coloumEl, column, item, index) {
    console.log(coloumEl);
    console.log(column);
    console.log(item);
    console.log(index);


    const listEl = document.createElement('li');
    listEl.classList.add('work');

    coloumEl.appendChild(listEl);
}




//Update all colums

// function updateDOM() {
//     if (!isUpdated) {
//         getWorkList()
//     }

//     backlogList.textContent = '';
//     backlogListArray.forEach((item, index)=>{
//         createItemEl(backlogList, 0, item, index)
//     })

//     progressList.textContent = '';
//     progressListArray.forEach((item, index)=>{
//         createItemEl(progressList, 1, item, index)
//     })

//     completeList.textContent = '';
//     completeListArray.forEach((item, index)=>{
//         createItemEl(completeList, 2, item, index)
//     })

//     onHoldList.textContent = '';
//     onHoldListArray.forEach((item, index)=>{
//         createItemEl(onHoldList, 3, item, index)
//     })

// }

// updateDOM();