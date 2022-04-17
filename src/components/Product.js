
import { Link} from 'react-router-dom'
import { FeaturedProduct } from './FeaturedProduct'
import { NewProduct } from './NewProduct'

export const Product = () => {
  return (
   
    <>
    <div>
<input type = 'search' placeholder="Search PRoducts"/>
</div>
<nav>
    <Link to='FeaturedProduct'>Featured</Link>
    <Link to='NewProduct'>New</Link>
</nav>

    </>
  )
}
