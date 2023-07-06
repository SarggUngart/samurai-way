import React from 'react';
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form"
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import Button from "../Button/Button";


type InputsFormType = {
  email: string
  password: string
  rememberMe: boolean
}


export const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputsFormType>({mode:"onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    }
  })

  const submit: SubmitHandler<InputsFormType> = (data) => {
    console.log(data)
  }

  const errorHandler: SubmitErrorHandler<InputsFormType> = (values) => {
    console.log(values.email)
  };


  return (
    <Grid container justifyContent={"center"}>
      <Grid sx={{marginTop: '50px'}} item justifyContent={"center"}>
        <form onSubmit={handleSubmit(submit, errorHandler)}>
          <FormControl>
            <FormLabel>
              <p>
                To log in get registered
                <a
                  href={"https://social-network.samuraijs.com/"}
                  target={"_blank"}
                >
                  {" "}
                  here
                </a>
              </p>
              <p>or use common test account credentials:</p>
              <p>Email: free@samuraijs.com</p>
              <p>Password: free</p>
            </FormLabel>
            <FormGroup>
              <TextField
                {...register('email', {
                    required: 'email address is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address'
                    }
                  }
                 )}
                label="Email"
                margin="normal"
              />
              {errors.email && <div style={{fontSize: '14px', color: 'red'}}>{errors.email.message || 'Error'}</div>}
              <TextField
                {...register('password', {
                  required: 'email address is required',
                  minLength: {value: 4, message: 'password must be longer than 4 characters'},
                  maxLength: {value: 20, message: 'password must be less than 20 characters'}
                })}
                type="password"
                aria-invalid={!!errors.password}
                label="Password"
                margin="normal"
              />
              {errors.password &&
                <div style={{fontSize: '14px', color: 'red'}}>{errors.password.message || 'Error'}</div>}
              <FormControlLabel
                label={"Remember me"}
                control={
                  <Checkbox {...register('rememberMe')}/>
                }
              />
              <Button name={'submit'} callBack={handleSubmit(submit, errorHandler)}/>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
};

