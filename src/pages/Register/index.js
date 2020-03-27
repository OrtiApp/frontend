import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

export default function Register () {

    const [name, setName] = useState('');    
    const [cpf, setCpf] = useState('');    
    const [whatsapp, setWhatsapp] = useState('');    
    const [city, setCity] = useState('');    
    const [uf, setUf] = useState('');    

    const history = useHistory();

    async function handleRegister(e) {
        // e.preventDefault();

        // const data = {
        //     name,
        //     cpf, 
        //     whatsapp,
        //     city,
        //     uf
        // };
        // try {
        //     const response = await api.post('/ongs', data);
        //     alert(`Seu id de acesso: ${response.data.id}`);
        //     history.push('/')
        // } catch (err) {
        //     alert('Erro no cadastro, tente novamente');
        // } 
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#74b438"/>
                        Já possui uma conta? Acesse aqui.
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            style={{ width:80 }}
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}