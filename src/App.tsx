
// import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header'
import Body from './Layouts/Body'
import Footer from './Layouts/Footer'
// import Home from './pages/Home'
// import AddProduct from './pages/AddProduct'
// import EditProduct from './pages/EditProduct'
// import Register from './pages/UseForm'
// import { useEffect, useState } from 'react'
// import { Iproduct } from './interface/Iproduct'
// import Instance from './api'

function App() {
  //  const [Products,setProducts] = useState<Iproduct[]>([])
  //  useEffect(()=>{
  //   (async ()=>{
  //     const {data} =await Instance.get('/products')
  //     setProducts(data)
  //   })()
  //  },[])
  return (
    < >
   
     {/* <Routes>
       <Route index element={<Home Products={Products} setProducts={setProducts}/>}/>
      <Route path='/add' element={<AddProduct   setProducts={setProducts} />}/>
      <Route path='/edit/:id' element={<EditProduct  Products={Products} setProducts={setProducts} />}/>
       <Route path='/login' element={<Register isLogin/>}/>
       <Route path='/register' element={<Register/>}/>
     </Routes> */}
		<Header />
		<Body/>
		<Footer/>
		
		
    
    </>
  )
}


export default App
