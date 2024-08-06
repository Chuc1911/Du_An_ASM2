import React, { useState } from 'react';
import Header from '../Layouts/Header';
import Instance from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
      const response = await Instance.post('/auth/register', formData);
      alert(response.data.message);
      if (window.confirm('bạn có muốn chuyển sang đăng nhập')) {
        navigate('/login');
      }
    } catch (error) {
      alert('Đăng ký thất bại: ' + error.response.data.message);
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
                    <h2 className="title-4 mb-2">Create Account</h2>
                    <p className="desc-content">Please Register using account detail bellow.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="single-input-item mb-3">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="single-input-item mb-3">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </div>
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
                        Register
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
