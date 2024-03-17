import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
