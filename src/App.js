import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState('');
  return (
    <>
      <div className=' flex justify-center h-screen my-4  '>
        <div className='w-4/6   bg-white lg:w-4/12 lg:mx-8 lg:h-3/4'>
          <div className='flex justify-center items-center'>
            <h1 className='text-3xl'>Calculator</h1>
          </div>

          <div className=' flex  bg-gray-200 justify-center items-center py-6 my-5 rounded-3xl'>
            {value}



          </div>
          <div >
          <div class="grid grid-cols-3 gap-3 mx-7 ">
            <div><button value="*" onClick={((e)=>{setValue(value+ e.target.value)})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>*</button></div>
            <div><button  value="/"   onClick={((e)=>{setValue(value+ e.target.value)})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer '>/</button></div>
            <div><button  value="-"   onClick={((e)=>{setValue(value+ e.target.value)})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>-</button></div> 
            <div><button  value="7"   onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>7</button></div>
            <div><button  value="8"  onClick={((e)=>{setValue(value+ e.target.value)})}    className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>8</button></div>
            <div><button  value="9"   onClick={((e)=>{setValue(value+ e.target.value)})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>9</button></div>
            <div><button  value="4"  onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>4</button></div>
            <div><button  value="5"  onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>5</button></div>
            <div><button  value="6"  onClick={((e)=>{setValue(value+ e.target.value)})}    className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>6</button></div>
            <div><button  value="1"  onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>1</button></div>
            <div><button  value="2"  onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>2</button></div>
            <div><button value="3"   onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>3</button></div>
            <div><button  value="+"  onClick={((e)=>{setValue(value+ e.target.value)})}    className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>+</button></div>
            <div><button  value="."  onClick={((e)=>{setValue(value+ e.target.value)})}   className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>.</button></div>
            <div><button  value="="   onClick={((e)=>{setValue(eval(value))})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>=</button></div>
            <div><button  value="=DE"   onClick={((e)=>{setValue(value.slice(0,-1))})}  className='bg-slate-400 w-7/12 rounded-md h-9 cursor-pointer'>DEL</button></div>



            </div>
          
          </div>




        </div>




      </div>

    </>
  );
}

export default App;
