
import { useState } from 'react'
import './App.css'

function App() {

  const [Color, setColor] = useState("white")


  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: Color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-3 rounded-2xl text-white">
          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-red-800' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>red</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-green-800' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>green</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-pink-800' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>pink</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-blue-800' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>blue</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-yellow-800' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>yellow</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-cyan-500' style={{ backgroundColor: "aqua" }} onClick={() => setColor("aqua")}>aqua</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-purple-800' style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>purple</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg shadow-slate-800' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>black</button>


        </div>
      </div>

    </div>
  )
}

export default App
