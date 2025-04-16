const addForm = document.querySelector(".new");
const list = document.querySelector(".list");
//  const remove = document.querySelectorAll(".delete")
const search = document.querySelector(".search")
//adding a new to do to the list
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const toDo = addForm.add.value.trim();
    //if (!toDo) return;
    let html =`<div class="list-group-item d-flex justify-content-between align-items-center border-4 ">
                    <h5 class="mb-0 task">${toDo}</h5>
                    <h5 class="mb-0 px-3 delete">X</h5>
                </div>`

    //list.insertAdjacentHTML("beforeend", html)
         
     if(toDo.length){
        list.innerHTML += html
        //list.append(html)
         addForm.reset();
    }
    
})

//striking through a completed task
// deleting to do - using event delegation
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }else if(e.target.classList.contains("task")){
        e.target.classList.toggle("line")
    }
})

// my first attempt that didn't work
// remove.forEach((cancel) => {
//     cancel.addEventListener("click", (e)=> {
//         e.target.parentElement.remove();
//     })
// })


//searching Todo- Getting the particular form that accept the search data
let filteredToDo = (word) => {
    Array.from(list.children)
    .filter((todo) => {
           return !todo.textContent.toLocaleLowerCase().includes(word);
    })
    .forEach((todo) => {
        todo.classList.add("disappear");
    })

    Array.from(list.children)
    .filter((todo) => {
           return todo.textContent.toLocaleLowerCase().includes(word);
    })
    .forEach((todo) => {
        todo.classList.remove("disappear");
    })
} 


//Adding keyup to get each text that was typed
search.addEventListener("input", () => {
    const word = search.value.trim().toLowerCase();
    filteredToDo(word);
})




