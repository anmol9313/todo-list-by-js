let todoList=[
    {
        item:'buy bmw',
        duedate: '4/5/2029' 
    },
    {   item : 'buy gt650',
        duedate : '6/5/2028'
    }
];
displayitem();

function addtodo() {
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value; 
    let todoDate=dateElement.value;
    todoList.push({item : todoItem, duedate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayitem();
}
function displayitem(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml ='';
    for(let i=0;i<todoList.length;i++)
    {
       let {item,duedate} = todoList[i];
       newHtml += `
      <span>${item}</span>
      <span>${duedate}</span>
      <button class="button-delete" onclick="todoList.splice(${i},1);
      displayitem();">Delete</button>
    `;
    }
    containerElement.innerHTML = newHtml;
}