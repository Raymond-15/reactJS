const root = document.querySelector("#root");

function App() {
  const [aktivitas, setAktivitas] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      aktivitas: aktivitas
    }]);
    setAktivitas("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo list sederhana"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Masukkan aktivitas",
    value: aktivitas,
    onChange: function (event) {
      setAktivitas(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.aktivitas, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);