import { BrowserRouter, Routers, Route, Link } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {
  
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/HomePage"  element={<HomePage />} />
      </Routers>
    </BrowserRouter>
  )
}

export default App
