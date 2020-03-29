import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {

    /**
     * Estrategia para armazenar os elementos do input e enviar para o back 
     * é a utilizacao de estados, por isso é necessario importar useState
     */

    const [name, setName] = useState('') // estado inicial vazio para nome 
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    /**
     * Usamos o useHistory quando nao podemos utizar a rota do JS.
     * ele foi colocado depois que o item é cadastrado
     */
    const history = useHistory()

    /**
     * Function responsavel por fazer o cadastro do usuario
     * handleRegister
     * disparada assim que o form envia submit
     */

    async function handleRegister(e) {
        e.preventDefault() // Previne o comportamento padrao do form de recaregar a página

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,    
        }

        try {
            const response = await api.post('ongs', data) // o await espera essa api.post retornar a resosta,
            // mas sempre que colocar await tem que lembrar de colcoar async na funcao no caso handleRegister
            alert(`Seu id de acesso ${response.data.id}`)

            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }

        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforme e ajude pessoas.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Tenho cadastro
                    </Link>
                </section>       
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} // usado para ouvir o que é modificado nesse input
                        // e => ser para pegar o evento de mudança
                    />
                    <input 
                        type="email" 
                        name="" id="" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form> 
            </div>    
        </div>
    )
}