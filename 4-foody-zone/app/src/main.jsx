import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// for use global css import this 
import { createGlobalStyle } from 'styled-components'

//and then use like this to reflect whole file
const GlobalStyle = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #353434;
    color: white;
    min-height: 100vh;
    font-family: "Poppins", serif;
  }


`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //and then import that global styled component which we made  */}
    <GlobalStyle />
    <App />
  </StrictMode>,
)
