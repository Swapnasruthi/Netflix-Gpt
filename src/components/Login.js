import { useState } from "react";
import Header from "./Header";

const Login  = ()=>{
    const [isSignIn, setInSignIn] = useState(true);
    const handleSigning = ()=>{
            setInSignIn(!isSignIn);
    }
    return (
        
        <div>
            <Header/>
            <div className="absolute w-12/12 h-auto bottom-0 top-0 right-0 left-0">
                <img className="w-full h-full object-cover box-content " src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg" alt="bg-image"/>              
            </div>
            <div className="p-2 absolute bg-[rgba(0,0,0,0.8)] w-[28rem] my-24 mx-auto mb-0 bottom-0 top-0 right-0 left-0 box-border overflow-hidden">
                <form className="flex flex-col box-border p-12 w-full h-full">
                    
                    <h1 className="text-white font-bold text-3xl pb-6" >{isSignIn ?  "Sign In" : "Sign Up"} </h1>
                    {!isSignIn && <input type="email" placeholder="User Name" className="text-white w-full p-4 m-2 bg-transparent border border-gray-100 rounded-md focus:outline-white" required/>}

                    <input type="email" placeholder="Email or mobile number" className="text-white w-full p-4 m-2 bg-transparent border border-gray-100 rounded-md focus:outline-white" required/>
                    <input type="password" placeholder="Password" className="text-white w-full p-4 m-2 bg-transparent border border-gray-100 rounded-md focus:outline-white" required/>
                    <button className="font-bold text-white p-2 m-2 w-full text-center bg-red-600 rounded-md hover:bg-red-800">{isSignIn ?  "Sign In" : "Sign Up"}</button>
                    {isSignIn && <p className="text-center text-lg text-gray-100 font-thin">OR</p>}
                    {isSignIn && <button className="transition-all rounded-md font-bold bg-[rgba(116,114,114,0.5)] hover:bg-[rgba(145,144,144,0.5)] p-2 m-2 w-full text-center text-white ">Use a sign-in code</button>}
                    {isSignIn && <p className="mb-5 text-center text-white hover:underline hover:text-gray-300">Forget Password?</p>}
                    
                    <p className="text-white text-center">{isSignIn ?  "New to Netflix?" : "Already registered?"} <a href="#" className="font-bold" onClick={handleSigning}> {isSignIn ?  "Sign up now" : "Sign In now"}</a></p>
                    <p className="text-gray-400 text-sm p-4 mx-2">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="no-underline text-blue-600">Learn more</a>.</p>

                </form>
            </div>
        </div>
    )
}

export default Login;