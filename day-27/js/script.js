var list = [];
var todo = document.getElementById("todo");
var myForm = document.getElementById("myFrom");
var todoTbl = document.querySelector("#todoTbl tbody");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = {
        id: Date.now(),
        todo: todo.value,
    };
    list.push(data);
    todo.value = "";
    todo === null || todo === void 0 ? void 0 : todo.focus();
    handleDisplay(list);
});
var handleDisplay = function (list) {
    todoTbl === null || todoTbl === void 0 ? void 0 : todoTbl.innerHTML = "";
    list.forEach(function (value, index) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(index + 1, "</td>\n            <td id=").concat(index, "><input type='checkbox' data-todo-id=").concat(index, " /> ").concat(value.todo, "</td>\n            <td><button type=\"button\" disabled>Remove</button></td>\n        ");
        todoTbl === null || todoTbl === void 0 ? void 0 : todoTbl.append(row);
    });
    var inputsChecks = document.querySelectorAll("#todoTbl tbody input");
    inputsChecks.forEach(function (input) {
        input.addEventListener("input", function (e) {
            var id = e.target.dataset.todoId;
            var row = document.getElementById("".concat(id));
            if (e.target.checked) {
                row === null || row === void 0 ? void 0 : row.classList.add('complete');
            }
            else {
                row === null || row === void 0 ? void 0 : row.classList.remove('complete');
            }
        });
    });
};
// export {}
