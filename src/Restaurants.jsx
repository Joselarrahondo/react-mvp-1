
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { render } from '@testing-library/react';

const Restaurants = (props) => {
    //////// Creating State to use for show all button ////////
    const [showAll, setShowAll] = useState(false)
    const [cuisine, setCuisine] = useState("")
 
// useEffect( () => {
//      console.log("reRender")   
// }, [reRender])
    
const searchRestaurant = async (e) => {
    e.preventDefault();
    let { data } = await axios.get(`http://localhost:8000/restaurant/${cuisine}`)
    
    let filterdata = data.filter(restaurant =>
        restaurant.foodtype === cuisine
    )
    props.setRestaurants(filterdata)

    if (cuisine === "") {
        alert("please provide foodtype")
    }
    else if(filterdata.length === 0){
        alert("foodtype not available")
    };
        setShowAll(!showAll)
        props.setReRender(!props.reRender)
};

    const handleCuisineChange = (e) => {
        // e.preventDefault();
        console.log(cuisine)
        setCuisine(e.target.value);

    }
    const handleCuisineBtn = () => {
        searchRestaurant(cuisine)
    }

    const showAllBtn = () => {
        setShowAll(!showAll);
    }

    return (
        <div className="results">
            <form onSubmit={searchRestaurant}>
                <input onChange={handleCuisineChange} value={cuisine} type="text" placeholder="search restaurants" />
                <input className='seachBtn' type="submit" value="submit" />
            </form>

            <button onClick={showAllBtn} >Show all</button>
            {showAll ? props.restaurants && props.restaurants.map((restaurant) => {
                return (

                    <div
                        key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.foodtype}</p>
                        <p>{restaurant.address}</p>
                    </div>

                )

            }) : null}

            {/* {props.restaurants && props.restaurants.map((restaurant) => {
                return (

                    <div
                        key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.foodtype}</p>
                        <p>{restaurant.address}</p>
                    </div>

                )

            })} */}
        </div>
    )
};

export default Restaurants