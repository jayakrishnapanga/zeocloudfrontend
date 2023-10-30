import React from "react"

import { useState } from "react";


import { useFormik } from 'formik';
import axios from "axios";

import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 
  const [errorMessage, setErrorMessage] = useState('');
 
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
  
    },

   
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post('http://localhost:3001/user/login', values);
        console.log(response);             
        console.log(response.status);

        if (response.status === 201) {
          const { token } = response.data;
          console.log('Token:', token);
          const name=response.data.username
          const id=response.data.userId
          localStorage.setItem('username',name)
          localStorage.setItem('usrid',id)
          navigate('/user');
        }
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An error occurred while logging in');
        }
      }
    },
    validate: (values) => {
      const errors = {};

      // Perform validation for each field
      if (!values.email) {
        errors.email = 'email is required';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
  });



  return (
     <>
     <div className="grid content-center pt-24">
     {errorMessage && <div className="text-red-800 grid content-center font-mono text-lg  m-0 "> {errorMessage}</div>}
     </div>
    <div className="grid content-center">
      <form className="max-w-sm grid content-center" onSubmit={formik.handleSubmit}>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
             Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3 password-input">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="**********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
         
          
        </div>
        <button type="button" className="toggle-password pb-2 text-slate-50" onClick={handlePasswordToggle}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
       
           
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
             Login
            </button>
           
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login