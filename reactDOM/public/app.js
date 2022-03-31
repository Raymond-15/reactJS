const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, " HELLO WORLD !!! "), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "klik aku"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);