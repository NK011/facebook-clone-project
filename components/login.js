import Image from "next/image";
import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login() {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-5">
            <Image
                src="https://links.papareact.com/5me"
                height={100}
                width={100}
                className="h-28 w-28"
                alt="fb-logo"
                priority
            />
            <button
                className="bg-[#166be7] text-white font-semibold px-3 py-2 rounded-full"
                onClick={() => signIn()}
            >
                Login with Facebook
            </button>
        </div>
    );
}

export default Login;
