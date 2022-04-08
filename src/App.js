import './styles/app/App.css'
import productCardJSON from './data/productCard.json'
import ProductSlider from "./components/productSlider"
import ProductCard from "./components/productCard";

function App() {
  return (
    <div className="app">
      <ProductSlider items={productCardJSON} />
      {/*  <div className='app__wrapper'>*/}
      {/*      {*/}
      {/*          productCardJSON.map(item => <ProductCard item={item} />)*/}
      {/*      }*/}
      {/*  </div>*/}

    </div>
  )
}

export default App
