
//  <div id ="parent">


//     <div id ="child1">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h1 tag</h2>

//     </div>
//     <div id ="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h1 tag</h2>

//     </div>
// </div> 
// ReactElement(Object) = HTML(Browser Understands) // this React Element becomes an HTML that browser understands


// const parent = React.createElement(

//    "div",
//     { id: "parent" },
//     [

//         React.createElement(
//             "div",
//             { id: "child "},
//             [
//                 React.createElement("h1", {}, "I'm an h1 tag"),
//                 React.createElement("h2", {}, "I'm an h2 tag"),
//             ]
//         ),

//         React.createElement(
//             "div",
//             { id: "child2 "},
//             [
//                 React.createElement("h1", {}, "I'm an h1 tag"),
//                 React.createElement("h2", {}, "I'm an h2 tag"),
//             ]
//         )

//     ]
    
  
// )

        //  const heading = React.createElement("h1", {}, "Hello World from React"); // this React.createElement at end of day is just an object

        //  const root1 = ReactDOM.createRoot(document.getElementById("root"));

        //  root1.render(heading); // we are passing a React Element, a JS object to this render file. This Root.render function is to take this object, create h1
        //  tag which browser understands and put inside root element that you put over here.
        //  this heading is not an h1 tag yet 

//  console.log(parent);  // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React")
// i need to render my heading inside root, this
// div id. React needs to have a root where 
// it can do all the DOM stuff, all DOM manipulation

// this missing object is place where you give attribute to your tag.

// if my h1 tag needs to have id heading this is how i will do it.
// { id: "heading", xyz: "abc"}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// these three steps are putting heading inside our root

//  <div id ="parent">


//     <div id ="child1">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h1 tag</h2>

//     </div>
//     <div id ="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h1 tag</h2>

//     </div>
// </div> 



const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h1 tag")]), React.createElement("div", {id:"child2"}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h1 tag")])])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);