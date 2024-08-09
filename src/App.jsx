import FirstPage from "./components/FirstPage"
import ImageGrid from "./components/ImageGrid"
import Navbar from "./components/Navbar"
import Safe from "./components/Safe"
import ScrollAnimation from "./components/ScrollAnimation"

function App() {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
      <ScrollAnimation/>
      <Safe/>
      <ImageGrid/>
    </div>
  )
}

export default App
