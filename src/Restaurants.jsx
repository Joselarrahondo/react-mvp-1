
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Restaurants = (props) => {
    const [cuisine, setCuisine] = useState("");
    const [restaurantData, setRestaurantData] = useState([]);
useEffect(() => {
    searchRestaurant();
},[])
    const searchRestaurant = async () => {
        let { data } = await axios.get(`http://localhost:8000/restaurant/${cuisine}`)
        setRestaurantData(data)


    };
    ///////// updating sate of cuisine to user input ////////

    const handleCuisineChange = (e) => {
        e.preventDefault();
        setCuisine(e.target.value);

    }

    ////////// invokes searchRestaurant once submit button is clicked && changes showAll state to false /////

    const handleCuisineBtn = (e) => {
        e.preventDefault()
        
        searchRestaurant()

    }

    ////////// Shows all restaurants in database ///////

    const showAllBtn = () => {
       
        searchRestaurant()

    }


    return (
        <div className="results" >
            <div>
            <form onSubmit={handleCuisineBtn} >
                <input onChange={handleCuisineChange} value={cuisine} type="text" placeholder="search restaurants" />
                 <button className='searchBtn' type="submit">SUBMIT</button>
            </form>
            </div>
         

        


            {/** If showAll true map restaurants and display them */}
            
      

            {/** if restaurant data is not empty display queried restaurants  */}
        <div className='renderResults'>
            {restaurantData ? restaurantData.map((restaurantData) => {
                return (
                    <div
                    className="singleRestaurant"
                        key={restaurantData.id}>
                        <h2>{restaurantData.name}</h2>
                        <p>{restaurantData.foodtype}</p>
                        <p>{restaurantData.address}</p>
                    </div>
                )

            }) : null}
        </div>
        </div>
    )
};

export default Restaurants