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
    

    
    listCheck.onclick = function(e) {
        listItem.style.textDecorationLine = "line-through"
      };
    input.focus();

   
    

}




