import React from 'react'

export default function Header(props) { // recebe como parametro as propriedades - em vez de trazer todas 
    // pode colocar as que for utilizar dentro de {}
    return (
        <header>
            {/* Utilizando a propriedade titulo que veio como um parametro */}
            <h1>{props.title}</h1> 
        </header>
    )
}

// export default Header 
// pode colocar a exportacao aqui fora ou antes da funcao como foi feito