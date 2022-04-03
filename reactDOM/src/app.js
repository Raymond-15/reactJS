const root = document.querySelector("#root");

function App() {
  const [aktivitas, setAktivitas] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateId(),
        aktivitas: aktivitas,
      },
    ]);

    setAktivitas("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
  }

  return (
    <>
      <h1>Todo list sederhana</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Masukkan aktivitas"
          value={aktivitas}
          onChange={function (event) {
            setAktivitas(event.target.value);
          }}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              {todo.aktivitas}
              <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
