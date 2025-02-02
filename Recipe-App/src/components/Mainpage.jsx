import React, { useState } from 'react'
import Mealcards from './Mealcards';

function Mainpage() {

    const [data , setData] = useState(null);
    const [search , setSearch] = useState("");
    const [message , setMessage] = useState("");

    const myFun = async () => {
        if (search === "") {
            setMessage("Please Enter Something");
            setData(null); // Clear previous results
        } else {
            setMessage("");
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
    
            if (!jsonData.meals) {
                setMessage("Meal not found.");
                setData(null); // Ensure no previous meal data is displayed
            } else {
                setMessage(""); // Clear message if meals are found
                setData(jsonData.meals);
            }
        }
    };
    
    // console.log(data)

    const handleInput = (e) => {
        setSearch(e.target.value)
    }



  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
       <div className="container">

            <div className="searchBar">

                <input 
                type="text"
                placeholder='Enter Dishes'
                onChange={handleInput}
                />

                <button
                onClick={myFun}
                >Search</button>

            </div>

            <h3>{message}</h3>

            <div className='meal-container'>
                <Mealcards detail={data}/>
            </div>
       </div>
    </>
  )
}

export default Mainpage


// meal db api website
// api
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata 