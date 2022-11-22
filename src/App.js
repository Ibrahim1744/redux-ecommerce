import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    < >
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/redux-ecommerce' element={<Homepage/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
