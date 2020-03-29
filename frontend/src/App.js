import React from 'react' // importando alem do react , o useState para controle dos estados

import './global.css'

import Logon from './pages/Logon' // importando o componente Header

// Quando o html esta escrito de um arquivo JS nos chamamos de JSX
// JSX (JavaSript + XML)

export default function App() {
    return (
        <Logon />
    );
}

