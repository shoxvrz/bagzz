import React from 'react'
import useCart from '../../hooks/UseCart'

const CartPage = () => {
    const {cartItems} = useCart()

  return (
    <div className='cart'>
        {
            cartItems.length === 0 ?(
                <p>Empty</p>
            ) : (
                cartItems.map((pro) => (
                    <div key={pro.id} className="cart__product">

                        <h1>pro.title</h1>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default CartPage