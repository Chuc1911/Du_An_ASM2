import React, { useState } from 'react';
import Header from '../Layouts/Header';
import Instance from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await Instance.post('/auth/login', formData);
      alert('Đăng nhập thành công');
      console.log(response.data.token);
      
      // Lưu token vào localStorage hoặc state để sử dụng sau
      sessionStorage.setItem('user', JSON.stringify(response.data.token));
      if (window.confirm('bạn có muốn chuyển về trang chủ')) {
        navigate('/');
      }
    } catch (error) {
      alert('Đăng nhập thất bại: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <div className="contact-wrapper">
        <Header />
        <div className="breadcrumbs-area position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="breadcrumb-content position-relative section-content">
                  <h3 className="title-3">Login-Register</h3>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li>Login-Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-register-area mt-no-text mb-no-text">
          <div className="container container-default-2 custom-area">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
                <div className="login-register-wrapper">
                  <div className="section-content text-center mb-5">
                    <h2 className="title-4 mb-2">Login</h2>
                    <p className="desc-content">Please login using account detail below.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="single-input-item mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email or Username"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="single-input-item mb-3">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="single-input-item mb-3">
                      <button className="btn obrien-button-2 primary-color" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  );
}
