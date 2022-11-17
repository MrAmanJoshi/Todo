import React from "react"
import Button from "./Button";
import { withFormik } from 'formik';
import * as yup from 'yup';
import Input from "./Input"
import axios from "axios"
import {Link} from "react-router-dom"

  const handleLogin= ( values, bag)=>{
   axios.post("https://myeasykart.codeyogi.io/login",{ email:values.email, 
                                password: values.password}).then((response)=>{
const {user, token} = response.data;
     localStorage.setItem("token", token);
     bag.props.setUser(user)
     
   }).catch(()=>{
     console.log("error aaya bhayya check kro")
   })
 }


  const schema = yup.object().shape({
    email: yup.string().email('Invalid email please check').required('Email required'),

  password: yup.string().min(4).required('Password Required')
  })
  
  const initialValues = {
    email: "",
    password: ""
  }

const Login = ({values,
     touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit}) => {
 
  
  return (
    <div className=" flex flex-col justify-center my-32">
      <form onSubmit={handleSubmit}>
    <p className="text-xl font-bold ml-5">Login</p>
    <div className=" flex flex-col">
    <Input 
      name="email"
      type="email"
      onChange={handleChange}
      onBlur = {handleBlur}
       value= {values.email}
      error={errors.email}
      touched={touched.email}
      id="@email"
      placeholder="Email"
      />
      
      <Input 
        name="password"
        type="password"
        id="@password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={errors.password}
        touched={touched.password}
        placeholder="Password"
        />
      
    </div>
    <Button type="submit" className={"ml-5"}>Login</Button>
    </form>
      
      <div className="text-lg text-yellow-400 ml-5 mt-5"> don't have account 
        <Link className= "text-green-400 ml-1 " to="/signup">SignUp</Link>
        </div>
      </div>
  )
}

const myHoc = withFormik({
handleSubmit: handleLogin,
initialValues: initialValues,
  validationSchema: schema
})
 const newLogin = myHoc(Login)

export default newLogin;