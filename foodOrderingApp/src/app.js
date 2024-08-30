import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
//import {Header} from "./components/Header.js"
import Body from "./components/body.js"
//import Footer from "./components/footer.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery.js"
/* const RestaurantCard = () => {
    return(
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(",")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    )
}; */
//nokey <<<<<<<< index key (use only if no key available)<< unique key (best practice)
// Restaurant card component: Image, name, cuisine
// Footer component for footer section

const Grocery=lazy(()=> import("./components/Grocery.js"))


const AppLayout = () =>{
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/About",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      },
    ],
    errorElement:<Error />
  },
 
]);//array of object


// const jsx = (
//     <>
//         <h1>Jsx</h1>
//         <h2>Jsx2</h2>
//     </>
// )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

// const styleObj={
//     backgroundColor:"red",
// }
//inline styling in react
// const jsx = (
//     <div style={styleObj}>
//         <h1>Jsx</h1>
//         <h2>Jsx2</h2>
//     </div>
// )

// const jsx = (
   
//     <div  className="jsx"
//     style={{
//         backgroundColor:"yellow",
//     }}
//     >
//         <h1>Jsx</h1>
//         <h2>Jsx2</h2>
//     </div>
// )

//root.render(jsx);


// for any piece of JSX component have only on parent element
 //React.Fragment is a component which is export by the React
 //jsx can only have only one parent 
 //React.Fragment is working principle like empty tag































































 { //this is a comment
    /**
     * 
     * IS jsx mandatory? no
     * IS ES6 mandatory?no
     * IS typescript is mandatory? no
     * 
     * 
     */

  }