
const parent  = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"},
     React.createElement("h1", {}, "Hello Vivek"))
)


// const  heading =  React.createElement("h1", {id:"heading"}, "Hello world from react with cdn");
// console.log(heading, "heading")
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading);

root.render(parent);



// ReactElement(object) => HTML (Browser understand)