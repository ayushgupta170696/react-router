
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Product } from './components/Product';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';

function App() {
  return (
  <>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='OrderSummary' element={<OrderSummary />}/>
      <Route path='Product' element={< Product/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='users/:userId' element={<UserDetails/>}/>
      <Route path='users/2' element={<UserDetails/>}/>
      <Route path='users/admin' element={<Admin/>}/>
    </Routes>
    </>
  )
}

export default App;
