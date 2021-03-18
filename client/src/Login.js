import React, { useState } from 'react';
// import style from './Login.module.css'
import Axios from 'axios'

const Login = () => {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const regBtn = () => {
        Axios.post('http://localhost:3001/api/register',
            {
                userName: usernameReg,
                password: passwordReg
            }).then((elm) => {
                alert(`${elm.data}`)
            }).then(
                setUsernameReg(''),
                setPasswordReg('')
            )
    };

    const reset = () => {
        setUsernameReg('')
        setPasswordReg('')
    }

    const chkBtn = () => {
        Axios.post('http://localhost:3001/api/login',
            {
                userName: username,
                password: password
            }).then((elm) => {
                setMessage(elm.data)
            }).then(
                setUsername(''),
                setPassword('')
            )
    }

    return (
        <div>
            會員註冊
            < br />
            <br />

            <label>帳號</label>
            <input type="text" value={usernameReg} onChange={(e) => { setUsernameReg(e.target.value) }} />
            <label>密碼</label>
            <input type="text" value={passwordReg} onChange={(e) => { setPasswordReg(e.target.value) }} />
            <button onClick={regBtn}>確認</button>
            <button onClick={reset}>重寫</button>
            <hr />


    會員登入
            < br />
            <br />
            <label>帳號</label>
            <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />
            <label>密碼</label>
            <input type="text" value={password} onChange={e => { setPassword(e.target.value) }} />
            <button onClick={chkBtn} >確認</button>
            <br />
            <span>{message}</span>
        </div >
    )

}


export default Login