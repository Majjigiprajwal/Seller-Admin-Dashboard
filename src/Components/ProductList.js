import React from 'react'


const ProductList = ({products,deleteProduct}) => {
  return (
       <>
    {
          products?.map((product,index)=>{
            return   <div className="bg-white flex w-2/5  rounded-lg p-1 mt-4 items-center">
            <p className=" text-black text-3xl m-2 ">{index+1}.</p>
            <p className="text-black font-serif text-2xl m-2 w-4/12  ">{product.productName}</p>
            <p className="text-black font-sans text-2xl m-2 w-4/12 text-right">${product.productPrice}</p>
            <button className=" w-fit p-2 ml-5 bg-black text-white font-serif text-xl rounded-lg hover:bg-red-600 hover:text-black  " onClick={()=>{deleteProduct(product.productId,product.productPrice)}}>Delete</button>
           </div>
        })
    }
     </>
  )
}

export default ProductList
