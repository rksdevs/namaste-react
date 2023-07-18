import React from "react";
import ReactDOM from "react-dom/client";

// chapter -3 starts//

    //creating a react element
    const Heading = () => (<h1 id="jsxHeading">Namaste JSX</h1>);
    const paragraph = <p>This is a paragraph</p>
    const number = 100; 


    // React Functional Components
    const HeadingComponent = () => {
        return (<div id="container">

                {/* Inserting a react component */}
                <Heading />

                {/* Inserting a react element  */}
                {paragraph}

                {/* performing JS evaluation or JS codes inside JSX */}
                {number * 20}
                {Heading ()}

                {/* Regular JSX code */}
                <h1>Namaste React Functional component</h1>
            </div>)
    }

    // const HeadingComponent2 = () => (<div id="container">
    //             <Heading />
    //             <hi>Namaste React Functional component 2</hi>
    //         </div>);


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);


//chapter -3 ends//


// chapter -1 - starts//
// const parent = React.createElement("div", {id: "parent", xyz: "abc "}, [React.createElement("div", {id: "child", xyz: "abc "}, "I'm child 1"), React.createElement("div", {id: "child", xyz: "abc"}, "I'm child 2")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // console.log(heading);
// root.render(parent);      
// chapter -1 - ends//  