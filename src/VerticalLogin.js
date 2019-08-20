import React from 'react'
import LoginForm from './LoginForm'

const VerticalLogin = () => (
  <LoginForm onSubmit={console.log}>
    <LoginForm.Email />
    <LoginForm.Password />
    <LoginForm.Submit />
    <LoginForm.ErrorMessage />
  </LoginForm>
)

export default VerticalLogin