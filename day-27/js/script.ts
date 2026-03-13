interface Todo {
  id: number;
  todo: string;
  isComplete?: boolean;
}

let list: Todo[] = [];
let todo = document.getElementById("todo") as HTMLInputElement;
let myForm = document.getElementById("myFrom") as HTMLElement;
let todoTbl = document.querySelector("#todoTbl tbody") as HTMLElement;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = {
    id: Date.now(),
    todo: todo.value,
  };

  list.push(data);
  todo.value = "";
  todo?.focus();
  handleDisplay(list);
});

const handleDisplay = (list: Todo[]) => {
  todoTbl?.innerHTML = "";
  list.forEach((value: Todo, index: number) => {
    let row = document.createElement("tr") as HTMLElement;
    row.innerHTML = `
            <td>${index + 1}</td>
            <td id=${index}><input type='checkbox' data-todo-id=${index} /> ${value.todo}</td>
            <td><button type="button" disabled>Remove</button></td>
        `;
    todoTbl?.append(row);
  });

  const inputsChecks = document.querySelectorAll("#todoTbl tbody input");

  inputsChecks.forEach((input) => {
    input.addEventListener("input", function (e) {
      let id = e.target.dataset.todoId;
      let row = document.getElementById(`${id}`);
      
      if(e.target.checked){
        row?.classList.add('complete');
      }else{
        row?.classList.remove('complete');
      }

    });
  });
};

// export {}
