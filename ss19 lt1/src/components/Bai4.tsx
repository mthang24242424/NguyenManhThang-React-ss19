import React, { useState } from 'react'

export default function Bai4() {
    const [form, setForm] = useState({
        name: "",
        email: ""
    })
    const [error, setError] = useState({
        name: "",
        email: ""
    })

    const check = (input: string, value: string) =>{
        let error = "";
        if(!value.trim()){
            error = "Trường này là bắt buộc"
        }else if (input === "email"){
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!regex.test(value)){
                error = "Email ko hợp lệ"
            }
        }
        setError(prev => ({
            ...prev,
            [input]: error
        }))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target
        setForm(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (event: React.FormEvent)=>{
        event.preventDefault();
        check("name", form.name);
        check("email",form.email);
        if (!error.name && !error.email && form.name && form.email) {
            alert("Gửi thành công!")
        }
    }
  return (
    <div>
        <h2>Đăng kí thông tin </h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Họ tên</label> <br />
            <input type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
            />
            {error.name && <p>{error.name}</p>}
        </div>

        <div>
            <label htmlFor="">Email</label> <br />
            <input type="text"
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
        </div>

        <button type='submit'>Gửi</button>
      </form>
    </div>
  )
}
