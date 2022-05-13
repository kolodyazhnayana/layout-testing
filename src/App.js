import './styles/app/App.css'
import ProductBlock from "./components/blocks/productBlock/index"
import productsInfoJSON from './data/productsInfo.json'

function App() {
  return (
    <div className="app">
        {
            productsInfoJSON.map(item => (
                <ProductBlock
                    key={item.id}
                    tabs={item.tabs}
                    product={item.products}
                    heading={item.heading}
                />
            ))
        }
    </div>
  )
}

export default App
