import React from 'react'
import './LoginForm.scss'

export default function LoginForm(props) {
  return (
    <form className='loginForm_container'>
        {/* Title Groups */}
        <div className='title_groups'>
            <span className='title_text'>Login</span>
        </div>
        {/* Input Username */}
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                @
                </span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your user name"
                aria-describedby="basic-addon1"
            />
        </div>
        {/* Input Password */}
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                @
                </span>
            </div>
            <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="basic-addon1"
            />
        </div>
        <div className='btn_groups'>
            <button type="button" className="btn btn-success">Login</button>
        </div>
        <div onClick={() => {
            props.setLoginForm(false)
        }} className='switch_groups'>
            <span className='switch_text'>trở thành thành viên của chúng tôi!</span>
        </div>
    </form>
  )
}
