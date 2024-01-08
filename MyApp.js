function Header({
  title,
  children
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
  }, " Header: ", title, ",", /*#__PURE__*/React.createElement("div", null, "Children: ", children));
}
const employmentEnum = {
  FullTime: 'full-time',
  PartTime: 'part-time'
};
function MyApp() {
  console.log("React", React);
  const formData = {
    firstName: "Vladyslav",
    employment: employmentEnum.PartTime,
    comments: "long comments",
    isFriendly: true
  };

  // const [formData, setForm] = React.useState({
  //     firstName: "Vladyslav",
  //     employment: employmentEnum.PartTime,
  //     comments: "long comments",
  //     isFriendly: true
  // });

  handlerChanges = $event => {
    const {
      name,
      value,
      type,
      checked
    } = $event.target;
    console.log("name: ", name);
    console.log("value: ", value);
    console.log("type: ", type);
    console.log("checked: ", checked);

    // setForm(prevFromData => ({
    //     ...prevFromData,
    //     [name]: type === "checkbox" ? checked : value
    // }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: 'Hello React Title'
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-span"
  }, "Hello from patent")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    id: "firstName_id",
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    onChange: handlerChanges
  }), /*#__PURE__*/React.createElement("textarea", {
    id: "comments_id",
    name: "comments",
    placeholder: "Comments",
    value: formData.comments,
    onChange: handlerChanges
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "isFriendly_id"
  }, "Is Friendly"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    id: "isFriendly_id",
    type: "checkbox",
    name: "isFriendly",
    checked: formData.isFriendly,
    onChange: handlerChanges
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "employment_id_part-time"
  }, "Part Time"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "employment",
    value: employmentEnum.PartTime,
    id: "employment_id_part-time",
    checked: formData.employment === employmentEnum.PartTime,
    onChange: handlerChanges
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "employment_id_full-time"
  }, "Full Time"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "employment",
    value: employmentEnum.FullTime,
    id: "employment_id_full-time",
    checked: formData.employment === employmentEnum.FullTime,
    onChange: handlerChanges
  }), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      console.log("Data from formData.");
      console.log(formData);
    }
  }, " Submit ")), /*#__PURE__*/React.createElement("div", null, "Welcome to React Pre Process code page"));
}

