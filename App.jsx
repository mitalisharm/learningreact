import { useState } from "react"

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className=" flex w-full h-screen justify-center" 
    style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap  gap-5 top-12 px-2 py-2 bg-white rounded">
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}>Red</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}>Green</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}>Blue</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"purple"}}
        onClick={()=>setColor("purple")}>Purple</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"magenta"}}
        onClick={()=>setColor("magenta")}>Magenta</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"orange"}}
        onClick={()=>setColor("orange")}>Orange</button>      
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"pink"}}
        onClick={()=>setColor("pink")}>Pink</button>
        <button className="outline-none px-4 py-1 rounded text-white" style={{backgroundColor:"black"}}
        onClick={()=>setColor("black")}>Black</button>
        </div>
    </div>
  )
}

export default App
