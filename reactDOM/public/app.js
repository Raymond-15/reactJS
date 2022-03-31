const root = document.querySelector("#root");

function saatKlik() {
  alert("ok");
}

const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
  onClick: saatKlik
}, "Click saya"));
ReactDOM.render(element, root);