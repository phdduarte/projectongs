import React, {useState} from 'react' // importando alem do react , o useState para controle dos estados

import Header from './Header' // importando o componente Header

// Quando o html esta escrito de um arquivo JS nos chamamos de JSX
// JSX (JavaSript + XML)

export default function App() {
    const [counter, setCounter] = useState(0)

    function increment() { 
        setCounter(counter + 1)
    }

    return (
        <div>
            <Header>Contador: {counter}</Header> 
            <button onClick={increment}>Incrementar</button>    
        </div>
    );
}

