import React , {useState} from 'react';
import { Link } from 'react-router-dom';
 import Navbar from '../../components/navbar';
 import Button from '../../components/button';
 import Alert from '../../components/alert';
const Practice=()=>{
    const [alert,setAlert]= useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type : type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000)
}
    const [mode,setMode]= useState('dark');
const toggleMode=()=>{
  if(mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor= '#181818'
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor= 'white'
  }
}
    const [text , setText] = useState('');
    const handleOnChange=(e)=>{
        setText(e.target.value);
     reset();
    }
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       reset();
       
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
     reset();
     }
     const handleClearClick=()=>{
        setText('');
       reset();
     }
     const handleTimeClick=()=>{
        document.getElementById('time').innerHTML=`${text.split(' ').length * 0.008.toPrecision(3)} minutes`
     }
     const reset=()=>{
        document.getElementById('time').innerHTML='';
     }
     const handleCopy=()=>{
        var text = document.getElementById('myTextBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert('text copied to clipboard','success')
     }
     const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
     }
return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert showAlert={showAlert} alert={alert} />

    <div className='flex flex-col mt-0 ml-6 w-full'>
        <h1 className='text-black text-2xl mb-6 ml-6'>Enter Text To Analyze</h1>
        <div className='flex flex-row'>
        <textarea className='w-3/4 h-40 pl-2 pt-2 text-sm bg-slate-200 border border-gray-900 ' id='myTextBox' value={text} onChange={handleOnChange}>
            
        </textarea>
        <div className='flex flex-col ml-6'>
        <h2 class='text-2xl text-black text-bold'>Text Summary</h2>
<p className='text-xs mt-4'>{text.split(' ').filter((el)=>{return el.length != 0}).length} {text.split(' ').length> 1 ? 'words': 'word'} and {text.length} {text.length > 1 ? 'characters': 'character'}</p>
</div>
        </div>
        <div className='flex flex-row mt-2 '>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-2 disabled:bg-blue-400' onClick={handleUpClick}>
                convert to Upper Case
            </Button>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-2 disabled:bg-blue-400' onClick={handleLoClick}>
                convert to lower Case
            </Button>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-2 disabled:bg-blue-400' onClick={handleClearClick}>
                Clear Text
            </Button>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-2 disabled:bg-blue-400' onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </Button>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-2 disabled:bg-blue-400' onClick={handleCopy}>
                Copy Text
            </Button>
            <Button variant='blue' disabled={text.length === 0} className='rounded-md mr-4 disabled:bg-blue-400' onClick={handleTimeClick}>
                Words Reading Time
            </Button>
            <p id='time'></p>
        </div>
        <h1 className='text-black text-2xl mt-4 mb-4 ml-6'>Preview</h1>
        <p>{text.length> 0 ? text:'type something in textbox to see its preview here.'}</p>
    </div>
    </>
);
}
export default Practice;