import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🏆"
);

//JSX

const elem = <div>React Element</div>;

const title = (
  <h1 id="heading" className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🏆
  </h1>
);

// React Functional component
const Jsxheading2 = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🏆
  </h1>
);

const HeadingComponent = function () {
  return (
    <div>
      <h1>Namaste React Functional component</h1>
    </div>
  );
};

const number = 1000;

const HeadingComponent2 = () => (
  <div id="component">
    <h1>Namaste React Functional component</h1>
  </div>
);

const HeadingComponent3 = () => (
  <div>
    {title}
    <h1 id="container">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);
