import React, {  useRef, useState } from 'react'

export default function Bai3() {
    const [input, setInput] = useState<string>("");
    const renderCount = useRef<number>(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value) 
        renderCount.current += 1
    }
    console.log("render");
    
  return (
    <div>
      <h2>Component Render Counter</h2>
      <label>Input: </label>
      <input type="text" value={input} onChange={handleChange} /> <br />
      <div>Component đã render: {renderCount.current} lần</div>
    </div>
  )
}
