import { useState,useEffect } from "react"

const User = ({name}) => {
  const [count,setCount] = useState(0); 
  const [count2] = useState(1); 

  useEffect(()=>{
   const timer =  setInterval(()=>{
      console.log("namaste react op");
    },1000);

    return (()=>{
      clearInterval(timer)
      console.log("useEffect return");
  })
  },[]);
  console.log("render")
  // async function getUserInfo()
  // {

  // }
  return (
    
    <div className="user-card">
        <h1>count : {count}</h1>
        <h1>count2 :{count2}</h1>
        <h2>Name:{name}</h2>
        <h3>
            Location:howrah
        </h3>
        <h4>Contact:@subhajit2003</h4>
    </div>
  )
}

export default User