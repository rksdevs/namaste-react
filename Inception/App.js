const parent = React.createElement("div", {id: "parent", xyz: "abc "}, [React.createElement("div", {id: "child", xyz: "abc "}, "I'm child 1"), React.createElement("div", {id: "child", xyz: "abc"}, "I'm child 2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
root.render(parent);        