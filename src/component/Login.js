import React, { useState } from 'react';
import '../css/Login.css'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import Swal from "sweetalert2";


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [{Login}, dispatch] = useStateValue();

    const realId ="hansung";
    const realPw ="1234";

    const navigate = useNavigate();
 
    const navigateToPurchase = () => {
      navigate("/");
    };
    function LOGIN() {
      dispatch( {
        type:"LOGIN",          
        item : realId ,
      })
    }  

    const signIn = (e) => {
        // 버튼만 누르면 리프레시 되는것을 막아줌
        e.preventDefault();
        if (realId === email) {            
            if (realPw === password) {
              e.stopPropagation();                   
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-right',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
                icon: 'success',
                title: `로그인에 성공했습니다.
                  ${email}님,
                  BugiStore에 온 것을 환영합니다.`
            })
              navigateToPurchase();
              LOGIN();                         
            }
            else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        
          } else {
                alert('아이디가 일치하지 않습니다.');            
          }

    }
    
    return (
        <div className='login'>        
            <Link to ="/">
            <img className='login_logo' src='https://media.discordapp.net/attachments/1043797541113835561/1045953157127225364/BugiStore_-_MarkMaker_Logo.png?width=444&height=444' alt=""/>
            </Link>

            <div className='login_container'>
                <h1> 로그인 </h1>
                <form>
                    <h5> 이메일 </h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />
                    <h5> 비밀번호 </h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
                    <Link to="/">   
                        <button className='login_signInButton' onClick={signIn}> 로그인 하기 </button>
                    </Link>  
                </form>

                <p>이용 약관에 동의하십니까?</p>

                <button className='login_registerButton'>회원가입하기</button>
            </div>
        </div>

    );
}

export default Login;