


let list = document.getElementById('list')
function createTodo() {
    let id = "id" + Math.random().toString(8).slice(2)
    let todo = document.createElement('li')//creates an <li> tag in the html document
    todo.setAttribute('id', id);
    list.appendChild(todo);
    let inputValue = document.getElementById("input").value;
    console.log(inputValue); //debug
    document.querySelector('id').innerHTML = inputValue;
}
