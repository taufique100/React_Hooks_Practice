import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummery from './Components/OrderSummery';
import NoMatch from './Components/NoMatch';
import Product from './Product';
import { FeatureProducts } from './Components/FeatureProduct';
import { FeatureNew } from './Components/FeatureNew';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='order-summery' element={ <OrderSummery/> } />
       {/*------- Nested route----- */}
        <Route path='product' element={<Product/>}>
          <Route index element={<FeatureProducts/>}/>
          <Route path='feature' element={<FeatureProducts/>}/>
          <Route path='new' element={<FeatureNew/>}/>
        </Route>
        <Route path='users' element={<Users/>}> 
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path="*" element={ <NoMatch/> } />
      </Routes>
    </>
  );
}

export default App;
