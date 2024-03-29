import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { Start, Loading } from "./components"

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
