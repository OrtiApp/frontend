import React , { useEffect , useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

// import api from '../../services/api';

import './style.css';

export default function Profile () {

    // const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    // const ongName = localStorage.getItem('ongName');
    // const ongId = localStorage.getItem('ongId');

    // useEffect(() => {
    //     api.get('profile', {
    //         headers: {
    //             Authorization: ongId,
    //         }
    //     }).then(response => {
    //         setIncidents(response.data);
    //     })
    // }, [ongId]);

    async function handleDeleteProduct (id) {
    //     try {
    //         await api.delete(`incidents/${id}` , {
    //             headers: {
    //                 Authorization: ongId,
    //             }
    //         });

    //         setIncidents(incidents.filter(incident => incident.id !== id));
    //     } catch (err) {
    //         alert('erro delete')
    //     }
    }

    function handleLogout() {
    //     localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo" height={100}/>
                <span>Bem vindo, Fulano</span>

                <Link className="button" to="/product/new"> Cadastrar novo produto </Link>

                <button type="button" onClick={handleLogout} className="logout">Sair</button>
            </header>
            <h1>Produtos Cadastrados</h1>

            <ul>
                <li>
                    <strong>PRODUTO:</strong>
                    <p></p>

                    <strong>DESCRIÇÃO:</strong>
                    <p></p>

                    <strong>VALOR:</strong>
                    <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format('2000') }</p>

                    <button type="button" onClick={() => handleDeleteProduct()}>
                        <FiTrash2 size={20} color="#207740" />
                    </button>
                </li>
                <li>
                    <strong>PRODUTO:</strong>
                    <p></p>

                    <strong>DESCRIÇÃO:</strong>
                    <p></p>

                    <strong>VALOR:</strong>
                    <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format('2000') }</p>

                    <button type="button" onClick={() => handleDeleteProduct()}>
                        <FiTrash2 size={20} color="#74b438" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

// {incidents.map(incidents => (
//                     <li key={incidents.id}>
//                     <strong>CASO:</strong>
//                     <p>{incidents.title}</p>

//                     <strong>DESCRIÇÃO:</strong>
//                     <p>{incidents.description}</p>

//                     <strong>VALOR:</strong>
//                     <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value) }</p>

//                     <button type="button" onClick={() => handleDeleteIncident(incidents.id)}>
//                         <FiTrash2 size={20} color="#a8a8b3" />
//                     </button>
//                 </li>
//                 ))}