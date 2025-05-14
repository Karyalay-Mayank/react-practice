/********** Rendering single tags **********/
/**
 * <div id="root">
 *  <h1 id="head-elem">Hello React</h1>
 * </div>
 */

// const heading = React.createElement("h1", {id: 'head-elem'}, "Hello React"); // {} is used to pass attributes to element
// console.log("Heading", heading);
// const root  = ReactDOM.createRoot(document.getElementById('root'));
// console.log("Root", root);
// root.render(heading);

/********** Child tags **********/
/**
 * <div id="parent">
 * <div id="child">
 *  <h1 id="head-elem">Hello React</h1>
 * </div>
 * </div>
 */

//  const heading = React.createElement(
//    "div",
//    { id: "parent" },
//    React.createElement(
//      "div",
//      { id: "child" },
//      React.createElement("h1", { id: "head-elem" }, 'Hello React')
//    )
//  );

//  const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading);

/********** Multiple header tags **********/
/**
 * <div id="parent">
 * <div id="child">
 *  <h1 id="head-elem">Hello React</h1>
 *  <h2 id="head2-elem">Hello React Again</h2>
 * </div>
 * </div>
 */

//  const heading = React.createElement(
//    "div",
//    { id: "parent" },
//    React.createElement("div", { id: "child" }, [
//      React.createElement("h1", { id: "head-elem" }, "Hello React"),
//      React.createElement("h2", { id: "head2-elem" }, "Hello React Again"),
//    ])
//  );

//  const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading);

/********** Multiple child tags and headers **********/
/**
 * <div id="parent">
 * <div id="child">
 *  <h1 id="head-elem">Hello React Part 1</h1>
 *  <h2 id="head2-elem">Hello React2 Part 1</h2>
 * </div>
 * <div id="child2">
 *  <h1 id="head2-elem2">Hello React Part 2</h1>
 *  <h2 id="head2-elem2">Hello React2 Part 2</h2>
 * </div>
 * </div>
 */

/********** Using react packages from npm **********/
import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "part1" }, [
    React.createElement("h1", { key: "h1-part1" }, "Hello React Part 1"),
    React.createElement("h2", { key: "h2-part1" }, "Hello React2 Part 1"),
  ]),
  React.createElement("div", { id: "child2", key: "part2" }, [
    React.createElement("h1", { key: "h1-part2" }, "Hello React Part 2"),
    React.createElement("h2", { key: "h2-part2" }, "Hello React2 Part 2"),
  ]),
]);
console.log("Heading", heading);

const root = createRoot(document.getElementById("root"));

root.render(heading);
