




let list = document.getElementById('list');

let id = "id" + Math.random().toString(16).slice(2);

function createTodo() {



    let todo = document.createElement('li');//creates an <li> tag in the html document
    todo.setAttribute('id', id);
    todo.setAttribute('class', id);

    //checkbox element
    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.setAttribute('onclick', 'completed();');
    done.setAttribute('id', 'check');

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
    let check = document.getElementsByClassName(id);
    

    if (checkBox.checked) {
        for (let i = 0; i < check.length; i++) {

            check[i].style.textDecoration = 'line-through';
            check[i].style.backgroundColor = '#ff006a';
            check[i].style.textDecorationColor = 'black';
            check[i].style.color = 'white';
        }

    }  else {
        for (let i = 0; i < check.length; i++) {

            check[i].style.textDecoration = 'none';
            check[i].style.backgroundColor = 'white';
            check[i].style.color = 'black';
        }


    }


}
