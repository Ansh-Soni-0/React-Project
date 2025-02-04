import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'

//get api kley from env file
const API_KEY = import.meta.env.VITE_API_KEY;

function Newsapp() {
    // console.log(API_KEY)
    const buttonName = ["Sports","Politics","Entertainment","Health","Fitness"]

    const [search , setSearch] = useState("india");
    const [newsData , setNewsData] = useState(null);

    

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

        const jsonData = await response.json();

        // console.log(jsonData.articles)

        setNewsData(jsonData.articles);
    }



    const handleSearch = (event) => {               
        setSearch(event.target.value);
    }

    // const handleClick = (e) => {
    //     console.log(e.current.value)
    // }

    const userInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

  return (
    <div>
       <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Tranding</a>
            </ul>

            <div className="searchBar">
                <input
                value={search}
                type="text"
                placeholder='Search News'
                onChange={handleSearch}
                />
                <button
                onClick={getData}
                >Search</button>
            </div>
       </nav>

       <div>
        <p className='head'>Stay Update With trendyNews</p>
       </div>

       <div className='categoryBtn'>


        {/* good code  */}
        {
            buttonName.map((name , idx) => {
                return (
                    <button 
                    key={idx}
                    value={name.toLowerCase()}
                    onClick={userInput}
                    >{name}</button>
                )
            })
        }

        {/* bad code  */}
        {/* <button 
        onClick={userInput}
        value="sports"
        >Sports</button>
        <button 
        onClick={userInput}
        value="politics"
        >Politics</button>
        <button 
        onClick={userInput}
        value="entertainment"
        >Entertainment</button>
        <button 
        onClick={userInput}
        value="health"
        >Health</button>
        <button 
        onClick={userInput}
        value="fitness"
        >Fitness</button> */}
            
       </div>


       <div>
            {newsData ? <Card data={newsData}/>: null}
       </div>
    </div>
  )
}

export default Newsapp


// ada69300307040bba622ce5b0cd2f5c1
// news api website -> https://newsapi.org/