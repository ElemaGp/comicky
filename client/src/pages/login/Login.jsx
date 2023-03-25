import style from "./login.module.scss"
import React, { useContext } from 'react'
import { AuthContext } from "../../authContext/AuthContext";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../../components/formikComponents/FormikControl"
import { Box, Button, Typography } from "@mui/material"
import usePasswordToggle from "../../usePasswordToggle"
import { Stack } from "@mui/system"
import { Link, useLocation } from "react-router-dom"
import { login } from "../../authContext/apiCalls"


function Login () {

const {dispatch} = useContext(AuthContext);
const { state } = useLocation();

  //password eye-toggle
  const [passwordInputType, EyeIcon] = usePasswordToggle(); //bringing in the values of "const inputType" and "const icon" which i returned from the usePasswordToggle custom hook as "const passwordInputType" and "const EyeIcon".

  //formik part
  const initialValues = {
    email: state ? state.registeredEmail.email : "",
    password: state ? state.registeredPassword.password : ""
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {    //alternatively, i can just destructure this "values" object to directly get the email and password.
    console.log('Form data', values);
    const {email, password} = values;
    login({email, password}, dispatch);
  }
 


  return (
    
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className={style.formContainer}>
            <h1 className={style.signupText}>LOG IN</h1>
            <FormikControl
              control='MuiInput'
              // control='chakraInput'
              type='email'
              label='Email'
              name='email'    //the "name" has to match with the initial value's name above.
              error={Boolean(formik.errors.email) && Boolean(formik.touched.email)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.email) && formik.errors.email} //if "formik.touched.email" is true, then display the "formik.errors" associated with the "email".
            />

          <div className={style.passwordArea}>
              <FormikControl
                control='MuiInput'
                type={passwordInputType}
                label='Password'
                name='password'    //the "name's" value has to match with the initial value's name above.
                error={Boolean(formik.errors.password) && Boolean(formik.touched.password)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
                helperText={Boolean(formik.touched.password) && formik.errors.password} //if "formik.touched.password" is true, then display the "formik.errors" associated with the "password".
              />
              <div className={style.passwordEyeIcon}>{EyeIcon}</div>
            </div>
            
            {/* <button type='submit' disabled={!formik.dirty || !formik.isValid} className={style.btn}>Sign Up</button> "formik.isValid is false whenever there is an error", "formik.dirty" is false if the value of that input field is still the same as it's initial state value*/}
            <Button type="submit" variant="contained" color="primary" size="large" disabled={!formik.isValid}>Login</Button> 
            {/* if you wish, you can also add "!formik.dirty" as another consition for the button above to be disabled. As in "disabled={!formik.dirty || !formik.isValid}" */}
           <Box>
             <Typography gutterBottom={true} sx={{marginTop: "18px"}}>Don't have an account?, <Link to="/signup" style={{textDecoration: "none"}}>sign up</Link></Typography>
             <Typography>Forgot password?, <Link to="/signup" style={{textDecoration: "none"}}>reset password</Link></Typography>
           </Box>
          </Form>
        )
      }}
    </Formik>
    
  )
}

export default Login

