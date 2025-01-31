import { useRef, useState ,useEffect} from 'react'
import './App.css'
import Button from './components/Button/Button';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGE_PER_PAGE = 20;

function App() {

  const searchInput = useRef(null);

  console.log(import.meta.env.VITE_API_KEY)

  // ${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGE_PER_PAGE}


  useEffect(() => {
    const fetchData = async () => {
    
        try {
          const response = await fetch(` ${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGE_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY} `);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

        console.log(data)
        } catch (error) {
          console.log(error)
        }
        

    };

    fetchData();
  }, []); 



  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(searchInput.current.value);
  }

  const handleSelection = (selection) => {
    searchInput.current.value = selection
  }

  
  return (
    <>
      <div className="container">
        <main>
            <h1 className="title">
              Image Search
            </h1>

            <div className="search-section">

              <form action="" 
              onSubmit={handleSubmit}
              >
                  <input
                  type="text"
                  placeholder='type something. . .'
                  className='search-input'
                  ref={searchInput}
                  />
              </form>

            </div>

            <div className="btns">
                  <Button 
                  text="Nature" 
                  onClick={() => handleSelection('Nature')}/>

                  <Button 
                  text="Birds" 
                  onClick={() => handleSelection('Birds')}/>

                  <Button 
                  text="Cats" 
                  onClick={() => handleSelection('Cats')}/>

                  <Button 
                  text="Shoes" 
                  onClick={() => handleSelection('Shoes')}/>
            </div>
        </main>
      </div>
    </>
  )
}

export default App
