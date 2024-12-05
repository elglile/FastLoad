import { Route, Routes } from "react-router-dom"
import Sidebar from "./Composents/Pages/Sidebar"
import Sections from "./Composents/Pages/Sections"
// import "./Composents/Css/Main"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar/>
            <Sections/>
          </>
        }
        />
          
      </Routes>
    </div>
  )
}

export default App
