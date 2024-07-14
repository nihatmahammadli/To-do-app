const input1 = document.querySelector("#input-1");
const btn1 = document.querySelector(".common-btn");
const tasks = document.querySelector(".ending");

const todoArr = [];

function add() {
    let value = input1.value;
    if(value.length === 0){
        
    } else {
        todoArr.push(value);
        render()
        console.log(todoArr);
    }
}

function render(){
    tasks.innerHTML = "";
    todoArr.forEach((item) => {
        tasks.innerHTML += `
        <div class="task"> <p class="pitem">${item}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button></div>
        `
    });
    deleteItem();
    editItem();
};

function deleteItem(){
    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn, index) =>{
        btn.addEventListener("click", function(){
            todoArr.splice(index, 1);
            render()
        });
    });
};

function editItem (){
    let editBtns = document.querySelectorAll(".edit");
    editBtns.forEach((btn, index) => {
        btn.addEventListener("click", function(){
            let taskElement = btn.parentNode.querySelector("p");
            taskElement.contentEditable = true;
            taskElement.focus();
            taskElement.addEventListener("keydown", function (e) {
                if(e.key === "Enter"){
                    taskElement.contentEditable = false;
                    todoArr[index] = taskElement.textContent
                }
            })
        });
    });
};

btn1.addEventListener("click", add)

