import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { userLoginActions } from '@stores/slices/userLogin.slice'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import LoginForm from '@components/LoginForms/LoginForm'
import RegisterForm from '@components/RegisterForms/RegisterForms'

export default function Navbars() {
    const dispatch = useDispatch();
    const userLoginStore = useSelector(store => store.userLoginStore);
    const [control, setControl] = useState(false);
    const [loginForm, setLoginForm] = useState(true);

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])

    return (
        <div className='navbarCom_contents'>
            {/* Logo box */}
            <div className="logoBox">
                <img className='logoBox_img' src="https://firebasestorage.googleapis.com/v0/b/meo-farmer.appspot.com/o/meofarmers%2Ficon.png?alt=media&token=480ed837-49bd-4dfe-9683-4f897d5e11cf"/>
                <div className='logoBox_titleBox'>
                    <div className='title_content'>MF</div>
                    <div className='title_sologan'>for your farm</div>
                </div>
            </div>
            {/* Navigation Bar & Search */}
            <div className='centerBox'>
                <div className='searchBox'>
                    <Input placeholder='Bạn tìm gì ?' addonAfter={<SearchOutlined />} defaultValue="" />
                </div>
                <div className='navigationBox'>
                    <button type="button" className="select btn btn-success">Home</button>
                    <button type="button" className="btn btn-success">About</button>
                    <button type="button" className="btn btn-success">Contact</button>
                    <button type="button" className="btn btn-success">Góp ý</button>
                    <button type="button" className="btn btn-success">Contact</button>
                    <button type="button" className="btn btn-success">Contact</button>
                </div>
            </div>
            {/* User Infor & Cart */}
            <div className='rightBox'>
                <div className='carts'>
                    <i className="carts_icon fa-solid fa-cart-shopping"></i>
                    {/* <div className='carts_count'>1</div> */}
                </div>
                <div onClick={() => {
                    setControl(!control)
                }} className='userInfor_box'>
                    {/* Đã login */}
                    <div className='userInfor_content'>
                        <span className='content_sayhi'>{"xin chào: "}</span>
                        <span className='content_userName'>Nguyễn Phước</span>
                        <div className='content_control'>
                            <img className='control_avatar' src="https://firebasestorage.googleapis.com/v0/b/meo-farmer.appspot.com/o/meofarmers%2Fz4475990429793_e2d7d914950e2d7c51a21ac1167d1c76.jpg?alt=media&token=4fc40169-676f-43c5-bff6-4eb098628536"/>
                            {
                                control 
                                ? <i className="control_up fa-solid fa-angle-up"></i> 
                                : <i className="control_down fa-solid fa-angle-down"></i>
                            }
                        </div>
                    </div>
                    {/* Chưa login */}
                </div>
                <div className={`popLogins ${control ? "show" : ""}`}>
                    {/* Đã login */}
                    
                    {/* Chưa login */}
                    {/* đăng ký */}
                    {/* đăng nhập */}
                    {
                        loginForm 
                        ? <LoginForm setLoginForm={setLoginForm}></LoginForm> 
                        : <RegisterForm setLoginForm={setLoginForm}></RegisterForm>
                    }
                    
                </div>
            </div>
        </div>
    )
}
