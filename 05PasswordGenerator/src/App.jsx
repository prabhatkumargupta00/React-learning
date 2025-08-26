/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState, useRef, use} from 'react'
import './App.css'

function App() {

  const [Length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  // useRef hook
  const PasswordRef = useRef(null);


  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumAllowed) str += '1234567890'
    if (CharAllowed) str += "!@#$%^&*()-_=+[]{}|;:,.<>?/`~"

    for(let i =1; i<= Length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  },[Length, NumAllowed, CharAllowed, setPassword])


  useEffect(()=>{
    PasswordGenerator()
  }, [Length, NumAllowed, CharAllowed,PasswordGenerator])

  const CopyPasswordToClipboard = useCallback(()=>{

    // TO select the password from input that make the user believe that the password is copied
    PasswordRef.current?.select();

    // To control selection range (not so needed) but just to learn;
    // THis will ensure that the value select effect only work on a pass with length ranges from 0 to 50
    PasswordRef.current.setSelectionRange(0,50);

    window.navigator.clipboard.writeText(Password);

    setTimeout(() => {
      alert("Copied to clipboard")
    }, 0);



  }, [Password])



  return (<>

    <div className="w-full max-w-xl mx-auto shadow-2xl rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-900">
      <h3 className='text-4xl text-center text-white mb-4 uppercase'>
        Password generator
      </h3>
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 bg-slate-300'
          placeholder='Password'
          readOnly
          ref={PasswordRef}
        />
        <button onClick={CopyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={5}
            max={50}
            value={Length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='text-lg'>length : {Length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={NumAllowed}
          id='numberInput'
            className='text-lg'
          onChange={(e)=>{
            setNumAllowed((prev) => !prev)
          }}
           />
          <label className='text-lg'>Numbers</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={CharAllowed}
          id='numberInput'
          onChange={(e)=>{
            setCharAllowed((prev) => !prev)
          }}
           />
          <label className='text-lg'> Characters</label>
        </div>



      </div>

    </div>
  </>
  )
}

export default App
