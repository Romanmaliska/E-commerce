import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const client = axios.create({
    baseURL: "https://mockend.com/",
});

const Product = () => {
    const { Id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(true);
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await client.get(
                    `/romanmaliska/mocked/furnitures/${Id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [Id]);

    if (isLoading) return <h1>Is Loading...</h1>;

    if (isError) return <h1>Error</h1>;

    console.log(product);

    const { title, price, description, image , name  } = product

    return (
        <section className="cart">
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
                <div className="cart__buttons">
                    <button className="btn btn__secondary cart__btn">Pridať do nákupného košíka</button>
                    <svg
                        className="icon product__icon"
                        aria-label="favorites"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                    >
                        <path d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path>
                    </svg>
                </div>
                <p className="cart__description">{description}</p>
        </section>
    );
};

export { Product };
