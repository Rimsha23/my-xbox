import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
const Front = () => {
    return (
            <div style={{ backgroundImage: "url(/mylogo.gif)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '100vh' }}
                className="w-full h-full pt-0 mt-0">
                <h1 className="text-white font-bold text-center text-3xl shadow-lg pt-16 ">Welcome to Xbox One</h1>
                <div className="mt-32 flex flex-col justify-center items-center">
                    <Link to={'/login'}>
                        <Button className='shadow-2xl shadow-white font-bold w-60 h-25ld py-2 px-4  rounded focus:outline-none focus:shadow-outline'
                            variant='white'
                            size='large'
                        >
                            Login
                        </Button>
                    </Link>
                </div>
                <div className="mt-14 flex flex-col justify-center items-center">
                    <Link to={'/register'}>
                        <Button className=' shadow-2xl shadow-white  w-60 h-25 font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline'
                            variant='white'
                            size='large'
                        >
                            Register
                        </Button>
                    </Link>
                </div>
                <div className="mt-14 flex flex-col justify-center items-center">
                    <Link to={'home'}>
                        <Button className=' shadow-2xl shadow-white  w-60 h-25 font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline'
                            variant='white'
                            size='large'
                        >
                            Visit Site as Guest
                        </Button>
                    </Link>
                </div>
            </div>
        
    );
}
export default Front;