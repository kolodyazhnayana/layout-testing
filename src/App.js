import './styles/app/App.css'
import ProductCard from "./components/productCard"
import productCardJSON from './data/productCard.json'

function App() {
  return (
    <div className="app">
        {
          productCardJSON.map(item => <ProductCard item={item} key={item.id} />)
        }
    </div>
  )
}

export default App
