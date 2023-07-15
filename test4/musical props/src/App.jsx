
import Test from './Test.jsx'
import './App.css'

function App() {
  const names = ['Brown Guitar', 'Wooden Flute', 'Wooden Piano', 'Classic Tabla'];
  const price = ['$340.00', '$199.99', '$999', '$299.80'];
   return (
    <>
      <Test namesList={names} priceList={price}/>
    </>
  )
}

export default App
