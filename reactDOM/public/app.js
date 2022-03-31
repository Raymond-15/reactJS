const root = document.querySelector("#root");

function saatKlik(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
  onClick: saatKlik.bind(this, "berhasil")
}, "Click saya"));
ReactDOM.render(element, root);