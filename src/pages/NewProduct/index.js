import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

// import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import './style.css';

export default function  NewProduct () {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleNewProduct (e) {
        // e.preventDefault();

        // const data = {
        //     title,
        //     description,
        //     value,
        // };
        // console.log(data)
        // try {
        //     await api.post('/products', data, {
        //         headers: {
        //             Authorization: ongId,
        //         }
        //     });
        //     history.push('/profile');
        // } catch (err) {
        //     alert('erro no cadastro');
        // }

    }

    return (
        <div className="new-product-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" height={150}/>
                    <h1>Cadastrar novo Produto</h1>
                    <p>Descreva o produto detalhadamente para que os compradores possam saber o que estão comprando.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#207740"/>
                        Voltar para produtos
                    </Link>
                </section>
                <form onSubmit={handleNewProduct}>
                    <input
                        placeholder="Nome do produto"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => {setDescription(e.target.value)}}
                    />
                    <input
                        placeholder="Quantidade"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}