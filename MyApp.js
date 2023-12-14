function Header({
  title
}) {
  console.log("Header is rendering.");
  const [classHeader, setClassHeader] = React.useState("app-header-aqua");
  React.useEffect(() => {
    console.log('useEffect hook');
  }, []);
  const clickHandler = e => {
    console.log('click me!, Change to Red Header');
    setClassHeader("app-header-red");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classHeader,
    onClick: clickHandler
  }, " Header: ", title, " ");
}
function MyApp() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: 'Hello React Title'
  }), /*#__PURE__*/React.createElement("div", null, "Welcome to React Pre Process code page"));
}

