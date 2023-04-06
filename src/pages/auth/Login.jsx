import React, {useState} from "react";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const Login = ({login, isAuthenticated}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const emailOnChange = (e) => setEmail(e.target.value);
    const passwordOnChange = (e) => setPassword(e.target.value);

    const handleOnclick = () => {
        login({email, password})
    }

    if(isAuthenticated)
    {
       return <Navigate to="/statistics"/>
    }

    return (
        <div className="bg-[#000850] py-80">
            <div className="mx-auto bg-slate-200 px-24 pt-24 pb-20 max-w-4xl rounded-xl">
                <p className="text-[#000850] text-4xl text-center uppercase font-bold">
                    login to your account
                </p>
                <p className="mt-10 text-2xl">Username <span className="text-red-600">*</span></p>
                <input value={email} onChange={emailOnChange} className="w-full my-3 p-4 text-2xl border border-slate-400 focus:outline-none focus:border-sky-500 rounded-md" placeholder="Enter your email address*" type="email" />
                <p className="mt-5 text-2xl">Password <span className="text-red-600">*</span></p>
                <input value={password} onChange={passwordOnChange} className="w-full my-3 p-4 text-2xl border border-slate-400 focus:outline-none focus:border-sky-500 rounded-md" placeholder="Enter your password*" type="password" />
                <div className="flex justify-between items-center">
                    <div>
                        <input className="w-6 h-6 mt-2 relative top-1" type="checkbox" />
                        <span className="text-2xl ml-5">Remember me</span>
                    </div>
                    <div>
                        <p className="text-2xl text-[#BB914A] hover:underline hover:cursor-pointer hover:font-semibold">Forgot password?</p>
                    </div>
                </div>
                <div onClick={handleOnclick} className="hover:bg-[#da9520] hover:font-bold mt-9 text-center text-2xl text-white py-3 px-5 uppercase bg-[#BB914A] w-1/3 mx-auto rounded-full">login</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);