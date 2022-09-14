import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { ShoppingCartItem } from "../components/ShoppingCartItem";

const ShoppingCart = () => {
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();


    if (cartItems.length > 0) {
        return (
            <section>
                <h1 className="">Nákupný košík</h1>
                <button onClick={() => dispatch(clearCart())}>Delete cart</button>
                {cartItems.map((cartItem) => (
                    <ShoppingCartItem key={cartItem.item.id} {...cartItem} />
                ))}
            </section>
        );
    }
    return <h1 className="">Váš nákupný košík je prázdny</h1>;
};

export { ShoppingCart };
