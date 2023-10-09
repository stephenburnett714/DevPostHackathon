import React from 'react';

export default function SignUp() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between sm:px-32 py-10">
      <div className="inter-font flex flex-col lg:px-10 gap-4  pb-10">
        <span className="flex items-center justify-center text-3xl font-extrabold leading-10 tracking-tight pb-4">
          Create a new account
        </span>
        {/*First name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col">
            <span className="font-semibold">First name</span>
            <input
              type="text"
              placeholder="John"
              className="border px-1 rounded border-gray-400 h-8"
            ></input>
          </div>

          {/*Last name */}
          <div className="flex flex-col">
            <span className="font-semibold">Last name</span>
            <input
              type="text"
              placeholder="Clark"
              className="border px-1 rounded border-gray-400 h-8"
            ></input>
          </div>
        </div>

        {/*Username */}
        <div className="flex flex-col">
          <span className="font-semibold">Username</span>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="border px-1 rounded border-gray-400 h-8"
          ></input>
        </div>

        {/*Password */}
        <div className="flex flex-col">
          <span className="font-semibold">Password</span>
          <input
            type="password"
            placeholder=""
            className="border px-1 rounded border-gray-400 h-8 "
          ></input>
          <span className="font-semibold pt-2">Confirm Password</span>
          <input
            type="password"
            placeholder=""
            className="border px-1 rounded border-gray-400 h-8"
          ></input>
        </div>

        {/*Signup Button */}
        <button className="ww-purple-bg text-white border rounded p-2 font-semibold">
          Sign Up
        </button>
      </div>
      <div className="">
        <img src="src/assets/img/Hands Phone.png" />
      </div>
    </div>
  );
}
