import React from "react";

const Footer = () => {
    return (
        <section className="socials">
            <div className="socials__wrapper">
                <article>
                    <svg
                        className="socials__icon"
                        aria-label="Facebok"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 12c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9c0 4.4922 3.2912 8.2155 7.5938 8.8907v-6.2891H8.3086V12h2.2852v-1.9828c0-2.2556 1.3436-3.5016 3.3994-3.5016.9847 0 2.0146.1758 2.0146.1758v2.2149h-1.1349c-1.118 0-1.4667.6937-1.4667 1.4054V12h2.4961l-.399 2.6016h-2.0971v6.2891C17.7088 20.2155 21 16.4922 21 12z"
                        ></path>
                    </svg>
                    <svg
                        className="socials__icon"
                        aria-label="Instagram"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 7.3795c.8036 0 1.567.241 2.2902.6428.7232.4018 1.2857.9643 1.6875 1.6875.4018.7232.6428 1.4866.6428 2.2902 0 .8438-.241 1.6071-.6428 2.3304-.4018.7232-.9643 1.2857-1.6875 1.6875-.7232.4017-1.4866.6026-2.2902.6026-.8438 0-1.6071-.2009-2.3304-.6026-.7232-.4018-1.2857-.9643-1.6875-1.6875-.4017-.7233-.6026-1.4866-.6026-2.3304 0-.8036.2009-1.567.6026-2.2902.4018-.7232.9643-1.2857 1.6875-1.6875.7233-.4018 1.4866-.6428 2.3304-.6428zm0 7.6339c.8036 0 1.5268-.2813 2.1295-.8839.5625-.5625.8839-1.2857.8839-2.1295 0-.8036-.3214-1.5268-.8839-2.1295-.6027-.5625-1.3259-.8839-2.1295-.8839-.8438 0-1.567.3214-2.1295.884-.6026.6026-.8839 1.3258-.8839 2.1294 0 .8438.2813 1.567.884 2.1295.5624.6026 1.2856.8839 2.1294.8839zm5.9062-7.8348c0-.2813-.1205-.5224-.3214-.7634-.241-.201-.4821-.3214-.7634-.3214-.3214 0-.5625.1205-.7634.3214-.241.241-.3214.4821-.3214.7634 0 .3214.0804.5625.3214.7634.2009.241.442.3214.7634.3214.2813 0 .5224-.0804.7232-.3214.2009-.201.3215-.442.3616-.7634zm3.0536 1.0848c0 .7634.0402 2.0089.0402 3.7366 0 1.7679-.0402 3.0134-.0804 3.7768-.0401.7634-.1607 1.4062-.3214 1.9687-.2411.6831-.6428 1.2857-1.125 1.7679-.4821.4821-1.0848.8437-1.7277 1.0848-.5625.2009-1.2455.3214-2.0089.3616C14.9732 21 13.7277 21 12 21c-1.7679 0-3.0134 0-3.7768-.0402-.7634-.0402-1.4062-.1607-1.9687-.4018-.683-.2009-1.2858-.5625-1.7679-1.0446-.4821-.4822-.8437-1.0848-1.0848-1.7679-.201-.5625-.3214-1.2053-.3616-1.9687C3 15.0134 3 13.7679 3 12c0-1.7277 0-2.9732.0402-3.7366.0402-.7634.1607-1.4464.3616-2.009.241-.6428.6027-1.2455 1.0848-1.7276.4821-.4822 1.0848-.884 1.7679-1.125.5625-.1607 1.2053-.2813 1.9687-.3214C8.9866 3.0402 10.2321 3 12 3c1.7277 0 2.9732.0402 3.7366.0804.7634.0401 1.4464.1607 2.0089.3214.6429.241 1.2456.6428 1.7277 1.125.4822.4821.8839 1.0848 1.125 1.7277.1607.5625.2813 1.2455.3616 2.0089zm-1.9286 9.0402c.1608-.442.2411-1.1652.3215-2.1697 0-.5625.0402-1.4062.0402-2.491v-1.2858c0-1.0848-.0402-1.9285-.0402-2.491-.0804-1.0045-.1607-1.7277-.3215-2.1697-.3214-.8035-.9241-1.4062-1.7276-1.7276-.442-.1608-1.1652-.2411-2.1697-.3215-.6027 0-1.4464-.0402-2.491-.0402h-1.2858c-1.0848 0-1.9285.0402-2.491.0402-1.0045.0804-1.7277.1607-2.1697.3214-.8437.3215-1.4062.9242-1.7276 1.7277-.1608.442-.2813 1.1652-.3215 2.1697-.0402.6027-.0402 1.4464-.0402 2.491v1.2858c0 1.0848 0 1.9285.0402 2.491.0402 1.0045.1607 1.7277.3214 2.1697.3215.8437.9242 1.4062 1.7277 1.7276.442.1608 1.1652.2813 2.1697.3215.5625.0402 1.4062.0402 2.491.0402h1.2858c1.0848 0 1.9285 0 2.491-.0402 1.0045-.0402 1.7277-.1607 2.1697-.3215.8035-.3214 1.4062-.9241 1.7276-1.7276z"></path>
                    </svg>
                    <svg
                        className="socials__icon"
                        aria-label="YouTube"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21.5971 7.0313c.1465.6093.293 1.5572.3663 2.776L22 11.5l-.0366 1.6927c-.0733 1.2865-.2198 2.2005-.3663 2.8099-.1465.4063-.3663.7448-.6594 1.0156-.3296.3047-.6959.5078-1.1355.6094-.6593.1693-2.1245.2708-4.4689.3385L12 18l-3.3333-.0339c-2.3444-.0677-3.8462-.1692-4.4689-.3385-.4396-.1016-.8425-.3047-1.1355-.6094-.3297-.2708-.5495-.6093-.6594-1.0156-.1831-.6094-.293-1.5234-.3663-2.8099L2 11.5c0-.474 0-1.0495.0366-1.6927.0733-1.2188.1832-2.1667.3663-2.776.11-.4063.3297-.7448.6594-1.0495.293-.2709.696-.474 1.1355-.6094.6227-.1354 2.1245-.2708 4.4689-.3385L12 5l3.3333.0339c2.3444.0677 3.8096.203 4.4689.3385.4396.1354.8059.3385 1.1355.6094.2931.3047.5129.6432.6594 1.0495zM9.9487 14.276l5.2381-2.776-5.238-2.7422v5.5182z"></path>
                    </svg>
                    <svg
                        className="socials__icon"
                        aria-label="LinkedIn"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.209 3C3.5413 3 3 3.5413 3 4.209v15.582C3 20.4587 3.5413 21 4.209 21h15.582c.6677 0 1.209-.5413 1.209-1.209V4.209C21 3.5413 20.4587 3 19.791 3H4.209zm4.3656 3.9963c0 .8717-.7066 1.5783-1.5783 1.5783S5.4179 7.868 5.4179 6.9963s.7067-1.5784 1.5784-1.5784 1.5783.7067 1.5783 1.5784zm4.1642 3.7611c.3022-.6044 1.315-1.3297 2.5522-1.276 1.5.065 2.0473.6696 2.3572 1.012l.0272.0299c.2945.3241.5037.9068.638 1.5448.0867.4118.0627 3.0216.0443 5.0201-.0044.4788-.0085.9226-.0107 1.2926h-2.6866v-5.0374c-.0223-.3582-.2237-1.2297-.9067-1.376-.8395-.1799-1.3097.0549-1.5783.3684-.403.4701-.4366 1.0746-.4366 1.4776v4.5672h-2.6866V9.7164h2.6866v1.041zm-7.0522 7.6232V9.7164H8.373v8.6642H5.6866z"
                        ></path>
                    </svg>
                </article>
            </div>
        </section>
    );
};

export { Footer };
