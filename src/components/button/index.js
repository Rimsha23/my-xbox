import React from "react";
const variants = {
    'primary': 'bg-black text-white hover:enabled:outline hover:enabled:text-gray-500',
    'danger': 'bg-red-600 text-white hover:enabled:bg-red-500 rounded-lg',
    'naked': 'bg-transparent text-black hover:enabled:text-gray-600  rounded-lg',
    'white': 'bg-white border:none text-black hover:enabled:text-xs rounded-lg',
    'gray': 'bg-gray-500 border border-white text-white hover:text-gray-500 hover:border-slate-300 rounded-lg ',
    'blue': 'bg-blue-500 hover:bg-white text-white hover:text-gray-500'
}

const sizes = {
    'small': 'px-1 py-1 text-xs hover:text-xs',
    'medium': 'px-5 py-3 text-sm',
    'large': 'px-8 py-4 text-lg'
}

const Button = ({ className, variant = 'primary', size = 'small', ...props }) => {
    return (
        <>
            <button className={`${className} ${variants[variant]} ${sizes[size]} `}
                {...props} />
        </>
    );
}
export default Button;

