import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null);

  //usecallback hook
  const passWordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@~#$%^&*(){}[]_+-`/.,<>\|;'"

    for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
    }

    setPassword(pass)


  } , [length ,numberAllowed , charAllowed , setPassword])

  //usecallback hook that copy to the text value written in input field and showing what to be selected
  const copyPasswordToClipBoard = useCallback(() => {
    //for showing what to be copied 
    passwordRef.current?.select();
    //optimization - this is define the range of copied valued
    passwordRef.current?.setSelectionRange(0 , 101);
    ~
    window.navigator.clipboard.writeText(password)

  } , [password])

  //useeffect hook
  useEffect(() => {
    passWordGenerator()
  } , [length , numberAllowed ,charAllowed , passWordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-7">
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                
                 type="range" 
                 min={6}
                 max={100}
                 value={length} 
                 className='cursor-pointer'
                 onChange={(e) => {setLength(e.target.value)}}
                 />
                 <label>length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {setNumberAllowed((prev) => ! prev);}}
              />
              <label htmlFor="numberInput">numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {setcharAllowed((prev) => ! prev);}}
              />
              <label htmlFor="numberInput">characters</label>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default App
