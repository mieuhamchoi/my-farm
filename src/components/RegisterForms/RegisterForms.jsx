import React from 'react'
import './RegisterForm.scss'

export default function RegisterForm(props) {
  return (
    <form className='loginForm_container'>
        {/* Title Groups */}
        <div className='title_groups'>
            <span className='title_text'>Register</span>
        </div>
        {/* Input Username */}
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                UserName
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
                Pass
                </span>
            </div>
            <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="basic-addon1"
            />
        </div>
        {/* Input Password Again*/}
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                Pass Again
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
            <button type="button" className="btn btn-success">Register</button>
        </div>
        <div onClick={() => {
            props.setLoginForm(true)
        }} className='switch_groups'>
            <span className='switch_text'>đăng nhập ngay</span>
        </div>
    </form>
  )
}
