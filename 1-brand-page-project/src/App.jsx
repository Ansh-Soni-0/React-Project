// import React from 'react'
// import './App.css'
// const App = () => {
//   return (
//     <div>
//         <nav>

//           <div className='logo'>
//             <img src="https://nikecompanyblog.wordpress.com/wp-content/uploads/2015/05/nike1.jpg" alt="logo" />
//           </div>

//           <ul>
//             <li href="#">Home</li>
//             <li href="#">Location</li>
//             <li href="#">About</li>
//             <li href="#">Contact</li>
//           </ul>

//           <button>Login</button>

//         </nav>

//         <div className="main-content">

//           <div className="left-section">
//               <div className="title">
//                     YOUR FEET DESERVE THE BEST
//               </div>
//               <p className="description">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus inventore ratione beatae saepe delectus voluptatum dolores veniam molestias vitae?
//               </p>
//               <div className='btn'>
//                   <button className='Shop-btn'>Shop Now</button>
//                   <button className='Category-btn'>Category</button>
//               </div>

//               <p className='text'>Lorem, ipsum dolor.</p>
//           </div>

//           <div className="right-section">
//               <img src="https://media.istockphoto.com/id/1276624783/photo/stylish-and-cool-boot.jpg?s=612x612&w=0&k=20&c=8ThAlZhGUSxEAu4XNuFp93dEQiHbolngazxwsr__bMs=" alt="shoose" />
//           </div>

//         </div>



//     </div>
//   )
// }

// export default App


// import React from 'react'


import "./App.css"
import Navigation from "./components/Navigation"
import MainPage from './components/MainPage'


function App() {
  return (
    <div>
      <Navigation />
      <MainPage />
    </div>
  )
}

export default App
