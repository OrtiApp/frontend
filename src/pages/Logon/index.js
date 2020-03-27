import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link , useHistory} from 'react-router-dom'

import './style.css';
import farmerImg from '../../assets/farmer.png';

// import api from '../../services/api';

export default function Logon () {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogon (e) {
    //     e.preventDefault();

    //     try {
    //         const response = await api.post('/sessions', { id });
    //         localStorage.setItem('ongId', id);
    //         localStorage.setItem('ongName', response.data.name);
    //         history.push('/profile');

    //     } catch (err) {
    //         alert('Falha no login, tente novamente...');
    //     }


    }
    return (
        <div className="logon-container">
            <div className="content">
                <section className="form">

                    <form onSubmit={handleLogon}>
                        <h1>Faça seu Logon</h1>

                        <input
                            placeholder="Seu CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            />
                        <input
                            placeholder="Sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        <button className="button" type="submit">Entrar</button>

                        < Link className = "back-link" to = "/register" >
                            <FiLogIn size={16} color="#749e4c"/>
                            Não tenho cadastro.
                        </Link>
                    </form>
                </section>
                
                <img src={farmerImg} alt="farmer"/>
            </div>
        </div>
    );
}