const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);

  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  });

  return (
    <>
      <h1 id="judul"> HELLO WORLD !!! </h1>
      <button
        onClick={function () {
          setDiklik(true);
        }}
      >
        klik aku
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
