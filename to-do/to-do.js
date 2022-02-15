const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');




button.onclick = function(){
    let myItem = input.value;
    if (myItem === ''){
        alert("You must add a task")
    } else{
      task = myItem
    } 

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listCheck = document.createElement('button')
const listBtn = document.createElement('button');



    listItem.appendChild(listText);
    listText.textContent = task;
    listItem.appendChild(listCheck);
     listItem.appendChild(listBtn);
    listCheck.textContent = '✅';
    listBtn.textContent = '❌';
    
    list.appendChild(listItem);


    listBtn.onclick = function(e) {

    list.removeChild(listItem);
    }        
    
//     listCheck.addEventListener
// l
    
//     // ("a").click(function() {
//     //     $(this).css("text-decoration", "line-through");
//     //   });
    
    
    listCheck.onclick = function(e) {
        listItem.style.textDecorationLine = "line-through"
      };
    input.focus();

   
    

}

















// const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = function() {
//   let myItem = input.value;
//   input.value = '';

//   const listItem = document.createElement('li');
//   const listText = document.createElement('span');
//   const listBtn = document.createElement('button');

//   listItem.appendChild(listText);
//   listText.textContent = myItem;
//   listItem.appendChild(listBtn);
//   listBtn.textContent = '❌';
//   list.appendChild(listItem);

//   listBtn.onclick = function(e) {
//     list.removeChild(listItem);
//   }

//   input.focus();
// }