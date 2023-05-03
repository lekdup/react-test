import { useState } from 'react';
import './F0fimal.scss';

const F0fimal = () => {
    const [newPanda, setNewPanda] = useState('');

    return (
        <div className='content'>
            <h1>Les animaux</h1>
            <div className="result">
                <img src="https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" className="result-image" alt="panda eating bamboo leaves"/>
                <p className="result-name">Panda</p>
                <button className='result-close'>x</button>
            </div>
            <form className='form'>
                <input
                    type='text'
                    placeholder="Nom de l'animal"
                    className='form-name'
                />
                <input
                    type='url'
                    placeholder="Photo de l'animal (url)"
                    className='form-url'
                />
                <button
                    type='submit'
                    className='form-button'
                >
                    Ajouter un animal
                </button>
            </form>
        </div>
    )
}

export default F0fimal;