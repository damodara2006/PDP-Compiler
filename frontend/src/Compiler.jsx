import React, { useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import axios from "axios"
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import { FaLinkedin } from "react-icons/fa";
function Compiler() {
  const editorValueRef = useRef('python');
  const [output, setoutput] = useState(null)
  const [lang, setlang] = useState('java')
  const [input, setinput] = useState()

  const res = () => {
    const loading = toast.loading("Processing", { position: "top-center", autoClose: 5000, style: { backgroundColor: "black" } })
    axios.post("http://54.234.97.38:8081/compile", { code: editorValueRef.current, language: lang, input: input })
      .then(res => {
        console.log(res)
        setoutput(res.data)
        toast.update(loading, { type: "success", isLoading: false, render: "Success !", autoClose: 1500, style: { backgroundColor: "black", height: "5px" } })
      })
  }

  return (
    <div className="min-w-screen min-h-screen">
      <ToastContainer />

      <nav className='w-[100%] flex justify-evenly relative h-10 items-center'>
        <div className='flex justify-start  w-[30%]'>
          <h1 className=' left-5 font-bold '>PDP Compiler</h1>
        </div>
        <select name="language" id="lang" onChange={(e) => { setlang(e.target.value) }} className='bg-gray-600 h-7  cursor-pointer text-white w-[30%] outline-0  rounded-sm justify-center text-center' >
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>



        </select>
        <div className='text-gray-700 w-[30%] text-center cursor-pointer justify-center flex flex-row items-center'>
          <p>Contact</p>
          <a href="https://www.linkedin.com/in/damodara-prakash-p-b056a2291/"><FaLinkedin className='ml-3' />  </a>

        </div>
      </nav>
      <div className='flex w-full '>
        <div className='w-[80%]  relative' ><Editor
          height="70vh"
          width="100%"
          theme="vs-dark"
          language={lang}
          defaultValue="class Main{
          public static void main(String[] args){
          // Enter you code here
  }
}"
          onChange={(e) => editorValueRef.current = e}

        />
          <button
            className=" px-3 py-1 mr-1 mt-1 cursor-pointer rounded-sm absolute right-1 animate-bounce bottom-2 z-50 hover:bg-gray-100  bg-white hover:scale-105 transition-all font-semibold"
            onClick={res}
          >
            Get Output
          </button>
        </div>


        {output ? <div className='  pl-5 w-[100%] overflow-x-scroll '>
          <h1 className='font-bold mt-3 '>Output: </h1>
          <p className='h-full w-[20%] outline-0'>
            <pre>{output}</pre>
          </p>
        </div> : <div className=' w-[20%] '>
          <h6 className='text-4xl mt-2  text-gray-400 ml-2'>Output</h6>
        </div>}
      </div>
      <div className='h-full '>
        <textarea
          name="input"
          id="inp"
          className='border w-[80%] h-[200px] pl-5 pt-5 outline-0 bg-gray-50 rounded-sm'
          placeholder='Enter your inputs'
          onChange={(e) => setinput(e.target.value)}
        ></textarea>
      </div>

    </div>
  );
}

export default Compiler;
