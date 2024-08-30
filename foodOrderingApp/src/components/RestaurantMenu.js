
import Shimmer from "./Shimmer.js";
import {useParams} from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js"

//this component is used for displaying the data of restraunt menu
const RestaurantMenu = () => {
    
    // console.log("res entry")
    // const [resInfo,setResInfo]=useState(null);
    // console.log("restro card rendered")
    const {resId} = useParams();
    const resInfo = useRestrauntMenu(resId);

    // useEffect(()=>{
    //     console.log("useeffect called")
    //     fetchMenu();
    // },[]);

    // const fetchMenu= async ()=>{
    //     const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER")
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json.data);
    //     console.log(resInfo)
    // }

    if(resInfo === null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
  return (
    <div className="menu" >
     
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((item)=>{
                    return (
                        <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                      )
                })
            }
          
        </ul>
       
      
    </div>
  );
}

export default RestaurantMenu