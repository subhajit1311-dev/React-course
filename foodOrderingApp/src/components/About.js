import User from "./User"
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(props)
  {
    super(props);
    //console.log("parent constructor")
    // this.state = {
    //   userInfo:{
    //     name:"Dummy"
    //   }
    // }
  }
  componentDidMount()
    {
       // console.log("parent component did mount")
        //api calls
    } 
    componentWillUnmount(){
        //console.log("component will unmount");
    }
  render(){
    //.log("parent rendered");
  return (<div>
    <h2>About class componenty</h2>
    <h3>This is namaste react webseries</h3>
    <User name={"subhajit (function)"}/>
    {/* <UserClass name={"subhajit"} location={"Kolkata"} contact={"@subhajit1311-dev"}/> */}
    {/* <UserClass name={"elon mask"} location={"bengalore"} contact={"@subhajit354455"}/> */}
</div>);

}

}

// const About = ()=>{
//   return (<div>
//         <h2>About</h2>
//         <h3>This is namaste react webseries</h3>
//         <User name={"subhajit (function)"}/>
//         <UserClass name={"subhajit(class)"} location={"Kolkata"} contact={"@subhajit78"}/>
//     </div>)
   
// }

/**
 * parent constructor
 * parent render
 *  -subhajit constructor
 *  -subhajit render
 * 
 *  -elon constructor
 *  -elon render
 *  -subhajit component did mount
 *  -elon componentdidmount
 * parent componentdidmount
 */
export default About;