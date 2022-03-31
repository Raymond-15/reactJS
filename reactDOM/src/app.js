const root = document.querySelector("#root");

function saatKlik(msg) {
  alert(msg);
}

const element = (
  <div>
    <button onClick={saatKlik.bind(this, "berhasil")}>Click saya</button>
  </div>
);
ReactDOM.render(element, root);
