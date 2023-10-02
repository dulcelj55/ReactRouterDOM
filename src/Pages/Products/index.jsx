import {useState, useEffect} from 'react'

const Products = () => {
    
    const[products, setProducts]= useState(["milk","bread","eggs","cheese"])
    const[name,setName]= useState("")
    const[description, setDescription]= useState("")
    const[price,setPrice]= useState("")
    const[newName,setNewName]= useState("")
    const[newDescription, setNewDescription]= useState("")
    const[newPrice,setNewPrice]= useState("")
 
 const addProduct =(e) => {
    e.preventDefault()
    setNewName(name)
    setNewDescription(description)
    setNewPrice(price)


    class Product{
        constructor(name, description, price) {
        this.name= name;
        this.description= description; 
        this.price= price;
       }}
       const product= new Product(name,description,price)
        return product
   
products.push(product)

useEffect(()=>{
console.log("A new product has been added!", {products})
},[])

setName('')
setDescription("")
setPrice("")
 }
    return (
    <>
    <h1>Products</h1>

    <input value={name} placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
    <input value={description} placeholder="Description"onChange={(e)=> setDescription(e.target.value)}/>
    <input value={price} placeholder="Price" onChange={(e)=> setPrice(e.target.value)}/>
    <button onClick={addProduct}>Add Product</button>
    </>
  )
}

export default Products