import React, { useEffect, useState } from 'react'

export default function Bai6() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key); 
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
       <h1>Phím bạn vừa ấn: </h1>
      <h2>
        {lastKey ? lastKey : ""}
      </h2>
    </div>
  )
}
