import {useState} from 'react'

const Products = () => {
    
    const[products, setProducts]= useState(["milk","bread","eggs","cheese"])
    const[name,setName]= useState()
    const[description, setDescription]= useState()
    const[price,setPrice]= useState()
 
 
 
    return (
    <>
    <h1>Products</h1>

    <input value={name} onChange={()=> setName(e.target.value)}></input>
    <input value={description} onChange={()=> setDescription(e.target.value)}></input>
    <input value={price} onChange={()=> setPrice(e.target.value)}></input>
    <button onClick={}>Submit</button>
    </>
  )
}

export default Products