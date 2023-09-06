import React,{useState} from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Navbar from '../../components/navbar'

const GuessingGame=()=>{
const [isPanelOpen,setIsPanelOpen] = useState(false);
const handleOpen=()=>{
    setIsPanelOpen(true);
}
const [entered,setEntered]= useState('');
const [input,setInput]= useState('')
const [count,setCount]= useState(0);
const [result,setResult]=useState('')
const handleOnSubmit=(e)=>{
e.preventDefault();
let randomNum =  Math.floor((Math.random() * 15) + 1);
let x= Number(entered);
if(isNaN(x)){
setResult('Invalid input! Try again.')
}
else if(x < 1 || x > 15){
    setResult('Invalid Number! Enter number b/w 1 and 15')
}
else if(x === randomNum - 1 || x === randomNum + 1){
    setResult('Your Guess is too high 😲');
}
else if(x === randomNum){
    setResult('Your Guess is correct. You Won! 🥳')
}
else{
    setResult('Your Guess is too low 🥺')
}
setEntered(entered);
setInput(entered)
setCount(count + 1);
reset();
}
const reset=()=>{
    setEntered('');
    
}
const handleClose=()=>{
    setIsPanelOpen(false);
    setResult('');
}
    return (
        <>
<div className='w-full max-h-screen'>
    <Navbar/>
    <div className='flex justify-center items-center'>
    <h2 className='align-center pt-16 text-3xl font-bold'>Guessing Game</h2>
    </div>
    <div className='flex justify-center items-center mt-32'>
        <Button className='font-bold w-60 h-25ld py-2 px-4 shadow-black shadow-2xl' variant='primary' size='large' onClick={handleOpen}>Start Game</Button>
    </div>
</div>
<GamePanel 
isPanelOpen={isPanelOpen}
setIsPanelOpen={setIsPanelOpen}
handleOnSubmit={handleOnSubmit}
entered={entered}
setEntered={setEntered}
count={count}
result={result}
input={input}
handleClose={handleClose}
/>

        </>
    );
}
const GamePanel=({isPanelOpen,setIsPanelOpen,handleOnSubmit,entered,setEntered,count,result,input,handleClose})=>{
    return(
        <>
        

<div id="authentication-modal" tabindex="-1" aria-hidden="true" className={`fixed flex flex-center justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isPanelOpen? '' : 'hidden'}  `}>
    <div className="relative  w-full max-w-md max-h-full shadow-black shadow-2xl ">
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700  ">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal " 
            onClick={handleClose}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="mt-0 w-[360px] ml-8 justify-center bg-black rounded-sm items-center">
                <h3 className="mb-4 text-lg font-medium  text-white text-center center-align">Number Guessing Game</h3>
                </div>
                <h2 className='text-md text-center text-gray-700 mb-8'>Guess a number between 1-15</h2>
                <form className="space-y-6" action="#" onSubmit={handleOnSubmit}>
                    <div className='flex flex-col justify-center items-center'>
                   <Input value={entered} className='border-[1px] border-gray-800 text-center w-32 h-12 mb-10' type='text' placeholder='0' onChange={e=>setEntered(e.target.value)}/>
                   <Button variant='primary' size='large' className='w-28 h-12 rounded-md ' type='submit'>Guess</Button>
                
                   </div>
                   <div className='flex bg-slate-100 flex-col ml-20 justify-center items-center mt-6 w-[280px] shadow-xl shadow-black mb-6'>
                    <p className='text-gray-700 text-center text-size-md'>Guessed Numbers are:{input}</p>
                    <p className='text-gray-700 text-center text-size-md'>No. of guesses:{count}</p>

                   </div>
                   
                </form>
            <div className='flex ml-16 mt-6 justify-center items-center h-16 bg-white w-[300px] pb-8'>
                <h3 className='text-xl text-blue-500 text-center'>{result}</h3>
            </div>
        </div>
    </div>
</div> 

        </>
    );

}
export default GuessingGame;