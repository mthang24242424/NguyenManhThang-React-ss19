import React, { useMemo } from 'react'

const cartItems = [
    {id: 1, name: "Sản phẩm A", price: 100000, quantity: 2},
    {id: 2, name: "Sản phẩm B", price: 200000, quantity: 1}
];
export default function Bai1() {
    const total = useMemo(() =>{
        return cartItems.reduce((sum,item)=> sum +item.price *item.quantity, 0)
    }, [cartItems])
  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map(item => (
            <li>
                {item.name} - {item.price.toLocaleString()}đ x {item.quantity}
            </li>
        ))}
      </ul>
      <div>Tổng: {total.toLocaleString()}đ</div>
    </div>
  )
}
