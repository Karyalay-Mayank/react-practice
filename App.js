import React from "react";
import ReactDOM from "react-dom/client";

// React Element (Just a JS object i.e createElement)
// const heading = React.createElement("h1", {}, "Namaste React")

// JSX - HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading" className="head" tabIndex="5">Namaste React JSX</h1>;
console.log("jsxHeading", jsxHeading);

const Title = () => (
  <h1 id="heading" className="head" tabIndex="5">Namaste React JSX2</h1>
)

const number = 10000;
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React functional component</h1>;
// }

// This is a Component Composition
const HeadingComponent1 = () => (
  <div className="container">
    <Title />
    <h2>{number}</h2>
    {jsxHeading}
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading); // Render heading element
root.render(<HeadingComponent1 />); // Render HeadingComponent1 Component