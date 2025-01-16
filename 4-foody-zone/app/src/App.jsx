import { useEffect, useState } from "react";
import styled from "styled-components"
import Cards from "./components/searchResult/Cards";

export const BASE_URL = "http://localhost:9000";


function App() {


  const [filteredData , setFilteredData] = useState(null);
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState('all')


  const filterBtns = [
      {
        name:"all",
        type:"all",
      },
      {
        name:"Breakfast",
        type:"Breakfast",
      },
      {
        name:"Lunch",
        type:"Lunch",
      },
      {
        name:"Dinner",
        type:"Dinner",
      }
      // 
      // ,
      // {
      //   name:"snacks",
      //   type:"Breakfast",
      // }

  ]

  const filterFood = (type) => {
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));

    setFilteredData(filter);
    setSelectedBtn(type);
  }



  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data")
      }
      
    }

    fetchFoodData()
  } , []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    // console.log(searchValue)

    if(searchValue === "") setFilteredData(null);

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter)
  }


  if(error) return <div>{error}</div>
  if(loading) return <div>loading.....</div>


  return (

    <>

      <Container>

          <TopContainer>
            <div className="logo">
              <img src="/logo.png" alt="logo" />
            </div>

            <div className="search">
              <input
              onChange={searchFood}
              type="text" placeholder="Search Food...."/>
            </div>

          </TopContainer>

          <FilterContainer>

            {
              filterBtns.map((value) => (
                <Button 
                isSelected={selectedBtn === value.type}
                key={value.name}
                onClick={() => filterFood(value.type)}>{value.name}</Button>
              ))
            }

            {/* <Button onClick={() => filterFood("all")}>All</Button>
            <Button onClick={() => filterFood("Breakfast")}>Breakfast</Button>
            <Button onClick={() => filterFood("Lunch")}>Lunch</Button>
            <Button onClick={() => filterFood("Dinner")}>Dinner</Button> */}
          </FilterContainer>

      </Container>


      <Cards data={filteredData}/>
      
      
    </>
  )
}

export default App


export const Container = styled.div`
  
  max-width: 1200px;
  margin: 0 auto;

`;

const TopContainer = styled.section`

  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;

      &::placeholder{
        color: #bfbfbf;
      }
    }
  }

  @media (0 < width < 600px) {
      flex-direction: column;
  }

`;

const FilterContainer = styled.section`

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  padding-bottom: 40px;

`;

export const Button = styled.button`
  
  /* background: #ff4343; */


  /* background: ${({isSelected}) => (isSelected ? "#880101" : "#ff4343")}; */

  background: ${({isSelected}) => (isSelected ? "#af0101" : "#ff4343")};

  outline: 1px solid ${({isSelected}) => (isSelected ? "#ffa0a0" : "#ff4343")};


  border-radius: 5px;
  color: #fff;
  padding: 6px 12px;
  cursor: pointer;
  border: none;

  &:hover{
    background-color: #880101;
  }
  

`;


