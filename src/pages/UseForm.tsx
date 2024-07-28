import Joi from 'joi'
import React from 'react'
import { useForm } from 'react-hook-form'
import { User } from '../interface/User'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import Instance from '../api'


const UserSchema = Joi.object({
  email:Joi.string().required().email({tlds:false}).messages({
    'string.required':'email là bắt buộc',
    'string.email':'email phai dung dinh dang '
  }),
  password: Joi.string().required().min(6).messages({
    'string.require':'password là bắt buộc',
    'string.min':'passwordphải lớn hơn 6'
  }),
 
})

type Props = {
  isLogin?:boolean
}

const Register = ({isLogin}:Props) => {
  
const navigate = useNavigate()

const {
  register,
  handleSubmit,
  formState:{errors}
}=useForm<User>(
  {resolver:joiResolver(UserSchema)}
)

function OnRegister(user:User) {
  (async()=>{
    const {data} = await Instance.post(`/register`, user)
    data && (window.confirm('bạn đã đăng ký thành công , có muốn chuyển sang trang login ko !')) && navigate('/login') 
  })()            
}

function OnLogin(user:User) {
  (async()=>{
    const {data} = await Instance.post(`/login`, user)
    console.log(data);
    data&&localStorage.setItem('user',JSON.stringify(data.accessToken))
    if (data) {
      (window.confirm('bạn đã đăng nhập thành công , có muốn chuyển sang trang chủ ko !')) && navigate('/') 
    }
  })()            
}

return (
  <div className="container mt-5">
  <form onSubmit={!isLogin?handleSubmit(OnRegister):handleSubmit(OnLogin)}>
    <h1 className="mb-4">{!isLogin?'Register':'Login'}</h1>
    
    <div className="form-group mb-3">
      <label htmlFor="name">email</label>
      <input
        type="text"
        id="name"
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        placeholder="email"
        {...register('email', { required: true })}
      />
      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
    </div>
    
    <div className="form-group mb-3">
      <label htmlFor="price">Password</label>
      <input
        type="password"
        id="price"
        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        placeholder="Price"
        {...register('password', { required: true, minLength: 3 })}
      />
      {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
    </div>


    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
)
}

export default Register