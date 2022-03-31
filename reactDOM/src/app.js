const root = document.querySelector("#root");

function saatKlik() {
  alert("ok");
}

const element = (
  <div>
    <button onClick={saatKlik}>Click saya</button>
  </div>
);
ReactDOM.render(element, root);
