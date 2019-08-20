import React from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  email: '',
  password: '',
  hasErrors: false
}

const LoginContext = React.createContext({
  onChange: () => {},
  hasErrors: false
})

class LoginForm extends React.PureComponent {

  state = { ...defaultState }

  onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state

    if(!email || !password){
      this.setState({
        hasErrors: true
      })
      return
    }
    

    this.props.onSubmit(this.state)
    this.setState({...defaultState})
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  static Email = () => {
    return (
      <LoginContext.Consumer>
      {({onChange}) => (<div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={onChange} />
      </div>)}
      </LoginContext.Consumer>
    )
  }

  static Password = () => {
    return (
      <LoginContext.Consumer>
      {({onChange}) => (
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" placeholder="Password" onChange={onChange} />
        </div>
      )}
      </LoginContext.Consumer>
    )
  }

  static Submit = () => <button type="submit" className="btn btn-primary">Submit</button>

  static ErrorMessage = () => (
    <LoginContext.Consumer>
      {({ hasErrors }) => (
        hasErrors && <div className="text-danger">Error message</div>
      )}
    </LoginContext.Consumer>
  )
  render() {
    const { onChange, onSubmit, state: { hasErrors } } = this

    const contextValue = {
      onChange: onChange,
      hasErrors: hasErrors
    }

    return <LoginContext.Provider value={contextValue}>
      <form onSubmit={onSubmit}> 
          {this.props.children}   
      </form>
    </LoginContext.Provider>
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;