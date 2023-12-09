// import React from "react"; // this means we are getting react from our node modules
// import ReactDOM from "react-dom/client"; // this means we are getting react from our node modules

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// This is React Element. this is an object
// const jsxHeading = (
//     <h1 className="head" tabIndex ="5"> Namaste React using JSX</h1>
// );

// console.log(jsxHeading);

// const Title = () => (
  
//         <h1 className="head" tabIndex ="5"> Namaste React Functional Component</h1>


// );

// Component Composition
// const HeadingComponent = () => (
//     <div id="container">   
//     <Title />  
//     <h1 className="head" tabIndex ="5"> Namaste React Functional Component</h1>
//     </div>

// );
// React Component
// Class Based Component - OLD
// Functional Component - NEW
 
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// root.render(<HeadingComponent />);



// const header = React.createElement("div", {className: "title"}, 
// [React.createElement("h1",{},"I am H1 using React Element"), React.createElement("h2",{},"I am H2 using React Element"), React.createElement("h3",{},"I am H3 using React Element"),
// ]);

// const jsxHeading = (
//  <div className= "title">
//     <h1>I am H1 using JSX</h1>
//     <h2>I am H2 using JSX</h2>
//     <h3>I am H3 using JSX</h3>
     
// </div>
// );
{/* <div>
    <img src={}></img>

</div> */}

// console.log("jsxHeading", jsxHeading);

// const HeadingComponent = () =>
// {
//     return (
//     <div className= "title">
//         <h1>I am H1 using Functional Component</h1>
//         <h2>I am H2 using Functional Component</h2>
//         <h3>I am H3 using Functional Component</h3>

//     </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

import HeaderComponent from "./Header";

function App() {
  return (
    <div className="App">
     <HeaderComponent />
    </div>
  );
}

export default App;
