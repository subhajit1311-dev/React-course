import React from "react";
import ReactDOM from "react-dom/client"


// const heading1 = React.createElement("h1",{
//     id:"title",
//     key:"h1",
// },
// "Heading 1");


// const heading2 = React.createElement("h2",{
//     id:"title",
//     key:"h2",
// },
// "Heading 2");

// React.createElement is a object => html(dom)

// const container = React.createElement("div",{
//     id:"container"

// },[heading1,heading2]);
 
// console.log(heading1)



// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(container);

//bebel should be define which version of the browser we are working in now by the reference of the 
//browserList

//bebel is a javascript package

//polyfil javascript e notun kichu asle seta jodi browser er jana na thake tahole amader nijeder seta define korte hoy
// o seta previous version e convert hoye jay
 


//jsx -> javascript xml
//we want to write big html structure in js .it is html like syntax
//it is a react element
const heading2 = (
<h1 id="title" key="h2" className="pro">Namaste react</h1>
);
const Title =() => (
    <h1 id="title" key="h2" className="pro">Namaste bharat</h1>
    );

//functional component is a function that return jsx

const HeaderComponent = () =>
{
        return (
        <div>
            {heading2} 
            <Title />
            <h1>Namaste React functional component</h1>
            <h2>this is a h2 tag</h2>
        </div>
        );
}
    
const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(<HeaderComponent/>);

//jsx -> babel complier -> React.createElement -> object -> html(dom)

//advantages of jsx -readability,syntactical sugar

//babels comes with parcel

//React component
// -Functional component -NEW
// - class based component -old

//functional component
//it is a js function that returns a piece of reactElement or piece of jsx
//Name of component starts with the capital letter - it's not mandatory
//{ } you write any piece of js inside it inside reactComponent
//cross site scripting - hacker attack
//reactcomponent e return hoa jsx age santized hoy then execute hoy
//what is component composition?
//if there exits one component inside another component then it is called compostion component or composing components
