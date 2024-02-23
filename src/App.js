import React,{useState} from 'react'
import AddProduct from './Components/AddProduct'
import ProductList from './Components/ProductList'

const App = () => {
     const [products,setProducts] = useState([])
     const [totalPrice,setTotalPrice] = useState(0)

     const deleteProduct = (id,price)=>{
             localStorage.removeItem(id)
             const newProducts = products.filter((product)=> product.productId !== id)
             setTotalPrice((prevPrice)=> Number(prevPrice)-Number(price))
             setProducts(newProducts)
     }

  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center ">
       <h1 className="text-3xl font-serif bg-white h-fit  rounded-lg border border-black from-orange-600 mt-10">Seller Admin</h1>
       <div>
       <AddProduct setProducts={setProducts} setTotalPrice={setTotalPrice} />
       </div>
        <div className='w-full  mt-10 flex  flex-col items-center'>
        <h1 className="text-white font-serif font-bold text-3xl">Product List</h1>
        <ProductList products={products} deleteProduct={deleteProduct} />
        </div>
        <div className="text-white mt-10 text-3xl  font-bold ">
          <span className="font-serif">Total Price of the products $</span> <span>{totalPrice}</span>
        </div>
    </div>
  )
}

export default App
