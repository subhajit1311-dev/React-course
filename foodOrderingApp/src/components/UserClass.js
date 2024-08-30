import React from "react";
class UserClass extends React.Component{
    constructor(props) //class load and constructor is called
    {
        super(props);//this is unitialized if before use "this" if  we can't use super keyword
       // console.log(props)
       this.state ={
       // count:0,
        //count2:2,
        userInfo:{
            name:"Dummy",
            location:"Default",
        }
       };
       console.log(this.props.name+"child constructor")
    }
    
    async componentDidMount()
    {
       console.log(this.props.name+"child component did mount")

       const data = await fetch("https://api.github.com/users/subhajit1311-dev");
       const json = await data.json();
       console.log(json)

       this.setState({
        userInfo:json,
       })
    } 
    componentDidUpdate()
    {
        console.log("component did update")
    }
    
    render()
    {
        const {name,location,avatar_url} =this.state.userInfo
        console.log(this.props.name+"child rendered")

        return (<div className="user-card">
            
            {/* <h1>count :{this.state.count}</h1> */}
            {/* <h2>count2: {this.state.count2}</h2> */}
            {/* <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2 + 1,
                });
                
            }}>Count increase</button> */}
            <img src={avatar_url}/>
            <h2>name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@subhajit1311-dev</h4>
        </div>)
    }
}
export default UserClass
/**
 * 
 * ---Mounting---
 * constructor(dummy)
 * Render(Dummy)
 *      <html(dummy)>
 * component did mount
 *      <API call>
 *      <this.setState> -state variable is update
 * ---UPDATE---
 *      render (api data)
 *      <html new api data>
 * component did update
 * 
 * 
 * 
 */