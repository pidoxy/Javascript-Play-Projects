




let list = document.getElementById('list');

let id = "id" + Math.random().toString(16).slice(2);

function createTodo() {

    

    let todo = document.createElement('li');//creates an <li> tag in the html document
    todo.setAttribute('id', id);


    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.setAttribute('id', 'check');
    done.setAttribute('class', 'checkIt')
    done.setAttribute('onclick', 'completed();');
    todo.appendChild(done);


    let inputValue = document.getElementById("input").value;
    console.log(inputValue); //debug
    let newtodo = document.createTextNode(inputValue);
    todo.appendChild(newtodo);

    if (inputValue === '') {
        alert('Add todo');
    } else {
        list.appendChild(todo);
    }
    document.getElementById('input').value = ""

}
//checkbox for todo


function completed() {
    let checkBox = document.getElementById('check');
    let check = document.getElementById(id);
    
    if (checkBox.checked === true) {
        console.log('sgsg');
        check.style.textDecoration = 'line-through';
      }  else if ( checkBox.checked === false) {
        console.log( 'line-through');
        check.style.textDecoration = 'none';
    
     }
 
}



