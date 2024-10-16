import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Insert from "./pages/Insert"
import Display from "./pages/Display"

function App() {


  return (
    <>
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout></Layout>}>
              <Route index element={<Home></Home>}></Route>
              <Route path="home" element={<Home></Home>}></Route>
              <Route path="about" element={<About></About>}></Route>
              <Route path="insert" element={<Insert></Insert>}></Route>
              <Route path="display" element={<Display></Display>}></Route>
             </Route>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
