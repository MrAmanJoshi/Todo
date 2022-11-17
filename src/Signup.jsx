import React from "react"
import Button from "./Button";
import { withFormik } from 'formik';
import * as yup from 'yup';
import Input from "./Input"
import axios from "axios"

  const handleSignup= ( values, bag)=>{
   axios.post("https://myeasykart.codeyogi.io/signup",{ email: values.email, 
fullName: values.fullName,                  
password: values.password }).then((response)=>{
const {user, token} = response.data;
     localStorage.setItem("token", token);
     bag.props.setUser(user)
     
   }).catch(()=>{
     console.log("error aaya bhayya check kro")
   })
 }


  const schema = yup.object().shape({
    email: yup.string().email('Invalid email please check').required('Email required'),

  fullName: yup.string().required("Please  enter full name").min(2),

  password: yup.string().min(4).required('Password Required')
  })
  
  const initialValues = {
    email: "",
    fullName: "",
    password: ""
  }

const Signup = ({values,
     touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit}) => {
 
  
  return (
    <div className="w-sm-auto mx-auto my-64">
      <form onSubmit={handleSubmit}>
    <p className="text-xl font-bold ml-5">Signup</p>
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
        name="fullName"
        type="text"
        id="@fullName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fullName}
        error={errors.fullName}
        touched={touched.fullName}
        placeholder="full Name"
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
    <Button type="submit" className={"ml-5"}>Signup</Button>
    </form>
      </div>
  )
}

const myHoc = withFormik({
handleSubmit: handleSignup,
initialValues: initialValues,
  validationSchema: schema
})
 const newSignup = myHoc(Signup)

export default newSignup;