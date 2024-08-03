import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Iproduct } from '../interface/Iproduct'
import Instance from '../api'



const Schema = Joi.object({
  name:Joi.string().required().min(3).messages({
    'string.required':'ten sản phẩm là bắt buộc',
    'string.min':'ten sản phẩm phải dài hơn 3 Ký tự',
  }),
  price: Joi.number().required().min(0).messages({
    'number.require':'giá sản phẩm là bắt buộc',
    'number.min':'giá sản phẩm phải lớn hơn 0',
  }),
  image: Joi.string().required().messages({
    'string.require':'image sản phẩm là bắt buộc'  }),
  Des: Joi.string().required().messages({
    'string.require':'Des sản phẩm là bắt buộc'  })
})

type Props = {
  setProducts:React.Dispatch<React.SetStateAction<Iproduct[]>>,
  Products:Iproduct[]
}


const EditProduct = ({setProducts,Products}: Props) => {
  const id = useParams().id;
 
  console.log(id);
  
  const navigate = useNavigate()
  const [OneProduct,setOneProduct]=useState<Iproduct|null>()
  
  useEffect(()=>{
    (async()=>{
      const {data}= await Instance.get(`/products/${id}`)
      setOneProduct(data)
    })()
  },[id])

  const {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm<Iproduct>(
    {resolver:joiResolver(Schema)}
  )

  function OnSubmitEit(product:Iproduct){
    (async()=>{
      const {data} = await Instance.put(`/products/${id}`,{...product,id})
      console.log(data);
      setProducts(Products.map((item)=>(item.id==data.id?data:item)))
      navigate('/')
    })()            
  }

  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit(OnSubmitEit)}>
      <h1 className="mb-4">Add SP</h1>
      
      <div className="form-group mb-3">
        <label htmlFor="name">Tên sản phẩm</label>
        <input
          defaultValue ={OneProduct?.name}
          type="text"
          id="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="Name"
          {...register('name', { required: true, minLength: 3 })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>
      
      <div className="form-group mb-3">
        <label htmlFor="price">Price sản phẩm</label>
        <input
         defaultValue ={OneProduct?.price}
          type="number"
          id="price"
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          placeholder="Price"
          {...register('price', { required: true, minLength: 3 })}
        />
        {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="image">Ảnh sản phẩm</label>
        <input
           defaultValue ={OneProduct?.image}
          type="text"
          id="image"
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
          placeholder="Image"
          {...register('image', { required: true })}
        />
        {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="Des">Des sản phẩm</label>
        <input
         defaultValue ={OneProduct?.Des}
          type="text"
          id="Des"
          className={`form-control ${errors.Des ? 'is-invalid' : ''}`}
          placeholder="Des"
          {...register('Des', { required: true })}
        />
        {errors.Des && <div className="invalid-feedback">{errors.Des.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default EditProduct