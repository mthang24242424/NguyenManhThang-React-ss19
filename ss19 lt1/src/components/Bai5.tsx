import React, { useState } from 'react'

export default function Bai5() {
    const lists = [
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ]
    const [list, setList] = useState("Nhấn nút để lấy câu nói")

    const handleClick = () =>{
        const random = Math.floor(Math.random()* lists.length)
        setList(lists[random])
    }

  return (
    <div>
      <h2>Câu nói truyền cảm hứng hôm nay:</h2>
      <p>{list}</p>
      <button onClick={handleClick}>Lấy câu nói mới</button>
    </div>
  )
}
