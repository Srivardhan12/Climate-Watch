import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Phno, setPhno] = useState()

    const storeValues = () => {
        localStorage.setItem("email", Email)
        localStorage.setItem("password", Password)
        localStorage.setItem("phno", Phno)
        navigate("/")
    }

    return (
        <>
            <form className='mt-5' onSubmit={storeValues}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone number</label>
                    <input type="number" className="form-control" id="exampleInputPhonenumber1" onChange={(e) => { setPhno(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="mt-3 d-flex">
                    <p className='text-right'>Already have an account</p>
                    <Link to="/login" className='mx-1'>Login</Link>
                </div>
            </form>
        </>
    )
}
