import React from 'react'
import { useState } from 'react'
import Input from '../../components/input';
const Form = ()=>{
const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(e.target['password1'].value === e.target['password2'].value){
        console.log('password is same');
    }
else{
    console.log('Password is mismatched');
}
}
console.log('form');
    return(
        <>
        <form name='myform' onSubmit={handleOnSubmit}>
<Input  type='password'  name='password1'  placeholder='enter text'/>
<Input  type='password' name='password2'   placeholder='enter text'/>
<button type='submit' >onSubmit</button>
        </form>
        <form name='myform1' onSubmit={handleOnSubmit}>
   <Input  type='password'  name='password1'  placeholder='enter text'/>
    <Input  type='password' name='password2'   placeholder='enter text'/>
     <button type='submit' >onSubmit</button>
        </form>
        <p id='demo'></p>
        </>
    )
}
export default Form;