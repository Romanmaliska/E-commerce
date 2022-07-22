import React from "react";

const Services = () => {
    return (
        <section className="services">
            <h2 className="services__heading">Služby</h2>
            <article
                className="services__service"
                aria-label="Click and Pick Up"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M21 4H1v16h15V10H6v8H3V6h16v7.1707c-1.1652.4118-2 1.5231-2 2.8293v3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-3c0-1.3062-.8348-2.4175-2-2.8293V4zM8 18h2v-6H8v6zm6 0h-2v-6h2v6zm5-2c0-.5523.4477-1 1-1s1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3z"
                    ></path>
                </svg>
                <h2>Klikni a vyzdvihni od €2</h2>
                <p>Nakúpte on-line a vyzdvihnite na výdajnom mieste.</p>
                <p>Zistite viac</p>
            </article>
            <article className="services__service" aria-label="Transport">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M1 4h15v3h3.0246l3.9793 5.6848V18h-2.6567c-.4218 1.3056-1.6473 2.25-3.0933 2.25-1.446 0-2.6715-.9444-3.0932-2.25h-3.9044c-.4217 1.3056-1.6472 2.25-3.0932 2.25S4.4916 19.3056 4.0698 18H1V4zm3.0698 12c.4218-1.3056 1.6473-2.25 3.0933-2.25 1.446 0 2.6715.9444 3.0932 2.25H14V6H3v10h1.0698zM16 14.0007a3.24 3.24 0 0 1 1.2539-.2507c1.446 0 2.6715.9444 3.0933 2.25h.6567v-2.6848L17.9833 9H16v5.0007zM7.163 15.75c-.6903 0-1.25.5596-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25zm10.0909 0c-.6904 0-1.25.5596-1.25 1.25s.5596 1.25 1.25 1.25 1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25z"
                    ></path>
                </svg>
                <h2>Dopravné služby</h2>
                <p>Tovar vám privezieme domov alebo do firmy.</p>
                <p>Zistite viac</p>
            </article>

            <article className="services__service" aria-label="Plan Online">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fillRule="evenodd"
                        d="M13.0009 2.586 4 11.5868v5.4144h5.4142l8.9944-8.9944-5.4077-5.421zM6 15.0012v-2.5859l6.9991-6.9993 2.5828 2.589-6.9961 6.9962H6z"
                    ></path>
                    <path d="M4 21.0009h16v-2H4v2z"></path>
                </svg>
                <h2>Služba plánovania on-line</h2>
                <p>
                    Naplánujte si kuchyňu či úložné priestory z pohodlia domova.
                </p>
                <p>Zistite viac</p>
            </article>
            <article
                className="services__service"
                aria-label="365 Days Return Policy"
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001v-2.3516c.6699-.4304 1.9095-1.2834 3.1347-2.4084 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0155.3487.4768.7386.9326 1.1472 1.3617L8 11.9982l2 .0057-.017 6-6-.0171.0056-2 2.7743.0079c-.5387-.5472-1.0629-1.1451-1.5311-1.7852-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0z"></path>
                </svg>
                <h2>365 dní na rozmyslenie</h2>
                <p>V IKEA vám na rozmyslenie dáme celý rok!</p>
                <p>Zistite viac</p>
            </article>
        </section>
    );
};

export { Services };
