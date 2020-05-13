




let list = document.getElementById('list');



function createTodo() {

    let id = "id" + Math.random().toString(16).slice(2);

    let todo = document.createElement('li');//creates an <li> tag in the html document
    todo.setAttribute('id', id);
    
    //checkbox for todo
    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    // done.setAttribute('checked', '');
    
    todo.appendChild(done);

    let inputValue = document.getElementById("input").value;
    console.log(inputValue); //debug
    let newtodo = document.createTextNode(inputValue);
    todo.appendChild(newtodo);

    if(inputValue === ''){
        alert('Add todo');
    } else {
        list.appendChild(todo);
    }

}

//  completed = () => {
//      if(checked) {

//      }
//  }



