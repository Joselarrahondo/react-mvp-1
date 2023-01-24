import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Restaurants = (props) => {
    const [cuisine, setCuisine] = useState("");
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        searchRestaurant();
    }, [])

    const searchRestaurant = async () => {
        let { data } = await axios.get(`http://localhost:8000/restaurant/${cuisine}`)
        setRestaurantData(data)


    };

    const handleCuisineChange = (e) => {
        e.preventDefault();
        setCuisine(e.target.value);

    }



    const handleCuisineBtn = (e) => {
        e.preventDefault()

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