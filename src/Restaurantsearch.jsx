// import React from 'react'
// import axios from 'axios';

// export const Restaurantsearch = (props) => {

//     const searchRestaurant = async (e) => {
//         console.log("hellow", e)
//         e.preventDefault();
//         let { data } = await axios.get(`http://localhost:8000/restaurant/${props.cuisine}`)
        
//         let filterdata = data.filter(restaurant =>
//             restaurant.foodtype === props.cuisine
//         )
//         props.setRestaurants(filterdata)
    
//         if (props.cuisine === "") {
//             alert("please provide foodtype")
//         }
//         else if(filterdata.length === 0){
//             alert("foodtype not available")
//         };
//             props.setShowAll(!props.showAll)
//             props.setReRender(!props.reRender)
//     };
    
       


//   return (
//     <form> 
//       {searchRestaurant}
//     </form>
//   )
// }
// export default Restaurantsearch