 import { useState,useEffect } from "react";
 import {Link} from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus.js";
 const Title = () => (
    //<h1 id="title" key="h2">Food villa</h1> 
    <a href="/">
    <img className="h-28 p-2" alt="logo" src="https://dypdvfcjkqkg2.cloudfront.net/large/1396634-1884.png"></img>
    </a>
    );
 const Header = () =>
        {
            const [btnNameReact,setBtnNameReact]=useState("login");
            const onlineStatus = useOnlineStatus();
            useEffect(()=>{
                //console.log("useEffect called")
            },[btnNameReact]);
            return (
                <div className="flex justify-between bg-pink-200 shadow-lg m-1 sm:bg-blue-50  md:bg-yellow-100">
                    <Title />
                    <div className="nav-items ">
                        <ul className="flex py-10">
                            <li className="px-2">
                                Online Status:{onlineStatus?"✅":"❌"}
                            </li>
                            <li  className="px-2"><Link to="/">Home</Link></li>
                            <li  className="px-2">
                            <Link to="/About">About Us</Link>
                            </li>
                            <li  className="px-2">
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                            <li className="px-2">
                                <Link to="/grocery">Grocery</Link>
                            </li>
                            <li  className="px-2">Cart</li>
                            <button className="login" onClick={()=>{
                                btnNameReact  === "login" ?setBtnNameReact("logout"):setBtnNameReact("login");
                            }}>{btnNameReact}</button>
                        </ul>
                    </div>
                </div>
            );
        }

export default  Header;