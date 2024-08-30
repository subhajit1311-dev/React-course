import { useEffect,useState } from "react";
import {MENU_API} from "../utils/Constants.js"

//use for fetching the data
const useRestrauntMenu = (resId) => {
  const [resInfo,setResInfo]= useState(null);
    //fetch data
     useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
      const data = await fetch(MENU_API+resId);
      const json = await data.json();
      setResInfo(json.data);
    }
    return resInfo;
}

export default useRestrauntMenu;