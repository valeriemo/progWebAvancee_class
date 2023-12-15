// Fichier d'entrée
import Header from "./components/Header";

function App() {
    return (
        <div className="font-sans min-h-screen">
            <div className="container mx-auto p-8 border-4 border-blue-400 mt-16 bg-[#daccd569] rounded-[10px] max-w-screen-md text-lg">
                <Header title="To do list" />
            </div>
        </div>
    );
}

export default App;
