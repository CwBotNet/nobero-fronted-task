import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MensCollection from './pages/Collection/Mens-Collection'
import Product from './components/product'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={
            <>
              <div className='text-5xl font-medium capitalize font-sans flex justify-center items-center h-[90vh]'>
                coming soon......
              </div>
            </>
          } />
          <Route path='/collection/men-collection' element={<MensCollection />} />
          <Route path='/collection/product/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
