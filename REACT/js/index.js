const Footer = (props) => {
    return (
        <footer className="py-3 text-black text-sm mt-5 text-center">
            CopyRight {props.year} | {props.owner}      
        </footer>
    )
};

const Button = ({classProps, onClick, text}) => {
    return (
        <div>
            <button type="button" className={ `${classProps} px-4 py-2 rounded font-bold` } onClick={onClick}> {text}</button>
        </div>
    )
}

const Input = ({text, type}) => {
    return (
        <label className="block mt-3 text-gray-600">{text} :
            <input type={type} className="border rounded px-3 py-1 mt-1 w-full" placeholder={`Insert your ${text}`}></input>
        </label>
    )
}

// Composant ReactAppFromCDN
const ReactAppFromCDN = () => {
    const onClickPrimary = () => {
        console.log("Primary button clicked");
    };  
    const onClickSecondary = () => {
        console.log("Secondary button clicked");
    };
    // Le composant retourne une chaîne de caractères "Hello World!" (JSX)
    return (
        <div className="container mx-auto bg-blue-500 sm:bg-red-500 md:bg-green-400 text-white">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="text-5xl font-bold text-white">
                    React CDN with Tailwind
                </h1>
                <div className="mx-auto mt-4">
                    <p className="text-xl mb-4">React component</p>
                    <div className="flex justify-center gap-3">
                        <Button classProps="bg-pink-400 hover:bg-blue-400" text="Primary" onClick={onClickPrimary}/>
                        <Button classProps="bg-blue-400 hover:bg-pink-400" text="Secondary" onClick={onClickSecondary}/>
                    </div>
                    <div className="text-left mt-4">
                        <Input text="Name" type="text"/>
                        <Input text="Username" type="email"/>
                        <Input text="Password" type="password"/>
                        <Footer year="2020-2023" owner="Class React"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
// Rendu du composant ReactAppFromCDN dans l'élément avec l'ID "root"
ReactDOM.render(<ReactAppFromCDN />, document.getElementById("root"));
