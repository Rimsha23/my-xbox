import React,{useState} from 'react'

const Alert=(props) =>{
    const alertColor=(type)=>{
        if(type === 'success'){
            return  true
        }
        if(type === 'failure' || 'error'|| 'danger'){
           return false;
        }
    }

  return (
    <div className='h-[40px]'>
   {props.alert && <div>
      <div class={`${alertColor(props.alert.type)? 'bg-green-300' : 'bg-red-300'} border ${alertColor(props.alert.type)? 'border-green-500':'border-red-500'} text-black px-4 py-3 rounded relative`} role="alert">
  <strong class="font-bold">{props.alert.type}</strong>
  <span class="block sm:inline">{props.alert.msg}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-black" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
    </div>
   }
   </div>
  )
}

export default Alert
