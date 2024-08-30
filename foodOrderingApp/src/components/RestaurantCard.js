import {IMG_CDN_URL} from "../utils/Constants.js";
//The "../" means that the file is located one directory above the current file where this 
//import statement is being used.
const RestaurantCard = (props) => {
    const {resData}=props;


   const {cloudinaryImageId,name,cuisines,costForTwo,sla,avgRating} = resData?.info;
    return (
      <div className="w-[220px] p-2 m-2 shadow-lg bg-slate-300">
        <img classname="border-solid border-2 border-black" src={IMG_CDN_URL + cloudinaryImageId }/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h3>{sla?.slaString}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
export default RestaurantCard;