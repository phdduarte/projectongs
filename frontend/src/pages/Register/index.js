import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforme e ajude pessoas.</p>

                    <Link className="black-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>       
                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" name="" id="" placeholder="E-mail"/>
                    <input type="text" placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form> 
            </div>    
        </div>
    )
}