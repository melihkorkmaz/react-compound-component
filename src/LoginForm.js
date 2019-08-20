import React from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  email: '',
  password: '',
  hasErrors: false
}

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

  render() {

    const { onChange, onSubmit, state: { hasErrors} } = this

    return (<form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" type="password" className="form-control" placeholder="Password" onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {hasErrors && <div className="text-danger">Error message</div>}
    </form>)
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;