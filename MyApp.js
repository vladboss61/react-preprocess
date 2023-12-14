function Header({
  title
}) {
  const clickHandler = e => {
    console.log('click me!');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-header",
    onClick: clickHandler
  }, " Header: ", title, " ");
}
function MyApp() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: 'Hello React Title'
  }), /*#__PURE__*/React.createElement("div", null, "Welcome to React Pre Process code page"));
}

