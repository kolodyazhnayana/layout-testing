import './styles/app/App.css'
import productCardJSON from './data/productCard.json'
import ProductSlider from "./components/productSlider"

function App() {
  return (
    <div className="app">
      <ProductSlider items={productCardJSON} />
    </div>
  )
}

export default App
