import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
const Login = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Data:", event);

  }
  const [passwordType, setPasswordType] = useState('password');
    const [text, setText] = useState('Show')
  const handleShow = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
        setPasswordType('text')
        setText('Hide');
    }
    else {
        setPasswordType('password')
        setText('Show');
    }
}

  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Xboxone_logo.PNG" height='250px' width='100px' className=" mr-3 justify-center " alt="Xbox Logo" />
        </div>
      </nav>
      <div className="w-full flex items-center w-screen justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <form
            onSubmit={onSubmit}
            className="bg-gray-900 max-w-2xl w-96 shadow-md rounded px-8 pt-4 mb-4"
          >
            <h3 className="text-lg text-white mb-4 text-center font-semibold">Login</h3>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username :
              </label>
              <input
                className="shadow-lg shadow-gray-600 appearance-none  max-w-xs  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:enabled:border border-black"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password :
              </label>
              <div className="relative">
              <input
                className="shadow-lg shadow-gray-600 appearance-none  rounded max-w-xs w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-black"
                id="password"
                type={passwordType}
                placeholder="Password"
              />
              <Button className='absolute right-0 top-0 mr-2 mt-1' variant='naked' size='small' onClick={handleShow}>{text}</Button>
              </div>
              <p id='p' className="text-red-500  text-xs italic pb-2 pt-4">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                href='#'
                className=" shadow-xl   font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
                variant="white"
                size='medium'
              >
                Sign In
              </Button>

            </div>
            <p className="mt-3 pb-4 text-gray-300">
              Does not have an account?{" "}
              <Link className="text-blue-700 hover:underline focus:ring-2" to={"/register"}>
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
