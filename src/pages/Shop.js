import React, { useEffect, useState } from "react";
import { FilterProducts } from "../components/FilterProducts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const client = axios.create({
    baseURL: "https://mockend.com/",
});

const Shop = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(true);
    const [filter, setFilter] = useState({
        ascending: true,
        operator: "gt",
        value: 200,
        field: "price",
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const { field, operator, value, ascending } = filter;
        setLoading(true);
        const fetchProductsdata = async () => {
            setError(false);
            const searchParams = new URLSearchParams();

            if (field) {
                searchParams.set(`${field}_${operator}`, value);
            }

            searchParams.set("price_order", ascending ? "asc" : "desc");

            try {
                const response = await client.get(
                    "romanmaliska/mocked/furnitures?limit=40",
                    { params: searchParams }
                );
                setData(response.data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsdata();
    }, [filter]);

    if (isLoading) return <h1>Is Loading...</h1>;

    if (isError) return <h1>Error</h1>;

    console.log(data);

    return (
        <div>
            <FilterProducts />
            <section className="products">
                {data.map((product) => {
                    const { id, title, price, image, name } = product;

                    return (
                        <article className="product" key={id}>
                            <Link to={`/product/${id}`} key={id}>
                                <img
                                    className="product__image"
                                    src={image}
                                    alt=""
                                ></img>
                                <h3 className="product__title">{title}</h3>
                                <p className="product__description">{name}</p>
                                <p className="product__price">
                                    <span className="product__currency">€</span>
                                    {price}
                                    <span className="product__cents">,00</span>
                                </p>
                            </Link>
                            <div className="product__icons">
                                <svg
                                    className="icon product__icon product__icon-colored"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.4372 4h3.1244l.2922.4801 3.3574 5.517h5.0694l-.3104 1.2425L21.5303 13h-2.0615l.2506-1.0029H4.2808l1.3106 5.2426a1 1 0 0 0 .9702.7574H15v2H6.5616c-1.3766 0-2.5766-.9369-2.9105-2.2724L2.03 11.2397l-.3107-1.2426H6.788l3.357-5.517L10.4372 4zm2.0003 2L14.87 9.9971H9.1291L11.5614 6h.8761zm5.5586 10v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
                                    ></path>
                                </svg>
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
                                <svg
                                    className="icon product__icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0z"
                                    ></path>
                                </svg>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export { Shop };
