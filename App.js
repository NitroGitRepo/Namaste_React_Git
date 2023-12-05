

const heading  = React.createElement("h1", {
      id:"Heading",
      class:"Head",
}, " Welcome to React !!");
// console.log(heading);

const parent = React.createElement("div", {id:"parent"},
         React.createElement("div",{id:"child"},
          [React.createElement("h1", {id:"h1 tag"}, "I'am H1 Tag"),
          React.createElement("h2", {id:"h1 tag"}, "I'am H1 Tag")] 
          ) 
)
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
