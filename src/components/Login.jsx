import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [UserStatus, setUserStatus] = useState(false)

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")

    const validateUser = (e) => {
        if (Email === email && Password === password) {
            navigate("/")
        }
        else {
            e.preventDefault();
            setUserStatus(true)
        }
    }

    return (
        <>
            <form className="mt-5">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={validateUser}>Login</button>
                <div className="mt-3 d-flex">
                    <p className='text-right'>Don't have an account</p>
                    <Link to="/signup" className='mx-1'>sign up</Link>
                </div>
            </form>
            {UserStatus ? <p style={{ color: "red", fontSize: "25px" }} className="falut-user">User Not Found!</p> : ""}
        </>
    )
}
