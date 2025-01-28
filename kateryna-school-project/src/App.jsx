import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { BookList } from "./pages/BookList"
import { Books } from "./pages/Books"

function App() {
  return (
    <>
   <nav>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/books">Books</Link></li>
      </ul>

    </nav>
 

    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/books" element ={<Books/>}/>
    </Routes>

   </>
    
  )
  
}



export default App;
