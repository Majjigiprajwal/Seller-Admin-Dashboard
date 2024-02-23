import React,{useState} from 'react'

const AddProduct = ({setProducts,setTotalPrice}) => {

    const [product,setProduct] = useState({
        productId :'',
        productName:'',
        productPrice:''
    })

    const addProduct = (e)=>{
           e.preventDefault()
           localStorage.setItem(product.productId,JSON.stringify(product))
           setTotalPrice((prevTotal)=> Number(prevTotal)+ Number(product.productPrice))
           setProducts((prevProducts)=>[...prevProducts,product])
           setProduct({
            productId :'',
            productName:'',
            productPrice:''
            })
    }

    const handleOnChange = (e)=>{
         setProduct({...product,[e.target.name] : e.target.value})
    }
  return (
    <div className="bg-white mt-10 p-5 rounded-lg">
        <form onSubmit={addProduct} className="flex items-center">
            <div className="flex flex-col">
            <label htmlFor='productId' className="m-2 font-serif font-medium text-2xl">Product ID</label>
            <input type="text"  name='productId' value={product.productId} onChange={(e)=>{handleOnChange(e)}}
            className="border-2 rounded-lg border-black text-xl p-2 m-2 font-sans font-medium"></input> 
            </div>
            <div className="flex flex-col">
            <label htmlFor='productPrice'  className="m-2 font-serif font-medium text-2xl">Product Price</label>
            <input type="number"  name="productPrice" value={product.productPrice} onChange={(e)=>{handleOnChange(e)}}
            className="border-2  rounded-lg border-black text-xl p-2 m-2 font-sans font-medium"></input>
            </div>
            <div className="flex flex-col">
            <label htmlFor='productName'  className="m-2 font-serif font-medium text-2xl">Product Name</label>
            <input type="text"  name="productName" value={product.productName}  onChange={(e)=>{handleOnChange(e)}}
            className="border-2  rounded-lg border-black text-xl p-2 m-2 font-serif font-medium"></input>  
            </div>
            <button type="submit" className="bg-black text-white font-serif p-3 m-2 mt-12 text-xl items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black">Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct
