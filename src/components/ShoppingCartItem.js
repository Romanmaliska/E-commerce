import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../features/cartSlice";

const ShoppingCartItem = ({
    amount,
    item: { id, image, price, description, title, name },
}) => {
    const dispatch = useDispatch();

    return (
        <section className="">
            <img className="cart__image" src={image} alt=""></img>
            <div className="cart__heading">
                <h3 className="cart__title">{title}</h3>
                <p className="cart__price">
                    <span className="product__currency">€</span>
                    {price}
                    <span className="product__cents">,00</span>
                </p>
            </div>
            <p className="cart__description">{name}</p>
            <p className="cart__tax">Cena vrátanie DPH</p>
            <button className="" onClick={() => dispatch(removeItem(id))}>
                remove item
            </button>
            <button className="" onClick={() => dispatch(increase({ id }))}>
                ++++
            </button>
            <button className="" onClick={() => dispatch(decrease({ id }))}>
                ----
            </button>
            <h1>{amount}</h1>
        </section>
    );
};

export { ShoppingCartItem };
