import { useEffect, useState } from "react";
//import restaurantList from "../utils/mockdata.js"

import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
// function filterData(searchInput,res)
// {
//   const filterdata=res.filter((restaurant)=>{
//     restaurant.data.name.includes(searchInput);
//   });
//   return filterdata;
// }
const Body = () => {
//const searchTxt = "KFC";
//searchInput is a local state variable
const [listOfRestraunts,setListOfRestraunts] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const [searchText,setSearchText] = useState("");//returns a array = [variable name,function to update the variable]
 //const [searchClicked,setSearchClicked] = useState("false");

 //if you want to done something after render the component before the api call then we will use useEffect hook before the api call
useEffect(()=>
{
  //api call
  //load -> rendering dummy data -> api call -> render once again 
  //console.log("done");
  fetchData();
},[]);

const fetchData= async ()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5738622&lng=88.3178568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");//fetch return promise handle it via .then or via async await
/* https://corsproxy.io/? */
  const json = await data.json();
  console.log(json)
  //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }

 //console.log("body rendered");
 //conditional rendering
//  if(listOfRestraunts.length === 0){
//   return <Shimmer/>
//  }

const onlineStatus = useOnlineStatus();
if (onlineStatus === false)
  return (
    <h1>
      Looks like you're offline!! Please check your internet connection;
    </h1>
  );



// if (!listOfRestraunts) return null;
  return listOfRestraunts?.length === 0 ?(<Shimmer/>):(
    <>
        <div className="flex space-x-4 search-container m-1 p-4 bg-pink-50 my-5 rounded-md">
            <div >
              <input type="text" className="focus:bg-blue-100 p-2 m-2 hover:bg-slate-200 border-solid border-2 border-black" placeholder="search" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              </div>
              <div className="flex        justify-between space-x-6">
              <button className="p-1 m-2 text-white rounded-md bg-blue-600 hover:bg-slate-600" onClick={()=>{
               //filter the restaurant cards and update the UI
               // search
                const filteredRestaurant = listOfRestraunts.filter((res)=>{return (res.info.name.toLowerCase().includes(searchText.toLowerCase()))});
                setFilteredRestaurant(filteredRestaurant);
              }}>Search</button>
   
              <button className="justify-end text-white text-md bg-blue-600 hover:bg-slate-600 rounded-md m-2 p-2" onClick={()=>{
                // if(searchClicked ==="false")
                //  setSearchClicked("true");
                // else
                //  setSearchClicked("false");

                //need to filter the data
                const filteredList = listOfRestraunts.filter(
                  (res) =>{ return res.info.avgRating > 4.5}
                );
                //update the state -> restaurants
                console.log(filteredList)
                setFilteredRestaurant(filteredList);

              }}>Top rated restaurants</button>
        </div>
        </div>
        <div className="flex flex-wrap bg-yellow-300">
          {
            filteredRestaurant.map((restaurant) => {
              return (
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                      <RestaurantCard resData={restaurant} />
              </Link>
            )
            })
          }
        </div>
       
    </>
    )
  
}

export default Body;



//single responsibility principle - maintaining the code in  modular fashion
// -your code become more maintainable,reuseable,testable

