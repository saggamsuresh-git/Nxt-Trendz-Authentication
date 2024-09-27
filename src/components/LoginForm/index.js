import {Component} from 'react'

import './index.css'

const usernamesList = ['henry', 'david', 'robert', 'mosh', 'rahul', 'praneetha']

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoginFailed: false,
    errorMessage: '',
  }

  loginConfirm = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginFail = () => {
    const {history} = this.props
    history.replace('/login')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    // if (username === '') {
    //   this.setState({
    //     isLoginFailed: true,
    //     errorMessage: `*Username is required`,
    //   })
    //   this.loginFail()
    //   return
    // }

    // if (!usernamesList.includes(username) && password === !undefined) {
    //   this.setState({
    //     isLoginFailed: true,
    //     errorMessage: `*Username is required`,
    //   })
    //   this.loginFail()
    //   return
    // }

    // if (usernamesList.includes(username) && password === '') {
    //   this.setState({
    //     isLoginFailed: true,
    //     errorMessage: `*Username and Password didn't match`,
    //   })
    //   this.loginFail()
    //   return
    // }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginConfirm()
    } else {
      this.setState({
        isLoginFailed: true,
        errorMessage: data.error_msg,
      })
    }
    console.log(response)
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, isLoginFailed, errorMessage} = this.state
    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="small-website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <form className="form" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-label-container">
            <label htmlFor="username">USERNAME</label>
            <input
              type="username"
              id="username"
              className="input-username"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              className="input-password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          {isLoginFailed && <p className="error">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
