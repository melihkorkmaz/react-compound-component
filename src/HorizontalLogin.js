import React from 'react'
import LoginForm from './LoginForm'

const HorizontalLogin = () => (
  <LoginForm onSubmit={ (state) => console.log('SUBMITTED', state)}>
    <div className="d-flex">
      <div className="p-1">
        <LoginForm.Email />
      </div>
      <div className="p-1">
        <LoginForm.Password />
      </div>
      <div className="p-1 vertical-login-submit-wrapper">
        <LoginForm.Submit style={{marginTop: '15px'}} />
      </div>
    </div>
    <LoginForm.ErrorMessage />
  </LoginForm>
)

export default HorizontalLogin