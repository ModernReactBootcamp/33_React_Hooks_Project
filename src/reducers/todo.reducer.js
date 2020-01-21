import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};

export default reducer;

// {type: "ADD", task:"Walk the dog"}
// {type: 'REMOVE', id: 123123}
// {type: "TOGGLE", 'id:121234}
// {type: "EDIT", id: 1232131, task:'Walk the Cat}

// addTodo: newTodoText => {
//     setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
//   },
//   removeTodo: todoId => {
//     // filter out remover todo
//     const updatedTodos = todos.filter(todo => todo.id !== todoId);
//     // call setTodos with new todos array
//     setTodos(updatedTodos);
//   },
//   toggleTodo: todoId => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   },
//   editTodo: (todoId, newTask) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
//   }
