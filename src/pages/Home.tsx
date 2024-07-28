import React from 'react'
import { Iproduct } from '../interface/Iproduct'
import Instance from '../api'
import { Link } from 'react-router-dom'

type Props = {
    Products:Iproduct[]
    setProducts: React.Dispatch<React.SetStateAction<Iproduct[]>>;
}

const Home = ({Products,setProducts}:Props) => {
    console.log(Products)
    
   function OnDelete(id?:number|string) {

     if (window.confirm('bạn có chắc xóa !')) {
       (async ()=>{
           await Instance.delete(`/products/${id}`)
           setProducts(Products.filter(data=>data.id!==id))
        })()
     }
    
   }
  return (
    
    <div style={{margin:50}}>
       <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Des</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.Des}</td>
            <td><button onClick={()=>{OnDelete(product.id)}}>Xóa</button></td>
            <td><button> <Link to={`/edit/${product.id}`}>Sửa</Link></button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Home