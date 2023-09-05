import React from "react";
const Input = ({ className = 'shadow-lg shadow-gray-600 appearance-none  max-w-xs  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:enabled:border border-black',
    type,
    inputId,
    name,
    label,
    placeholder,
    onChange,
    value,
    helper,
    error,
    ...props }) => {
    return (
        <>
            {label && <label className="block text-white  font-bold mb-2">{label}</label>}
            {helper && <label className=" text-white text-sm ">{helper}</label>}
            <input
                name={name}
                id={inputId}
                type={type}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <p className="text-red-600 text-sm">{error}</p>
        </>
    );
}
export default Input;