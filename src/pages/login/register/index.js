import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
const Register = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Data:', event)
  }

  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Xboxone_logo.PNG"
            height='250px' width='100px' className=" mr-3 justify-center " alt="Xbox Logo" />
        </div>
      </nav>
      <div className="w-full flex items-center w-screen justify-center min-h-screen mt-5">
        <div className='w-full max-w-xs mt-5'>
          <form onSubmit={onSubmit} className="bg-gray-900 max-w-2xl  w-96  rounded px-8 pt-2 pb-8 mb-4 mt-5 h-fit">
            <h3 className="text-lg mb-4 text-center font-semibold text-white">Register</h3>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First name :
              </label>
              <input
                className="shadow-lg shadow-gray-600 appearance-none  rounded max-w-xs w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-black"
                id="username"
                type="text"
                placeholder="first name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2 "
                htmlFor="lastName"
              >
                Last name :
              </label>
              <input
                className="shadow-lg shadow-gray-600 appearance-none  rounded max-w-xs w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-black"
                id="username"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="mb-6">
              <Input
                label='Phone No :'
                type='text'
                id='phno'
                name='phonenumber'
                placeholder='+92-3XXXXXXXXX'
              />
            </div>
            <div className="mb-6">

              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email :
              </label>
              <input
                className="shadow-lg shadow-gray-600 appearance-none  rounded max-w-xs w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-black"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password :
              </label>
              <input
                className="shadow-lg shadow-gray-600 disabled:cursor-not-allowed appearance-none  rounded max-w-xs w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-white"
                id="password"
                type="password"
                placeholder="Password"
              />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                className='shadow-xl  font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline'
                href='#'
                type="submit"
                size="medium"
                variant="white"
              >
                Register
              </Button>

            </div>
            <p className="mt-3 text-gray-300">Do you already have an account?  <Link className="text-sky-700 hover:underline" to={'/login'}>Login</Link></p>
          </form>

        </div>
      </div>

    </>

  );
}
export default Register;