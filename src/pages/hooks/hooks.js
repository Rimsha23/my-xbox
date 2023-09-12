import React, { useReducer, useEffect, useState } from 'react'
import Button from '../../components/button'
import useInput from '../../components/custom hooks/useInput'
// const initialState={
//     loading: true,
//     post: {},
//     error:''
// }
// const reducer=(state,action)=>{
//     switch(action.type){
//      case 'FETCH_SUCCESS':
//      return{
//         loading: false,
//         post: action.payload,
//         error:''
//      }  
//      case 'FETCH_ERROR':
//      return{
//      loading:false,
//      post:{},
//      error:'Something Went Wrong!'
//      } 
//      default:
//         return state;
//     }
// }

/*const initialState={
   firstCounter: 0,
   secondCounter: 10 
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment1':
        return {...state,firstCounter: state.firstCounter + action.value}
        case 'increment2':
        return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement1':
        return {...state,firstCounter: state.firstCounter - action.value}
        case 'decrement2':
        return {...state,secondCounter: state.secondCounter - action.value}
        case 'Add1 5':
        return {...state,firstCounter: state.firstCounter + action.value}
        case 'Add2 5':
        return {...state,secondCounter: state.secondCounter + action.value}
        case 'reset':
        return initialState;
        default:
        return state;

    }

}*/
const UserForm = () => {
    // const [state,dispatch]= useReducer(reducer,initialState);

    // useEffect(()=>{
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(response=>{
    //        dispatch({type:'FETCH_SUCCESS', payload: response.data})
    //        console.log(response.data)
    //     })
    //     .catch(error=>{
    //        dispatch({type:'FETCH_ERROR'})
    //     })
    //    },[])
    //    const [counterOne,setCounterOne]= useState(0);
    //    const [counterTwo,setCounterTwo]= useState(0);
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <>
            <div className='w-fit mt-4'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label>First Name: </label>
                    <input className='border border-gray-500'
                        {...bindFirstName}
                        type='text'
                    />
                    <label>Last Name: </label>
                    <input className='border border-gray-500'
                        {...bindLastName}
                        type='text'
                    />
                    <Button type='submit' size='medium'>Submit</Button>
                </form>
            </div>
            {/*  {state.loading? 'Loading': state.post.title}
            {state.error? state.error :null}
        </div>
       <div>First Count-{count.firstCounter}</div>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'increment1', value: 1})}>Increment1</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'decrement1', value: 1})}>Decrement1</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'Add1 5', value: 5})}>Add1 5</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'reset'})}>Reset1</Button>
        
        <div>Second Count-{count.secondCounter}</div>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'increment2', value: 1})}>Increment2</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'decrement2', value: 1})}>Decrement2</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'Add2 5', value: 5})}>Add2 5</Button>
        <Button variant='primary' size='medium' onClick={()=>dispatch({type:'reset'})}>Reset2</Button>
        
        */}
        </>
    );
}
export default UserForm;