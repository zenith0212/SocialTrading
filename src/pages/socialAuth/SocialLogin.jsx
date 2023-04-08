import { Link } from "react-router-dom";

const SocialLogin = () => {
    return (
        <div className="bg-[#000850] pt-36 pb-40">
            <div className="mx-auto bg-slate-200 px-24 pt-24 pb-20 max-w-4xl rounded-xl">
                <p className="text-[#000850] text-4xl text-center uppercase font-bold">
                    Social Trading
                </p>
                <p className="mt-5 text-xl text-center">Client Portal</p>
                <p className="mt-3 text-xl text-center">Login or Register as a provider or follower</p>
                <p className="mt-5 text-2xl">Server <span className="text-red-600">*</span></p>
                <select className="w-full my-3 p-4 text-2xl border border-slate-400 focus:outline-none focus:border-sky-500 rounded-md" placeholder="Server">
                    <option value='MultiBank-Live-1'>MultiBank-Live-1</option>
                    <option value='MultiBank-Live-2'>MultiBank-Live-2</option>
                    <option value='MultiBank-MT5'>MultiBank-MT5</option>
                    <option value='MultiBank-Live-4'>MultiBank-Live-4</option>
                </select>
                <p className="mt-5 text-2xl">Username <span className="text-red-600">*</span></p>
                <input className="w-full my-3 p-4 text-2xl border border-slate-400 focus:outline-none focus:border-sky-500 rounded-md" placeholder="Enter your email address*" type="email" />
                <p className="mt-5 text-2xl">Password <span className="text-red-600">*</span></p>
                <input className="w-full my-3 p-4 text-2xl border border-slate-400 focus:outline-none focus:border-sky-500 rounded-md" placeholder="Enter your password*" type="password" />
                <div className="hover:bg-[#da9520] hover:font-bold mt-9 text-center text-2xl text-white py-3 px-5 uppercase bg-[#BB914A] w-1/3 mx-auto rounded-full">login</div>
                <div className="mt-5 flex justify-between">
                    <Link to="/register/provider" className="text-2xl">Register as a provider</Link>
                    <Link to="/register/follower" className="text-2xl">Register as a follower</Link>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin;